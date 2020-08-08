import { Request, Response } from 'express'
import db from '../database/connection';
import hourToMinutes from '../utils/hourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface FilterQuery {
  subject: string;
  time: string;
  week_day: number;
}

export default class LecturesController {
  async index(request: Request, response: Response) {
    const filters: FilterQuery | null = request.query;
    const time = filters?.time;
    const week_day = filters?.week_day;
    const subject = filters?.subject;

    if (!time || !week_day || !subject) {
      return response.status(400).json({
        error: 'Missing filter to search Lectures'
      })
    }

    console.log(filters)

    const timeInMinutes = hourToMinutes(time)
    const lectures = await db('lectures')
      .whereExists(function () {
        this.select('lecture_schedule.*')
          .from('lecture_schedule')
          .whereRaw('`lecture_schedule`.`lecture_id` = `lectures`.`id`')
          .whereRaw('`lecture_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`lecture_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`lecture_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('lectures.subject', '=', subject)
      .join('users', 'lectures.user_id', '=', 'users.id')
      .select(['lectures.*', 'users.*'])

    return response.json(lectures)
  }

  async create(request: Request, response: Response) {
    const { name, avatar_url: avatar, whatsapp, bio, subject, cost, schedule } = request.body;

    const trx = await db.transaction()

    try {
      const [user_id] = await trx('users').insert({
        name, avatar, whatsapp, bio
      })

      const [lecture_id] = await trx('lectures').insert({
        subject,
        cost,
        user_id
      })

      const lectureSchedule = schedule.map((item: ScheduleItem) => {
        return {
          lecture_id,
          week_day: item.week_day,
          from: hourToMinutes(item.from),
          to: hourToMinutes(item.to),
        }
      })

      await trx('lecture_schedule').insert(lectureSchedule)
      await trx.commit()

      return response.sendStatus(201)
    } catch (error) {
      console.log(error)
      await trx.rollback()
      return response.status(400).json({ error: 'Unexpected error while creating new lecture' })
    }
  }
}
