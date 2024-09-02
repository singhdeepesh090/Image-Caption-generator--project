const jwt = require('jsonwebtoken');
const JWT_SECRET = "unknown";

const fetchUser = (req, res, next) => {
    
    const token = req.header('token');

    if (!token) {
        res.status(401).send({ error: "ePlease authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);         
        req.user = data;    
        next();
    } catch (error) {
        res.status(401).send({ error: "bPlease authenticate using a valid token" });
    }
}

module.exports = fetchUser;