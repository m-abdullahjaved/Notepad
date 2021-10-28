$(document).ready(function(){
       
    $('#lalign').click(function(){
       $('#content').css({
           'text-align': 'left'
       });
    });
    $('#calign').click(function(){
        $('#content').css({
            'text-align': 'center'
        });
     });

     $('#ralign').click(function(){
        $('#content').css({
            'text-align': 'right'
        });
     });

     $("#bold").click(function(){
        $("#content").toggleClass("boldtext");
      });

     $('#italic').click(function(){
         $('#content').toggleClass("italictext");
     });
     $('#underlined').click(function(){
         $('#content').toggleClass('underlined');
     });
});


function changeFont(font){
    document.getElementById('content').style.fontFamily= font.value;
}
function fontSize(n){
        var fsize = document.getElementById('content');
        fsize.style.fontSize= n.value+ "px";
}
function fontColor(n){
   document.getElementById('content').style.color= n.value;
}