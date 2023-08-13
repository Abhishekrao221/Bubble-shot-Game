let clutter = '';
let time = 30;
let score = 0;
let hitrn =0;

function box() {

    for (let i = 1; i <= 90; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="button">${rn}</div>`;
    }
    document.querySelector('.pbottom').innerHTML = clutter;

}


function timerIn() {
    let timers = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector('.btn2').textContent = time;
        } else {
            document.querySelector('.pbottom').innerHTML=`<h1>Game Over</h1>
            <h1>Score :- ${score}🙂 </h1> ` 
            clearInterval(timers)
        }
    }, 1000);

}

function newhit(){
     hitrn = Math.floor(Math.random() * 10);
    document.querySelector('.btn1').textContent = hitrn;

}

function incrementscore(){
   score += 10;
   document.querySelector('.btn3').textContent = score;
}


document.querySelector('.pbottom').addEventListener('click',function(e){
   let clickednum = Number(e.target.textContent);
   if(clickednum===hitrn){
    incrementscore();
    box()
    newhit();
   }
})



box();
timerIn();
newhit();
