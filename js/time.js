let t = null;
t = setTimeout(time, 1000);
function time() {
  clearTimeout(t);// 清除定时器
  dt = new Date();
  const y = dt.getFullYear();// 年
  const mt = dt.getMonth() + 1;// 月
  let day = dt.getDate();// 日
  day = day < 10 ? `0${day}` : day;
  let h = dt.getHours();// 时
  h = h < 10 ? `0${h}` : h;
  let m = dt.getMinutes();// 分
  m = m < 10 ? `0${m}` : m;
  let s = dt.getSeconds();// 秒
  s = s < 10 ? `0${s}` : s;
  document.querySelector('.showTime').innerHTML = `当前时间: ${y
  }年${mt}月${day}日${h}:${m}:${s}`;
  t = setTimeout(time, 1000);// 定时更新时间
}
