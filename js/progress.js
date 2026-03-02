const monthSelect = document.getElementById("monthSelect");
const yearSelect = document.getElementById("yearSelect");
const calendarDays = document.getElementById("calendarDays");

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function init(){
    months.forEach((m,i)=>{
        let option=document.createElement("option");
        option.value=i;
        option.text=m;
        monthSelect.appendChild(option);
    });

    for(let y=2020;y<=2030;y++){
        let option=document.createElement("option");
        option.value=y;
        option.text=y;
        yearSelect.appendChild(option);
    }

    monthSelect.value=currentMonth;
    yearSelect.value=currentYear;

    renderCalendar();
}

function renderCalendar(){
    calendarDays.innerHTML="";
    let firstDay=new Date(currentYear,currentMonth,1).getDay();
    let totalDays=new Date(currentYear,currentMonth+1,0).getDate();

    for(let i=0;i<firstDay;i++){
        calendarDays.innerHTML+="<div></div>";
    }

    for(let d=1;d<=totalDays;d++){
        let day=document.createElement("div");
        day.classList.add("day");
        day.innerText=d;

        day.addEventListener("click",()=>{
            document.querySelectorAll(".day").forEach(el=>el.classList.remove("selected"));
            day.classList.add("selected");
        });

        calendarDays.appendChild(day);
    }
}

function changeMonth(step){
    currentMonth+=step;
    if(currentMonth<0){
        currentMonth=11;
        currentYear--;
    }
    if(currentMonth>11){
        currentMonth=0;
        currentYear++;
    }
    monthSelect.value=currentMonth;
    yearSelect.value=currentYear;
    renderCalendar();
}

monthSelect.addEventListener("change",()=>{
    currentMonth=monthSelect.value;
    renderCalendar();
});

yearSelect.addEventListener("change",()=>{
    currentYear=yearSelect.value;
    renderCalendar();
});

init();