
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import parser from 'body-parser'
import express, { NextFunction, Response } from "express";
import routes from './routes/index.routes';
import { env } from "./utils/env";
const app = express();
const port = env('PORT')
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routes);

// 404 response
app.use((error: any, res: Response, next: NextFunction) => {
    try {
        res.status(404).send({ success: false, message: "Invalid Api Request" });
    } catch (error) {
        next(error);
    }
});

app.listen(port || 3001, () => {
    console.log(`App is running at http://localhost:${port}`,);
    console.log(`Press CTRL-C to stop\n`);
});
export default app;