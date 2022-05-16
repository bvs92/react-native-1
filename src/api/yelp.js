import axios from "axios";
import { YELP_KEY } from '@env'

export default axios.create({
    baseURL: "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${YELP_KEY}`
    }
});