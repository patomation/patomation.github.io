Stop Dev Team from getting tracked by google analytcis
And scewing numbers...

# Public ip:
184.22.146.8


# Further reading:
https://carloseo.com/exclude-dynamic-ip-google-analytics/

Internal cookie:
```
javascript:function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays*24*60*60*1000)); var expires = 'expires='+ d.toUTCString(); document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'; } setCookie('InternalTraffic', 'true', 365); alert('Cookie: InternalTraffic\nValue: TRUE\nDomain: ' + window.location.hostname)
```

Add Bookmarklet Button:
```
<a id="bmk-int" class="button" style="border: 1px solid #acd1ec; padding: 3px 5px; border-radius: 3px; background: #e7f5fa; color: #4b97ce; margin: 10px; display: inline-block;" href="javascript:function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays*24*60*60*1000)); var expires = 'expires='+ d.toUTCString(); document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'; } setCookie('InternalTraffic', 'true', 365); alert('Cookie:  InternalTraffic\nValue:     TRUE\nDomain:  ' + window.location.hostname)">+InternalCookie</a>
