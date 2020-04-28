$('.searchbtn').click(function() {
$(this).toggleClass('bg-green');
$("img").toggleClass('color-white');
$(".input").focus().toggleClass('active-width').val('avangit.ir');
});