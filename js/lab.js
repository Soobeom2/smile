const elBtn_more = document.querySelector('main .show_img')
const elBtn_close = document.querySelector('main .Lab_load_more_box')


let exChange = function(){
    $.ajax({
    url:'js/data.json',
    success:function(data){
        let item = '';
        let elUp_li;


        let more = function(n,m){
            $.each(data.data3,function(key,value){
                if(key >= n && key < m ){
                    item =`

                    <li>
                        <a href="#">
                            <div class="list_box_img">
                                <div class="list_img">
                                    <img src="${value.src}" alt="${value.title}">
                                </div>

                                <div class="list_txt">
                                    <p class="title">${value.title}</p>
                                    <p class="sub">${value.sub}</p>
                                </div>
                            </div>
                        </a>
                    </li>`    
                }else{item='';}
                $('.visual_wrap ul').append(item);
            })

            elUp_li = document.querySelectorAll('main .visual_wrap li')
        
            window.addEventListener('scroll',view)
        }

        function view(){
            elUp_li.forEach(function(p){
                if(p.offsetTop - (window.innerHeight*0.8) <= window.scrollY){
                    p.classList.add('active')
                }
        })
}

        more(0,12);

        

            let num = 1;
            let ea = 12;
   
            elBtn_more.onclick =function(){
                num++;
                more(num*ea - 11, num * ea);
                view();
            
                if(num >= 7){
                    elBtn_close.classList.add('active')
                }
            }




            
        }
    });
}
exChange();




