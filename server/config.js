module.exports = {
    NAMESPACE: 'http://myapp.com/roles',
    AUTH0_DOMAIN: 'lrvch.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://admin:admin@ds113136.mlab.com:13136/mean-rsvp2'
};