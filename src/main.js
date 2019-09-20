const a = `<ul>
<li><a href="../index.html">0.Async</a></li>
</ul>`;

const createPdf = require('./c')
const regexp = /href="([^"]+)">([^<]+)/g;
let results;
let toast = [];
while ((results = regexp.exec(a))) {
  toast.push({
    href: results[1].replace(/\.\./g, "http://www.xxxxx.cn/xxhead"),
    name: results[2]
  });
};
for(let i=0;i<toast.length;i++){
  let url = toast[i].href;
  let name = toast[i].name;
  createPdf(url,name)
}