var uniqueCode = "j2eziLomiWKqkLSpCQa"; //unique code (must be encoded using the base64 tools that you get in the package)
var wrongLicense = "MTD0lWovMwK7Y29di3U6U2Y4EQFnCT0fk3VgiwkNi3G7ls1ziwOvlIy5EQu5EQu5EQu5EQu5EQu5EQu5EQu5EQu5EQu5UWvejL9pkLKfkIeuhXDniLK5EwVdi2DcUWvejL9pkLKfkIegjLKthXO5EtJrhW1ni3V0YW50E3Zzj2vshWozkTu6kwvqhWVdZPKziXGgjxOrixN7k2vukLa6Y2KdYpaoCIFvUH0aCQFnjTazE21rlH13hWO0hIy1CIGnlIeni3DzkLvgitzwhXrvZIesYWDcZ3VgkW5uEsDwZWZvZwR7Yw9pZLSpBXVrZLv1jqyoCTG4E2VgjwOvjtyojTaaj29dhWNaU2SvZQeti2ogjtytCtYpZIDuE3OvlTNeYWozZ246Y2SfkLSpE3GrZLOziwj6CqSnlIe0i3F6CQRnjTa7iLSwkIynE3VzZ2r0EtF7iWKpZ2vfEtFaYXS0iqesi3aej2rrZL93EtFaCQGnlHFpCTG4UTVxYwJyCHnnBIFdCH4pAQe9MH9qkTvdZQ48ZLv2ULDdYXDqMPk3jw9fZ1GgjHj+MTD2ZpGqkTvdZQ0xZwvdiIytZQFnCIFnE3kzZTOyEtRnjTa7hLSzZ2r0EtRnjTaxUTZzZXkHi3a9VqFaCHFpDHFpDHj+MTGrkLaaZI0xQQJpBIJ3NQUdCsFnUIFdCHFoDHnoDRCoDHnoCp44EPFoCp4oBIJqUIJpBIJqNQUdCsFnUIFdCHFoCHnoDRJpBIUaCHFnBIFaCQUdCQkDCQadEJJpBIUaCHFnBIJaCtFdCQGWCtGGCsnpUIFaCHnoUIJ4BIUpPIZGCsnpUIFaCHnoUINdCtGWCQGIDHn4Bta5UINfEPn4UIYdEJa3StZGDPn1UIFaCHnoUIJpBIKGDPn1UIFaCHnoUIJ3BIZWEJaoEJ0oCsnqNQCdCpFnUIFdCHF5BIZWEJaoDSY2NQCdCpFnUIFdCHFoCsnqWsjgMtngj3ZxMtoyCq5Gh3DvjpGJhWVdi2ezjtnghIC+MTF+ZL9eYWvfULKfZLJaAHF8j3GrisGzZI0xYwogZ05riWRxMtngj3Grit4aAPG0hWOrhpG0ZXVuYWZ0YXUfMH9nMtorULrpZWY9V2r0kTGqEs8gk3k3BxkviwO5Y29uZP5ti20gjH9ci250YWdeh2KehP5ykL1dVq5UkWV1iwkzUJKuiWvfMH9rMtngZLv2Ma=="; //html popup (must be encoded using the base64 tools you get in the package)
var bs64={_keyStr:"FGHIJKLTUVABCDEMNOPQRSWXYZhijklmarstuvwxyzbcdefgnopq0123456789+/=",encode:function(r){var t,e,o,a,h,n,c,d="",C=0;for(r=bs64._utf8_encode(r);C<r.length;)a=(t=r.charCodeAt(C++))>>2,h=(3&t)<<4|(e=r.charCodeAt(C++))>>4,n=(15&e)<<2|(o=r.charCodeAt(C++))>>6,c=63&o,isNaN(e)?n=c=64:isNaN(o)&&(c=64),d=d+this._keyStr.charAt(a)+this._keyStr.charAt(h)+this._keyStr.charAt(n)+this._keyStr.charAt(c);return d},decode:function(r){var t,e,o,a,h,n,c="",d=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<r.length;)t=this._keyStr.indexOf(r.charAt(d++))<<2|(a=this._keyStr.indexOf(r.charAt(d++)))>>4,e=(15&a)<<4|(h=this._keyStr.indexOf(r.charAt(d++)))>>2,o=(3&h)<<6|(n=this._keyStr.indexOf(r.charAt(d++))),c+=String.fromCharCode(t),64!=h&&(c+=String.fromCharCode(e)),64!=n&&(c+=String.fromCharCode(o));return c=bs64._utf8_decode(c)},_utf8_encode:function(r){r=r.replace(/\r\n/g,"\n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):o>191&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};
var license = document.querySelector("meta[property='blogUrl']").getAttribute("content"); // url blog
alert(license);
var userLicense = document.querySelector('.license');
alert(userLicense.innerHTML);
var blgUnk = license + bs64.decode(uniqueCode);
var joinUnk = bs64.encode(blgUnk);
function wrongDetected(){
var bdyt = document.getElementsByTagName('BODY')[0];
bdyt.innerHTML +=bs64.decode(wrongLicense);
bdyt.setAttribute('oncontextmenu', 'return false');
// document.getElementById('license').innerHTML = window.location.hostname;
}
if (document.querySelectorAll('.license').length === 0){ // blog name if the license div is removed
alert("1");
wrongDetected();
}else if (userLicense.innerHTML.length <= uniqueCode.length){ // if the license is shorter or equal to the unique code
alert("2");
wrongDetected();
}else if (userLicense.innerHTML != joinUnk){ // if the license is wrong
alert(userLicense.innerHTML);
alert(joinUnk);
alert("3");
wrongDetected();
}else{
// wrap your js inside here
console.log('correct license')
}
