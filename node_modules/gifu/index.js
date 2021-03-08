let gifs = require('./gifs')

module.exports = {
    gifu(option) {
        let res
        Object.keys(gifs).filter(key => {
            if (key === option) res = gifs[key]
        })
        if(res) {
            return res[Math.floor(Math.random() * res.length)]
        } else {
            return 'Invalid Request'
        }
    }
}