let date;
let year;
let month;
let allMonthDays;
let weekDays;
let click=0;
let monthBlock = document.getElementById("month");


function calendar (){
  date = new Date();
  year = date.getFullYear();
  
  if(parseInt(date.getMonth().toString())+click==12) 
  {                                                  
    alert("test1");
    month = 0;
    year+=1;
  }
  else if(parseInt(date.getMonth().toString())+click==-1)
  {
    alert("test2");
    month = 11;
    year-=1;
  }
  else{
    month = date.getMonth()+click;
  }
  
  allMonthDays = new Date(year,month+1,0).getDate();
  
  date = new Date(year,month,1);
  weekDays = date.toString().charAt(0)+date.toString().charAt(1)+date.toString().charAt(2);
  
  switch(weekDays)
  {
    case "Sun":
      weekDays=7;
    break;
    case "Mon":
      weekDays=1;
    break;
    case "Tue":
      weekDays=2;
    break;
    case "Wed":
      weekDays=3;
    break;
    case "Thu":
      weekDays=4;
    break;
    case "Fri":
      weekDays=5;
    break;
    case "Sat":
      weekDays=6;
    break;
  }

  t = allMonthDays+weekDays-1;
  //alert(t);
  for(let i=0;i<37;i++)
  {
    document.getElementById(i).innerText = "";
  }

  for(let i=0;i<t;i++)
    {

        if(i<weekDays-1)
        {
        continue;
        }
        
        document.getElementById(i).innerText = i - weekDays + 2;
    }  
 
}

function back(){
  click-=1;
  calendar()
}

function next(){
  click+=1;
  calendar()
}

