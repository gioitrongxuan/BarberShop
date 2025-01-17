const WHITELIST_DOMAIN = [
  'http://localhost:5173',
  'https://barber-shop-683bo97j0-gioitrongxuans-projects.vercel.app/',
  'https://baythancattoc.vercel.app/',
]

const corsConfig = {
  origin: function (origin, callback) {
    if (WHITELIST_DOMAIN.includes(origin) !== -1 || !origin) {
      callback(null, true)
    }else
    callback(new Error("Not allowed by CORS"))
  },
  optionsSuccessStatus: 204,
  credentials: true,
}

module.exports = corsConfig