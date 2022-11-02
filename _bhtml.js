const http = require('http');
const fs = require('fs')

function getPage(url){
  try{
    return fs.readFileSync(`.${url}`).toString()
  }catch{return false};
}

http.createServer(function (req, res) {
  req.url = decodeURIComponent(req.url)
  if(req.url.endsWith('/')){
    req.url+=`index.html`
  }
  if(!req.url.startsWith('/') || req.url.startsWith('/.config') || req.url.startsWith('/index.js') || req.url.startsWith('/_bhtml.js') || req.url.startsWith('/node_modules')) {
    res.statusCode = 404
    res.write(getPage(`404.html`) || `404`);
    res.end();
  }else{
    res.write(getPage(req.url)||((res.statusCode = 404) && false)||getPage(`404.html`)||`404`);
    res.end();
  }
}).listen(8080);