const second=document.querySelector("#second");
const minute=document.querySelector("#minute");
const hour=document.querySelector("#hour");

function watch(){
    let sec=new Date().getSeconds();
    let min=new Date().getMinutes();
    let ho=new Date().getHours();

    hour.style.transform = `rotate(${360+(ho*30)}deg)`;
    minute.style.transform = `rotate(${360+(min*6)}deg)`;
    second.style.transform = `rotate(${360+(sec*6)}deg)`;
    
    console.log(sec,min,ho);
}
setInterval(watch, 1000);

const hourEl=document.getElementById("hours");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function updateClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm= "AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    h= h < 10 ? "0" + h : h;
    m= m < 10 ? "0" + m : m;
    s= s < 10 ? "0" + s : s;
    hourEl.innerText=h+":";
    minuteEl.innerText=m+":";
    secondEl.innerText=s+" ";
    ampmEl.innerText=ampm;
    setTimeout(updateClock,1000)
    

}
updateClock();