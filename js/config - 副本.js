var BaseUrl =  "http://180.188.22.245:2024";
var ResourceUrl = 'http://180.188.22.245:10001/ttshenshou/';

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        localStorage.setItem('enter_url',encodeURIComponent(window.location.href));
        window.location.href = '/index.html';
    }
}


        