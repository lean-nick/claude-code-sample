import { type MagnitudeConfig } from 'magnitude-test';

// Learn more about configuring Magnitude:
// https://docs.magnitude.run/customizing/configuration

export default {
    url: "http://localhost:5173",
    planner: {
        provider: 'openai-generic',
        options: {
            baseUrl: "https://api.x.ai/v1",
            apiKey: process.env.X_AI_KEY,
            model: "grok-3-mini-beta"
        }
    },
    browser: {
        // contextOptions: {
        //     viewport: { width: 800, height: 600 },
        //     recordVideo: {
        //         dir: './videos/',
        //         size: { width: 800, height: 600 }
        //     }
        // }
    }
} satisfies MagnitudeConfig;