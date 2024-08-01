import { NextApiRequest, NextApiResponse } from 'next';
import * as banana from "@banana-dev/banana-dev";

// Enter your Banana API keys in .env.local
const apiKey = process.env.BANANA_API_KEY as string;
const modelKey = process.env.BANANA_MODEL_KEY as string;

type ModelParameters = {
    prompt: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const modelParameters: ModelParameters = {
            prompt: req.body.prompt
        };

        const output = await banana.run(apiKey, modelKey, modelParameters);

        res.status(200).json(output);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
