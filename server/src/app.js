import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors'
import userRouter from "./routes/user.js";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });


const app = express();

const __dirname = path.resolve();
app.use(bodyParser.urlencoded({ extended: true, limit: '5000mb' }));
app.use(bodyParser.json({ limit: '5000mb' }));
app.use(express.static(path.join(__dirname, '/build')));
app.use(cors());



app.use("/api/user", userRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'))
})


const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
    console.log(`Connected successfully on port ${PORT}`);
});


