﻿var F7=0; if(navigator.plugins) { if(navigator.plugins["Shockwave Flash"])	{
plugin=navigator.plugins["Shockwave Flash"].description;
if(parseInt(plugin.charAt(plugin.indexOf('.')-1))>=7) { F7=1; }
}else{ if((navigator.userAgent.indexOf('MSIE')!=-1)&&(navigator.userAgent.indexOf('Win') != -1))	{
document.write('<script language="vbscript">\non error resume next\nF7=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))\n</scr'+'ipt>');
} } }
if(!F7)	{
document.write('<div class="noscript-noflash"><img src=""/a/projects/crazy-casino/img/dtl_alert_big.gif" alt="" width="30" height="30" class="left" />All games in this casino are based on Flash 7 technology. Unfortunately, this plug-in is not built into your browser. If you want to play, please download the <a href="http://www.macromedia.com/go/getflashplayerbutton/" target="_blank">latest Flash plug-in</a> from Macromedia website. It is free, fast and simple.</div>');
}