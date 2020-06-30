$(document).ready(function(){
 
    alert("Press Enter to start and Spacebar to turn off the lights.")
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars=['./images/Img_05.png','./images/Img_06.png']

    $(document).on('keypress',function(e){
       // console.log(e.which); to get keycode
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
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