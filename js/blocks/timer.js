function timer(){
    let deadline = '2020-12-14';
    let getTimeRemaning = (endtime)=>{
        let t = Date.parse(endtime) - Date.parse(new Date()),
        secundes = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        return {
            'total' : t,
            'hours' : hours,
            'secundes' : secundes,
            'minutes' : minutes
        };
    
    };
    function setTime(id, endtime){
        let timer = document.getElementById(id),
            secundes = timer.querySelector(".timer__item_secunds"),
            minutes = timer.querySelector(".timer__item_minutes"),
            hours = timer.querySelector(".timer__item_hour"),
            interval = setInterval(timeUpDate, 1000);
            function timeUpDate(){
                let t = getTimeRemaning(endtime);
                let addZero = (num)=>{
                    if(num <= 9){
                        return '0' + num;
                    }else{
                        return num;
                    }
                };
                secundes.textContent = addZero(t.secundes);
                minutes.textContent = addZero(t.minutes);
                hours.textContent = addZero(t.hours);
                if(t.total <= 0){
                    clearInterval(interval);
                }
            }
        
    }

setTime('timer', deadline);
}
module.exports = timer;