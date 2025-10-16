var express = require('express');
var fetchCatFacts = require('../utils/fetchCatFacts')

var router = express.Router();

var email = process.env.USER_EMAIL || "test@example.com"



/* GET users listing. */
router.get('/', async function(req, res) {
    const body = {
        "status": "success",
        "user": {
            "email": email,
            "name": "Emmanuel Oduntan",
            "stack": "Node.js/Express",
            "timestamp": new Date(),
            "fact": ""
        }
    }


    let fact

    try {
        fact = await fetchCatFacts()
    } catch (error) {

        if (error.code === 'ECONNABORTED') {
            res.statusCode = 504

            res.json({...body, fact: "Network timeout"})
        } else {
            res.json({...body, fact: "no cat fact for today"})
        }
    }

    res.json({...body, fact})
});

module.exports = router;
