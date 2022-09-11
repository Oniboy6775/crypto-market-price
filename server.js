import express from "express";
import axios from "axios";
// import {} from "fs"
// import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.listen(PORT, () => {
  console.log("app listening on port " + PORT);
});
// MIDDLEWARE
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
// // ONLY WHEN READY TO DEPLOY
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname + "/client/build"));

// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

app.get("/fetchData", async (req, res) => {
  const { CMC_API, CMC_API_KEY } = process.env;
  const { page } = req.query;
  let limit = 5;
  let skip = page - 1;
  let start = skip * limit + 1;
  //   console.log({ limit, page, skip, start, CMC_API_KEY, CMC_API });

  try {
    let response = await axios.get(
      `${CMC_API}/listings/latest?start=${start}&limit=${limit}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": CMC_API_KEY,
        },
      }
    );
    const { data } = response.data;
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.status);
  }
});
const errorHandler = (error, req, res, next) => {
  res.status(500).json({ error });
};
app.use(errorHandler);
