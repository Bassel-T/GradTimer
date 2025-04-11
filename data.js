function dateDifference(date1, date2) {  
    const millisecondsInSecond = 1000;
    const millisecondsInMinute = 60 * millisecondsInSecond;
    const millisecondsInHour = 60 * millisecondsInMinute;
    const millisecondsInDay = 24 * millisecondsInHour;
  
    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
  
    // Calculate months (approximate)
    months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months -= date1.getMonth();
    months += date2.getMonth();

    if (date1.getDate() > date2.getDate() && months != 0) {
        months--;
    }
  
    // Calculate remaining milliseconds after months
    let tempDate = new Date(date1);
    let diffInMilliseconds = Math.abs(date2.getTime() - tempDate.getTime());
  
    // Calculate days
    days = Math.floor(diffInMilliseconds / millisecondsInDay);
    diffInMilliseconds %= millisecondsInDay;
  
    // Calculate hours
    hours = Math.floor(diffInMilliseconds / millisecondsInHour);
    diffInMilliseconds %= millisecondsInHour;
  
    // Calculate minutes
    minutes = Math.floor(diffInMilliseconds / millisecondsInMinute);
    diffInMilliseconds %= millisecondsInMinute;
  
    // Calculate seconds
    seconds = Math.floor(diffInMilliseconds / millisecondsInSecond);
  
    return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setInterval(() => {
    const now = new Date();
    const start = new Date("August 8 2022 05:00");
    const target = new Date("May 10 2025 19:00");

    const completed = now > target;
    const progressedMilliseconds = now - start;
    const totalMilliseconds = target - start;

    const dat = completed ? "00:00:00:00" : dateDifference(now, target);
    const time = document.getElementById("countdown");
    time.innerHTML = dat;

    const frac = completed ? 100 : 100 * progressedMilliseconds / totalMilliseconds;
    document.getElementById("myBar").style.width = `${frac}%`;
    document.getElementById("progress").innerHTML = `${frac}%`;
}, 1000);
