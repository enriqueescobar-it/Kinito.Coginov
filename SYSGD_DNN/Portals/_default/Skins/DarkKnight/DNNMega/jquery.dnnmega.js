﻿jQuery(document).ready(function($){function megaHoverOver(){$(this).addClass('mmItemHover').find(".megaborder").stop().show();(function($){jQuery.fn.calcMaxDimensions=function(){maxWidth=0;maxHeight=0;numColumns=0;maxColumns=3;$(this).find("li.category").each(function(){numColumns++;maxWidth=($(this).width()>maxWidth)?$(this).width():maxWidth;});maxWidth=(numColumns>maxColumns)?(maxWidth*maxColumns):(maxWidth*numColumns);$(this).find("li.category").each(function(){maxHeight=($(this).height()>maxHeight)?$(this).height():maxHeight;});};})(jQuery);$(this).calcMaxDimensions();$(this).find(".megaborder").css({'width':maxWidth+20});$(this).find("li.category").each(function(){var thisPosition=$(this).index()+1;if(thisPosition%3==0){$(this).addClass("mmRightColumn");}}).css({'height':maxHeight});}function megaHoverOut(){$(this).removeClass('mmItemHover').find(".megaborder").stop().fadeOut('fast',function(){$(this).hide();});}var config={sensitivity:2,interval:100,over:megaHoverOver,timeout:500,out:megaHoverOut};$("ul.dnnmega li.mmHasChild").hoverIntent(config);});