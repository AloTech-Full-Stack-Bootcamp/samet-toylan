const fs = require("fs");
const Koa = require("koa");
const koaRouter = require("koa-router");

const router = new koaRouter();
const app = new Koa();
var d = new Date();

app.use(async (ctx, next) => {
  const startDate = Date.now();
  await next();
  const rt = ctx.response.get("Response-Time");
  const st = ctx.response.get("Started-Time");
  console.log(
    `${ctx.method} ${ctx.url} - Request took ${rt} Requested at : ${st}`
  );
});

app.use(async (ctx, next) => {
  const start = Date.now();
  const startTime = d.toLocaleString();
  await next();
  const ms = Date.now() - start;
  ctx.set("Response-Time", `${ms}ms`);
  ctx.set("Started-Time", startTime);
});

router.get("/", (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("html/index.html");
});

router.get("/contact", (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("html/contact.html");
});

router.get("/about", (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("html/about.html");
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000);
