const a = `<ul>
</ul>`;

const createPdf = require("./c");
const regexp = /href="([^"]+)">([^<]+)/g;
let results;
let toast = [];
while ((results = regexp.exec(a))) {
  toast.push({
    href: results[1].replace(/\.\./g, "http://wwwxun.cn/ahead"),
    name: results[2]
  });
}
(async function() {
  for (let i = 0; i < toast.length; i++) {
    let url = toast[i].href;
    let name = toast[i].name;
    await createPdf(url, name);
  }
})();
