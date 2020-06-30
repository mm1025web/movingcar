if($(window).width() >= 800){
  $(document).ready(function(){
 
        alert("Press Enter to start and Spacebar to turn off the lights.")
        $surface = $('.surface');
        $car = $('.car');
        $img = $('.car img');
        let flag = true;

        const cars=['./images/car2.png','./images/car1.png']

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

    $(window).ready(function(){
        setTimeout(function(){
        alert("Press W to speed up!")
        }, 4000);
    });
}
else{
    $surface = $('.surface');
    $car = $('.car');
    $(document).ready(function(){
            $($surface).toggleClass('moveMed');
            $($car).toggleClass('suspension');
            $('audio#start')[0].play();
    });
}