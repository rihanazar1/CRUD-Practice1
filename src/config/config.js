const _config = {
    PORT : process.env.PORT,
    MONGODB : process.env.MONGODB,
    JWT_SECRET : process.env.JWT_SECRET
}

const config = Object.freeze(_config)

module.exports = config 