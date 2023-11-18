function padTime(time: number):string {
  return time>9? `${time}`: `0${time}`
}

export function parseTime(millisecond: number): string{
  const seconds = padTime(Math.floor((millisecond / 1000) % 60));
  const minutes = padTime(Math.floor((millisecond / (1000 * 60)) % 60 ));
  const hours = padTime(Math.floor((millisecond / (1000 * 60 * 60)) % 24));
  const days = Math.floor(millisecond / (1000 * 60 * 60 * 24)) ;
  return `${days? days + ':': ''}${hours}:${minutes}:${seconds}`
}

export function localDateStr(date:number): string {
  const localDate = new Date(date);
  const year = localDate.getFullYear();
  const month = localDate.getMonth();
  const day = localDate.getDay();
  const hour = padTime(localDate.getHours());
  const minute = padTime(localDate.getMinutes());
  const second = padTime(localDate.getSeconds());
  return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
}