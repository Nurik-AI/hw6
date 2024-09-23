const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const text = document.getElementById('text')

const formatNum = (num) =>{
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}


let inteval = setInterval(() => {
    let data = new Date();
    let x = new Date(2024,8,22);
days.textContent = formatNum( Math.floor((x.getTime() - data.getTime())/ 1000 / 60 / 60/ 24 ))
hours.textContent = formatNum( Math.floor(((x.getTime() - data.getTime())/ 1000 / 60 / 60)% 24 ))
minutes.textContent =  formatNum(Math.floor(((x.getTime() - data.getTime())/ 1000 /60 )%60))
seconds.textContent = formatNum( Math.floor(((x.getTime() - data.getTime())/ 1000 )% 60 ))
if(x <= data){
    clearInterval(inteval)
    days.textContent = '0'
    hours.textContent = '0'
    minutes.textContent = '0'
    seconds.textContent = '0'
    text.textContent ="Поздравляю"

}
},1000)