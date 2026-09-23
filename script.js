const phone='5562982210165';
const msg=encodeURIComponent('Olá! Vim pelo site da XGames Goiânia e gostaria de mais informações.');
document.querySelectorAll('[data-wa]').forEach(el=>{el.href=`https://wa.me/${phone}?text=${msg}`;el.target='_blank';el.rel='noopener'});
document.getElementById('year').textContent=new Date().getFullYear();
