// export const port = process.env.PORT || 3000;

class config {
    constructor() {
        const port = 3000;
        const host = process.WEBSITE_HOSTNAME || `localhost:${port}`;
    }
}

export default config