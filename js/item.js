﻿$("#animated-thumbnail").lightGallery({thumbnail:!0,getCaptionFromTitleOrAlt:!0,selector:"a[imageanchor]"}),$(function(){$("pre").each(function(e,t){hljs.highlightBlock(t)})});for(var pres=document.getElementsByTagName("blockquote"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);$(".comments a[rel$=nofollow]").attr("target","_blank"),$(".comments .comments-content .comment-header a").each(function(){var e=$(this).text();e=e.replace("Còi","Admin"),$(this).text(e)}),$(".comments .comments-content .comment-header a").each(function(){var e=$(this).text();e=e.replace("Hồng Hải","Admin"),$(this).text(e)});
function adlinkfly_get_url(e){var n=document.createElement("a");return n.href=e,n}function adlinkfly_get_host_name(e){var n;return void 0===e||null===e||""===e||e.match(/^\#/)?"":-1===(e=adlinkfly_get_url(e)).href.search(/^http[s]?:\/\//)?"":(n=e.href.split("/")[2],(n=n.split(":")[0]).toLowerCase())}function adlinkfly_base64_encode(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}document.addEventListener("DOMContentLoaded",function(e){if("undefined"!=typeof adlinkfly_url&&"undefined"!=typeof adlinkfly_api_token){var n=1;"undefined"!=typeof adlinkfly_advert&&(2==adlinkfly_advert&&(n=2),0==adlinkfly_advert&&(n=0));var l=document.getElementsByTagName("a");if("undefined"==typeof adlinkfly_domains)if("undefined"==typeof adlinkfly_exclude_domains);else for(o=0;o<l.length;o++){var t=adlinkfly_get_host_name(l[o].getAttribute("href"));t.length>0&&-1===adlinkfly_exclude_domains.indexOf(t)?l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n):"magnet:"===l[o].protocol&&(l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n))}else for(var o=0;o<l.length;o++)(t=adlinkfly_get_host_name(l[o].getAttribute("href"))).length>0&&adlinkfly_domains.indexOf(t)>-1?l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n):"magnet:"===l[o].protocol&&(l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n))}});