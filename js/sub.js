const elUp_Team = document.querySelector('main .Team_box_title')
const elWrap = document.querySelector('main .Team_box_wrap')

window.addEventListener('scroll',function(){
            if((elUp_Team.offsetTop + elWrap.offsetTop )- (window.innerHeight*0.8) < window.scrollY){
                elUp_Team.classList.add('active')
        }
})

let exChange = function(){
    $.ajax({
    url:'js/data.json',
    success:function(data){
        let item = '';

            $.each(data.data2,function(key,value){
                    item +=`
                    <li>
                        <div class="list_box_img">
                            <div class="list_img">
                                <img src="${value.src}" alt="">
                            </div>

                            <div class="list_txt">
                                <p class="title">${value.title}</p>
                                <p class="sub">F${value.sub}</p>
                            </div>
                        </div>
                    </li>`    
                })
                $('.visual_wrap ul').html(item);
                const elUp_li = document.querySelectorAll('main .visual_wrap li')
                const elWrap = document.querySelector('main .Team_box_wrap')
                
                
                window.addEventListener('scroll',function(){
                elUp_li.forEach(function(p){
                        if((p.offsetTop + elWrap.offsetTop) - (window.innerHeight*0.8) < window.scrollY){
                        p.classList.add('active')
                    }
                })
            })
            }
        });
    }
    exChange();

