import express from "express";
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

router.get('/', (req, resp) => {
    resp.send('Hello From Dall - E');
});

router.post('/', async (req, resp) => {

    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json"
        });

        const aiImage = aiResponse.data.data[0].b64_json;

        resp.status(200).json({photo: aiImage});

    } catch (error) {
        console.log(error)
        resp.status(500).send(error?.response.data.error.message);
    }

})

export default router;