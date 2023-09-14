$(document).ready(function(){

        
    function pc(){
    $('nav>ul>li').on('mouseover',function(){
    
    $(this).find('.sub').stop().fadeIn();
        
    }).on('mouseout',function(){
        
        $(this).find('.sub').stop().fadeOut();
    
    })
    }//func. pc        
            
            
            
            
            
    //이하의 제이쿼리(어제 제작한 것들) 모바일 전용! 모바일환경에서만 실행되도록 해봅시다(320px이상, 1200px미만)       
    var wt = $(window).width();    
     if(wt >=320 && wt<1200){
    
         mo();
     }else if(wt>=1200){
         pc();
         
     }
    
    if(wt>=768){
        
    var bx_ht = $('.row2 .box').height();   
    $('.row2 .box_a').height(bx_ht);
         
    }
     
               
    $(window).on('resize',function(){
    var wt = $(window).width();    
    $('nav>ul>li').off();
    $('.a').off();
    $('.sub').hide();
    
    
     if(wt >=320 && wt<1200){
         mo();
     }else if(wt>=1200){
    
         pc();
     }
        
    if(wt>=768){
        
    var bx_ht = $('.row2 .box').height();   
    $('.row2 .box_a').height(bx_ht);
         
    }else{
        
        $('.row2 .box_a').height('auto');
    }
     
        
        
    });//resize
            
    
            
            
    function mo(){
            
    $('.a').on('click',function(){
            
    $(this).siblings('.sub').slideToggle();
     $(this).parent().siblings().find('.sub').slideUp();
            
    
        $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
            
            
        });//aside내부 메뉴
            
    //.all_btn누르면 aside가 튀어나오고, 내부의 close누르면 다시 사라지기
        $('.all_btn').on('click',function(){
            
            $('aside').stop().animate({
                'right' : 0
            })
            
            
        });
        
    $('aside .close').on('click',function(){
        
        $('aside').stop().animate({
            'right' : '-100%'
        });
            
            
        });
            
    $('.s_btn').on('click',function(){
        
         $('.sns').toggleClass('on');
        
    })}//func. mo
            
    //.top클릭하면 최상단으로 1.5초만에 애니메이트되기   
    $('.top').on('click',function(e){
        e.preventDefault();
       $('html, body').animate({
           'scrollTop' :0
       },1500);
    
        
    });     
            
    //1.f_lang누르면 팝업 뜨기(on클래스!)
    //2.l_pop 내부의 a를 누르면 해당 a내부의 텍스트가 .select영역에 뜨게만들기
            
     
    $('.f_lang').on('click',function(){
        $(this).toggleClass('on');
        
    });//f_lang click
            
    $('.l_pop a').on('click',function(e){
        e.preventDefault();
        var txt = $(this).text(); 
        $('.select').text(txt);
        
    });//l_pop a click
        
            
            
        })//오프닝구문