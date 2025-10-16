const axios = require("axios")

async function fetchCatFacts() {
    try {
        const response = await axios.get("https://catfact.ninja/fact")
        const data = await response.data
        return  data.fact
    } catch (error) {
        throw error
    }
}

module.exports = fetchCatFacts