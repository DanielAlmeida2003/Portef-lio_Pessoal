$(document).ready(function(){

    $(window).scroll(function(){

       if(this.scrollY > 20){
           $(".menu").addClass("sticky");
       }
       else
       {
        $(".menu").removeClass("sticky");
     
       }

       if(this.scrollY > 500){
        $(".scroll_button").addClass("show");
       }
       else
       {
        $(".scroll_button").removeClass("show");   
       }

       $(".scroll_button").click(function(){
            window.scrollTo({top: 0, behavior: 'smooth'});
        });

    }); 

});