function Digitalclock() 
{
        var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var day = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear();
          if (minutes < 10) 
           {
            minutes = '0' + minutes;
           }
          else if (hours < 10)
           {
             hours = '0' + hours;
           }
          else if (seconds < 10) 
           {
            seconds = '0' + seconds;
           }

    var clock= days[day] + ' '+ hours +':'+minutes+':'+seconds;
    document.getElementById('clock').innerHTML=clock;
}
    
    Digitalclock();
    setInterval(Digitalclock,1000);
