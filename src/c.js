// demo
const phantom = require("phantom");
async function createPdf(url, name) {
  const instance = await phantom.create();
  const page = await instance.createPage();
  url = url.replace(/[\u4e00-\u9fa5]+/,(matched)=>{
    return encodeURIComponent(matched)
  });
  console.log(url)
  await page.property("viewportSize", { width: 1024, height: 768 });

  const status = await page.open(
    url
  );
  page.evaluate(function() {
    $(".nav").remove();
    $(".page-toc").remove();
    $(".warpper").css({
      padding: 0,
      height: "auto"
    });
    $(".markdown-body").css({
      margin: "0 auto"
    });
  });
  console.log(`Page opened with status [${status}].`);
  setTimeout(async () => {
    await page.render(`${name}.pdf`);
    console.log(`File created at ${name}.pdf`);
    await instance.exit();
  }, 2000);
}

module.exports = createPdf;
