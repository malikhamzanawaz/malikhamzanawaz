var uniqueCode = "skillmaster";
var wrongLicense = "<style>a{color:#f89000}.wrongPop{z-index:9999999999999999999999999999!important;display:block!important;opacity:1!important;visibility:visible!important;width:calc(100% - 100px);max-width:500px;position:fixed;background:#fefefe;border-radius:10px;border:1px solid #eee;color:#262d3d;text-align:center;padding:35px;top:150px;left:0;right:0;margin:0 auto;box-shadow:0 10px 20px rgba(0,0,0,0.2);}</style><div class='wrongPop'><svg style='fill:#e00000;width:50px;height:50px' viewBox='0 0 24 24'><path d='M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z'/></svg><h3>Akses Diblokir</h3><p>domain anda ( <span id='blogName'></span> ) tidak terdaftar.</p><a href='https://www.wendycode.com/p/kontak-kami.html'>Hubungi Admin</a></div>"; //html popup (must be encoded using the base64 tools you get in the package)

var bs64={_keyStr:"hTO0jTC6Bp90ZXD0YwogZqJpCqN1ZwNfYwogZ3Dni3NfY29ej2eziLoeYXD0ZXU=",encode:function(r){var t,e,o,a,h,n,c,d="",C=0;for(r=bs64._utf8_encode(r);C<r.length;)a=(t=r.charCodeAt(C++))>>2,h=(3&t)<<4|(e=r.charCodeAt(C++))>>4,n=(15&e)<<2|(o=r.charCodeAt(C++))>>6,c=63&o,isNaN(e)?n=c=64:isNaN(o)&&(c=64),d=d+this._keyStr.charAt(a)+this._keyStr.charAt(h)+this._keyStr.charAt(n)+this._keyStr.charAt(c);return d},decode:function(r){var t,e,o,a,h,n,c="",d=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<r.length;)t=this._keyStr.indexOf(r.charAt(d++))<<2|(a=this._keyStr.indexOf(r.charAt(d++)))>>4,e=(15&a)<<4|(h=this._keyStr.indexOf(r.charAt(d++)))>>2,o=(3&h)<<6|(n=this._keyStr.indexOf(r.charAt(d++))),c+=String.fromCharCode(t),64!=h&&(c+=String.fromCharCode(e)),64!=n&&(c+=String.fromCharCode(o));return c=bs64._utf8_decode(c)},_utf8_encode:function(r){r=r.replace(/\r\n/g,"\n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):o>191&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};
 
var license = document.querySelector("meta[property='blogUrl']").getAttribute("content"); // url blog
  
var userLicense = document.querySelector('.license');
var blgUnk = license + bs64.decode(uniqueCode);
var joinUnk = bs64.encode(blgUnk);
 
function wrongDetected(){
var bdyt = document.getElementsByTagName('BODY')[0];
bdyt.innerHTML +=bs64.decode(wrongLicense);
bdyt.setAttribute('oncontextmenu', 'return false');
document.getElementById('license').innerHTML = window.location.hostname;
}
  
if (document.querySelectorAll('.license').length === 0){
  wrongDetected();
  
}else if (userLicense.innerHTML.length <= uniqueCode.length){
  wrongDetected();
 
}else if (userLicense.innerHTML != joinUnk){
  wrongDetected();
 
}else{
// wrap your js inside here
console.log('correct license') 
}
