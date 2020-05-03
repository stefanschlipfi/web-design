const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')

const t1 = new TimelineMax();

t1.fromTo(hero,1,{height:'0%'},{height:'98%'});