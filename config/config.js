require("dotenv").config();

const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 5000,
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost:27017/userDemoDB",
    },
}

module.exports = dev;