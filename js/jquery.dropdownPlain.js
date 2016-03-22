$(function(){
  $("#block-menu-primary-links ul li.expanded").hover(function(){
    $(this).addClass("hover");
    $('ul:first',this).css('visibility', 'visible');
  }, function(){
    $(this).removeClass("hover");
    $('ul:first',this).css('visibility', 'hidden');
  });
  $("#block-menu-primary-links ul li.expanded ul li:has(ul)").find("a:first").append(" &raquo; ");
});
