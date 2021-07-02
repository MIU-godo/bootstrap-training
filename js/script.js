$(function(){
  $(".carousel-item img").on("click", function(){
    alert("clicked!!");
    $("figure img").attr("src", $(this).attr("href"));
  });
  $("figure img").on("click", function(){
    alert("clicked!!");
  });
});
