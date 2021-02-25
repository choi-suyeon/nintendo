$(function(){
    //section의 높이를 브라우저의 높이와 같게 설정
    //var winHeight=$(window).height();
    //var imgHeight=$('.swiper-slide img').height();
    //$('section').css('height', winHeight);
    //$('.swiper-container').css('height',imgHeight)
    
    
    var filter = "win16|win32|win64|mac|macintel"; 
    if ( navigator.platform ) { 
        if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) 
        { 
            //mobile alert('mobile 접속'); 
            var h=$(window).height();
            $('nav').css('height',h);
            
            //햄버거 메뉴 클릭하면 nav 나옴
            $('.mobile_menu').click(function(){
               $('nav').stop().animate({
                   right:0
               }); 
            });
            //close버튼 클릭하면 nav 들어감
            $('.close').click(function(){
               $('nav').stop().animate({
                   right:'-100vw'
               }); 
            });
           
            
            //내비게이션(아코디언 메뉴)
            $('nav>ul>li>a').click(function(){
                if($(this).attr('class') != 'active' ){
                $('nav>ul>li>a').next().slideUp();
                $('nav > ul > li > a').removeClass('active');
               $(this).addClass('active');
               $(this).next().slideDown();
            }else{
               $(this).removeClass('active');
               $(this).next().slideUp();
                }
            });
            
        } else {
            //pc alert('pc 접속'); 
            //내비게이션
            $('nav > ul > li').hover(function(){
            $('.sub').stop().fadeIn();
            $('.sub-bg').stop().fadeIn();
            $('.header-bg').stop().fadeIn();
        }, function(){
            $('.sub').stop().fadeOut();
            $('.sub-bg').stop().fadeOut();
            $('.header-bg').stop().fadeOut();
        });
            
        } 
    }
    
    
    //슬라이드(swiper)
    var swiper = new Swiper('.swiper1', {
      centeredSlides: true,
      effect:'fade',
      loop:true,
      autoplay: {
      delay: 4000,
      disableOnInteraction:false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable:true
      }
    });
    
    //banner(swiper)
    var swiper = new Swiper('.swiper2', {
      slidesPerView:1,
      spaceBetween:10,
      loop:true,
      autoplay: {
      delay: 4000,
      disableOnInteraction:false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    
    //game(swiper)
    var swiper = new Swiper('.swiper3', {
      centeredSlides: true,
      spaceBetween:0,
      breakpoints:{
        1920:{
           slidesPerView:4  
        },
        1600:{
           slidesPerView:4 
        },
        1200:{
           slidesPerView:4 
        },  
        960:{
           slidesPerView:2 
        },
        768:{
           slidesPerView:2     
        },
        640:{
           slidesPerView:2     
        },
        480:{
           slidesPerView:1.5     
        }, 
        320:{
           slidesPerView:1.5     
        }  
      },
      loop:true,
        autoplay: {
          delay: 4000,
          disableOnInteraction:false,
      },
    });
    
    //tabmenu
    //클릭한 제목의 인덱스 번호를 저장하는 변수 선언
            var num=0;
            $('.tab-content > div').hide();
            $('.tab-content .tab-switch').show();
            $('.tab-title ul li').click(function(){
                
            $('.tab-title ul li').removeClass('active');
            $(this).addClass('active');
                
                num=$(this).index();
                $('.tab-content > div').each(function(){
                    var idx=$(this).index();
                    if(num == idx){
                        $('.tab-content > div').hide();
                        $(this).show();
                    }
                });
            });
    
    //fullpage
    $('#fullpage').fullpage({
        navigation:true, 
        navigationPosition:'right',
        responsiveWidth:961,
        afterLoad:function(anchorLink,index){
            //만약 접속한 기기의 가로길이가 961이상이면 동그라미버튼 보임, 960이하이면 안보임
            if($(window).width()>960){
                //동그라미 버튼 2,3,4화면에서만 보임
                if(index === 1 || index === 5 || index === 3){
                    $('#fp-nav').fadeOut(1000);
                }else{
                    $('#fp-nav').fadeIn(1000);
                }

                //모바일에서는 section의 높이 자동으로 인식
                    $('section.section').removeClass('fp-auto-height');
                }else{
                    $('.section').addClass('fp-auto-height');
                }
            
            if(index==1){
                $('.banner .animated').removeClass('active');
            }else if(index==2){
                $('.banner .animated').addClass('active');
                //swiper3의 slide애니메이션을 첫번째부터 시작하도록 하는 코딩
                $('.swiper3 .swiper-slide').each(function(){
                    //$(this)는 .swiper-slide 1개 가리킴
                    //idx = .swiper-slide의 인덱스번호*0.1, 0-0.1-0.2-0.3-0.4-0.5...

                   var idx=$(this).index()*0.1;

                   $(this).css('transition-delay',idx+'s');

                });

            }else if(index==3){
                $('.banner .animated').removeClass('active');
            }else if(index==4){
                $('.banner .animated').removeClass('active');
            }

                /*if(index == 2){
                    $('.banner-title').addClass('active');
                    $('.banner-in .b1 .des p').addClass('active');
                    $('.banner-in .b1 .des h3').addClass('active');
                    $('.banner-in .b1 .des li ul li').addClass('active');
                    $('.banner-in .b1 .photo').addClass('active');
                    $('.banner-in .b2 .swiper2').addClass('active');
                }else{
                    $('.banner-title').removeClass('active');
                    $('.banner-in .b1 .des p').removeClass('active');
                    $('.banner-in .b1 .des h3').removeClass('active');
                    $('.banner-in .b1 .des li ul li').removeClass('active');
                    $('.banner-in .b1 .photo').removeClass('active');
                    $('.banner-in .b2 .swiper2').removeClass('active');

                }*/
        }
        
    });
    
});