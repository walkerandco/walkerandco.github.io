$(document).ready(function(){var a=0;$(window).on("scroll",function(n){$(this).scrollTop()>300&&0===a?($(".fix").addClass("fix-nav"),$(".navbar").animate({opacity:"1.0"}),$("#name").removeClass("hidden"),$("#xsbrand").removeClass("hidden"),a=1,console.log("fixing nav")):$(this).scrollTop()<=300&&1==a&&($(".fix").removeClass("fix-nav"),$(".navbar").animate({opacity:"0.7"}),$("#name").addClass("hidden"),$("#xsbrand").addClass("hidden"),a=0,console.log("remove fix"))}),$("#navbutton").click(function(){$(window).scrollTop()<150&&$(window).width()<500&&$(".fix").addClass("fix-nav")})});