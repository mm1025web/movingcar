if($(window).width() >= 700){
  $(document).ready(function(){
 
        // alert("Press Enter to start and Spacebar to turn off the lights.")
        $surface = $('.surface');
        $car = $('.car');
        $img = $('.car img');
        let flag = true;

        const cars=['./images/car2.png','./images/car1.png'];

        $(document).on('keypress',function(e){
        // console.log(e.which); to get keycode
            if(e.which == 13){
                $('audio#start')[0].play();
               $($surface).toggleClass('moveRight');
                $($car).toggleClass('suspension');
            }
            if(e.which == 119){
                $($surface).toggleClass('moveFast');
                $('audio#fast')[0].play();

            }
        })
        $(document).on('keypress',function(e){
            if(e.which==32){
                if(flag){
                    flag = false;
                    $img.attr('src',cars[0]);
                }
                else{
                    flag = true;
                    $img.attr('src',cars[1]);

                }
            }
        })

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
if($(window).width() <= 700){
    
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    const cars=['./images/car2.png','./images/car1.png'];

    $(window).ready(function(){ 
            $img.attr('src',cars[0]);
            $($surface).toggleClass('moveMed');
            $($car).toggleClass('suspension');
            $(document).on('tap',function(){
                
                    $('audio#start')[0].play();
                
            })
            
    });
}