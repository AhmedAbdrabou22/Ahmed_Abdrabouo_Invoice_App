function customCorsMiddleware(req, res, next) {
    // Set CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Set allowed HTTP methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    // Set allowed HTTP headers
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests (sent with OPTIONS method)
    if (req.method === 'OPTIONS') {
        // Respond with 200 OK for preflight requests
        res.sendStatus(200);
    } else {
        // Continue to the next middleware or JSON Server router
        next();
    }
}

// Export the custom CORS middleware function
module.exports = customCorsMiddleware;