const elBtn_more = document.querySelector('main .show_img')
const elBtn_close = document.querySelector('main .load_more_box')
const elFilter_open = document.querySelector('main .filter')
const elFilter_text = document.querySelector('main .filter_text')
const elFilter_close = document.querySelector('main .filter_img')

elFilter_open.onclick=function(){
    elFilter_text.classList.add('active')
    this.classList.add('active')
}

elFilter_close.onclick=function(){
    elFilter_open.classList.remove('active')
    elFilter_text.classList.remove('active')
}

let exChange = function(){
    $.ajax({
    url:'js/data.json',
    success:function(data){
        let item = '';
        let elUp_li;


        let more = function(n,m){
            $.each(data.data,function(key,value){
                if(key >= n && key < m ){
                    item =`
                    <li>
                        <a href="#">
                            <div class="list_box_img">
                                <div class="list_img">
                                    <img src="${value.src}" alt="${value.title}">
                                        <div class="list_img_bg"></div>
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
                    p.classList.add('active');
                }
        })
}


        more(0,12, 'all');

        window.scrollTo(0,1);

            let num = 1;
            let ea = 12;
   
            elBtn_more.onclick =function(){
                num++;
                more(num*ea - 11, num * ea);
                view();
            
                if(num >= 2){
                    elBtn_close.classList.add('active')
                }
            }




            
        }
    });
}
exChange();


const elFilter_span = document.querySelectorAll('main .filter_span span')
const elFilter_title = document.querySelector('main .filter span span')

let typeChange = function(spanType){
    $.ajax({
    url:'js/data.json',
        success:function(data){
            let dataLi = '';
            let elUp_li;

            $.each(data.data,function(key,value){
                
                if(value.type == spanType ||value.filter == spanType ||value.filter1 == spanType ||value.filter2 == spanType ||value.filter3 == spanType
                    ||value.filter4 == spanType ||value.filter5 == spanType ||value.filter6 == spanType ||value.filter7 == spanType ||value.filter8 == spanType
                    ||value.filter9 == spanType ||value.filter10 == spanType ||value.filter11 == spanType ||value.filter4 == spanType
                    ){
                        dataLi +=
                        `
                    <li>
                        <a href="#">
                            <div class="list_box_img">
                                <div class="list_img">
                                    <img src="${value.src}" alt="${value.title}">
                                        <div class="list_img_bg"></div>
                                </div>

                                <div class="list_txt">
                                    <p class="title">${value.title}</p>
                                    <p class="sub">${value.sub}</p>
                                </div>
                            </div>
                        </a>
                    </li>`    
                    $('.visual_wrap ul').html(dataLi);
                }
            });
            elUp_li = document.querySelectorAll('main .visual_wrap li')
                
            window.addEventListener('scroll',view)
            function view(){
            elUp_li.forEach(function(p){
            
            if(p.offsetTop - (window.innerHeight*0.8) <= window.scrollY){
                p.classList.add('active');
            }
        })
            } 
        }
    });

};

elFilter_span.forEach(function(e){
    e.onclick=function(){
        typeChange( $(this).text().trim() );
        elBtn_close.classList.add('active')
        elFilter_title.textContent  = $(this).text()
        elFilter_open.classList.remove('active')
        elFilter_text.classList.remove('active')
    }
})

