# Proffy Server

![](https://img.shields.io/badge/nextlevelweek-2.0-blueviolet?style=flat-square)

## 💡 Project

Proffy is a web platform that helps you connect with students and teachers.

## 🛠 Tools

- [Node.js](https://nodejs.org/en/docs/)
- [Knex](http://knexjs.org/)
- [Express](http://expressjs.com/)
- [Ky](https://www.npmjs.com/package/ky)
- [Pg](https://www.npmjs.com/package/pg)

## 🚀 Quick start

### Pre-requisites

- [Node.js](https://nodejs.org/en/) >= 10.0
- [PostgreSQL](https://www.postgresql.org/) >= 11.0

### Installation

```bash
$ cd proffy-server
$ yarn knex:migrate
$ yarn dev:server
```

### Usage

### API Endpoints

`GET` **/api/lectures** - List Lectures

- Query Parameters

| Name              | Description     |
| ----------------- | --------------- |
| week_day (number) | Day of the week |
| subject (string)  | Class subject   |
| time (string)     | Time start      |

> Note: use time in format "10:00"

`POST` **/api/lectures** - Create Lectures

- Body (JSON)

| Name                | Description                |
| ------------------- | -------------------------- |
| name (string)       | Name of the teacher        |
| avatar_url (string) | Teacher's avatar image url |
| whatsapp (string)   | Teacher's whatsapp number  |
| bio (string)        | Description                |
| subject (string)    | Subject desired to teach   |
| cost (number)       | Cost per lecture           |
| schedule (array)    | Lectures schedule          |

```json
	"schedule": [
		{ "week_day": 1, "from": "8:00", "to": "12:00" },
		{ "week_day": 3, "from": "10:00", "to": "18:00" },
		{ "week_day": 4, "from": "8:00", "to": "12:00" }
	]
```

`GET` **/api/connections** - List Connections

`POST` **/api/connections** - Create Connection

- Body (JSON)

| Name             | Description  |
| ---------------- | ------------ |
| user_id (number) | Teacher's ID |

## 📝 License

This project is licensed under the terms of the [MIT](https://github.com/jeferson-sb/proffy-server/blob/master/LICENSE) license

`Made with ♥ by Jeferson © 2020`
