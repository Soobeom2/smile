const elUp_li = document.querySelectorAll('main .visual_wrap li')
const elUp_btn = document.querySelectorAll('main .visual_wrap .Contact_button')
const elCh_btn = document.querySelector('main .checkbox_btn')


elCh_btn.onclick=function(){
    this.classList.toggle('active')
}

window.addEventListener('scroll',function(){
    elUp_li.forEach(function(p){
            if(p.offsetTop - (window.innerHeight*0.8) < window.scrollY){
            p.classList.add('active')
        }
    })
})

window.addEventListener('scroll',function(){
    elUp_btn.forEach(function(p){
            if(p.offsetTop - (window.innerHeight*0.8) < window.scrollY){
            p.classList.add('active');
        }
    })
})