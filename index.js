// $(document).ready(function(){

//     var lFollowX = 0,
//     lFollowY = 0,
//     x = 0,
//     y = 0,
//     friction = 1 / 30;

//         function moveBackground() {
//         x += (lFollowX - x) * friction;
//         y += (lFollowY - y) * friction;

//         translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

//         $('.night').css({
//             '-webit-transform': translate,
//             '-moz-transform': translate,
//             'transform': translate
//         });

//         window.requestAnimationFrame(moveBackground);
//         }

//         $(window).on('mousemove click', function(e) {

//         var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
//         var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
//         lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
//         lFollowY = (10 * lMouseY) / 100;

//         });

//         moveBackground();

// });


if($(window).width() >= 700){

  $(document).ready(function(){
 
        // alert("Press Enter to start and Spacebar to turn off the lights.")
        $night = $('.night');
        $surface = $('.surface');
        $car = $('.car');
        $img = $('.car img');

        let flag = true;

        const cars=['./images/car2.png','./images/car1.png'];

        $(document).on('keypress',function(e){
        // console.log(e.which); to get keycode
            if(e.which == 13){
                $('audio#start')[0].play();
               $($night).toggleClass('slide');
               $($surface).toggleClass('moveRight');
                $($car).toggleClass('suspension');
                    $('audio#drive')[0].play();
            }
            if(e.which == 119){
                $($surface).toggleClass('moveFast');
               $($night).toggleClass('slideFast');

                $('audio#faster')[0].play();

            }
        })
        $(document).on('keypress',function(e){
            if(e.which==32){
               $('img.vehicle').toggleClass('vehicle2');
            }
            if(e.which == 104){
                   $('audio#horn')[0].play();
            }
            if(e.which == 97){
                $('audio#acc')[0].play();
            }
         

        })

    });

    $(window).ready(function(){
        
     });
    
   
    $(document).ready(function(){
        $("#myModal").modal('show');
    });
    $(window).ready(function(){
        setTimeout(function(){
            $('#myModal2').modal('show');
        }, 6000);
     });
    $(window).ready(function(){
        setTimeout(function(){
            $('#myModal3').modal('show');
        }, 12000);
     });

}


else if($(window).width() <= 700){
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    $night = $('.night');
    const cars=['./images/car2.png','./images/car1.png'];

      
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
            $($night).toggleClass('slide');
         
         $('#horn').click(function(){
            $('audio#horn')[0].play();
         });
         $('#light').click(function(){
            $('img.vehicle').toggleClass('vehicle2');
         });
         $('#fast').click(function(){
            $($surface).toggleClass('moveFast');
            $($night).toggleClass('slideFast');
            $('audio#faster')[0].play();
         });
         $('#roar').click(function(){
            $('audio#acc')[0].play();
            $('audio#drive')[1].play();
         });         
    
}