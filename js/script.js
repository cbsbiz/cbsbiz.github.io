$(document).ready(function() {
  $("#block-menu-primary-links ul li.expanded li a").each(function() {
    var width = $(this).parent().parent().parent().children('a').width() + 'px';
    $(this).css('width', width);
  });
	$('#header-fade').newsTicker().toggle();
});
