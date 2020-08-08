export default function hourToMinutes(time: string) {
  const oneHourInMinutes = 60;
  const [hour, minutes] = time.split(':').map(Number)
  const timeInMinutes = (hour * oneHourInMinutes) + minutes;

  return timeInMinutes;
}
