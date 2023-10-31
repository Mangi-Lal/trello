// Old (i.e., OpenAI NodeJS SDK v3)
// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// New (i.e., OpenAI NodeJS SDK v4)
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
export default openai;