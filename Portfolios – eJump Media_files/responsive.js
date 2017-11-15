+(function($){$(document).on('click','.top-bar .toggle-topbar.menu-icon a',function(){if($('.tbnav').hasClass('active'))
$('.tbnav').removeClass('active');else
$('.tbnav').addClass('active');})})(jQuery);function skrollr_mobile(){if($(window).width()<=1024){setTimeout(function(){skrollr.init().destroy();},100);}}
+(function($){$('.about_section_content').on('scroll',function(){center_planet_element($(this).scrollLeft());});})(jQuery);function center_planet_element(scrollLeft){if(scrollLeft!==0&&scrollLeft!=='NaN'){window.planetScrollLeftPos=scrollLeft+(($(window).width()-($(window).width()*0.70))/ 2 );}else{if(typeof planetScrollLeftPos=='undefined'||scrollLeft==0){window.planetScrollLeftPos=0;}}
$('.about_section_content .info.mobile-centered').css('left',planetScrollLeftPos);}