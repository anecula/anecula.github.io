+(function(){$(document).ready(function(){startPreloader();}).on('click','a',function(e){});$(window).load(function(){setTimeout(function(){squeezePreloader();},0);});function startPreloader()
{$('#ejump_preloader .preloader_viewbox').addClass('lift');setTimeout(function(){$('#ejump_preloader .preloader_viewbox').addClass('active');},1100);$('#ejump_preloader .preloader_logo').addClass('active');setTimeout(function(){$('#ejump_preloader .preloader_animation').addClass('active');},500);localStorage.removeItem('ejump_menu_preloader');}
function squeezePreloader()
{$('body').addClass('active');$('#ejump_preloader').addClass('hidden');setTimeout(function(){$('body').addClass('scroll');$('#ejump_preloader .preloader_viewbox').removeClass('lift');$('#ejump_preloader .preloader_viewbox').removeClass('active');$('#ejump_preloader .preloader_animation').removeClass('active');$('#ejump_preloader').attr('style','display:none');},1000);}
function expandPreloader(href)
{localStorage.setItem('ejump_menu_preloader',true);$('body').removeClass('scroll');$('#ejump_preloader').removeClass('hidden');setTimeout(function(){window.location=href;},100);}})(jQuery);