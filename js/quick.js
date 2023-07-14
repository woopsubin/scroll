$(function(){
    // 실행문
    $(window).scroll(function(){
        var stn = $(document).scrollTop()+15; // 15px
        if(stn <= 90){ // 90px
            stn = 90;
        }
        $("#quick").stop().animate({top:stn},700);
    });
});

/* $() => 함수로 코드를 감싸준 형태는, 
HTML 문서가 로딩된 후에만 코드가 실행
$(window).scroll(function(){}) 코드는 
윈도우 객체에 스크롤 될때만 이벤트가 실행
var stn = $(document).scrollTop()+15; // 15px
문서 상단으로부터 스크롤된 거리를 계산하여 stn 변수에 저장 
if(stn <= 90) stn이 90픽셀보다 크거나 같은지 확인
stn = 90; 만약 그렇다면, stn의 값을 90
"quick"이라는 ID를 가진 요소가 상단으로부터 최소 90px 이상 떨어지지 않도록  설정 
$("#quick").stop().animate({top:stn},700);
animate() 함수를 사용하여 "quick"이라는 ID를 가진 요소의 
top 속성을 계산된 stn 위치로 부드럽게 애니메이션
이 애니메이션은 700밀리초(0.7초) 동안 지속 
*/