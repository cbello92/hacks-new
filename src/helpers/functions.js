export function diffDays(dateNow, dateBd) {
    let newDateBd = new Date(dateBd);
    let Difference_In_Time = Math.round(dateNow.getTime() - newDateBd.getTime());
    
    let d, h, m, s;
    s = Math.floor(Difference_In_Time / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.ceil(h / 24);
    h = h % 24;
    
    return d === 0 ? newDateBd.toLocaleTimeString() : d === 1 ? "yesterday" : newDateBd.toLocaleTimeString('en-us', {  month: 'long', day: 'numeric' }).split(",")[0];

}