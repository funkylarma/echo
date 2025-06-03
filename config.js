import 'dotenv/config';
import helpers from './lib/helpers.js'
import presets from './lib/presets.js'
import { SERVICES } from './lib/posters/index.js'

export default {
    services: {
        [SERVICES.MASTODON]: {
            instance: process.env.MASTODON_URL,
            accessToken: process.env.MASTODON_ACCESS_TOKEN,
            visibility: '',
        }
    },
    sites: [
        {
            name: "adamchamberlin.info",
            feed: "https://adamchamberlin.info/feed/mastodon.json",
            json: true,
            services: ["masto"],
            transform: presets.adamchamberlin
        }
    ]
}
