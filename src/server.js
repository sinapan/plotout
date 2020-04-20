import * as sapper from "@sapper/server";
import compression from "compression";
import polka from "polka";
import sirv from "sirv";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });

// express() // or Polka, or a similar framework
// 	.use(
// 		'/my-base-path', // <!-- add this line
// 		compression({ threshold: 0 }),
// 		serve('static'),
// 		sapper.middleware()
// 	)
// 	.listen(process.env.PORT);
