const elHeader = document.querySelector('header')
const elVisual = document.querySelector('main .visual_wrap')
const elHamburger = document.querySelector('header .trigger-menu')
const elPopup = document.querySelector('.header_menu_box_btn')

const backToTop = document.getElementById('backtotop');

const checkScroll=()=>{

    let pageOffset = window.pageYOffset;


    if(pageOffset !== 0){

        backToTop.classList.add('show');  
    }else{
        backToTop.classList.remove('show'); 
    }
}

const moveBackToTop=()=>{
    if(window.pageYOffset > 0 ){
    
        window.scrollTo({top:0, behavior:"smooth"});
    }
}


window.addEventListener('scroll', checkScroll);

backToTop.addEventListener('click',moveBackToTop);

let num = 0;

elHamburger.onclick = function(){

    if(num%2 == 0){
        elHeader.classList.add('active');
        elPopup.classList.add('active');}

        else{
        elHeader.classList.remove('active');
        elPopup.classList.remove('active');
        }
        num++;
    
}

let pos ={y:0, dy:0, state:true}
let scrollState = function(){
    pos.y = window.scrollY;
    pos.state = pos.y > pos.dy;
    pos.dy = pos.y;
}

    window.addEventListener('scroll',function(){
        scrollState();
        if(elVisual.offsetTop < window.scrollY){
            elHeader.classList.add('active')
            
        }else{
            elHeader.classList.remove('active')
            
        }
    })
