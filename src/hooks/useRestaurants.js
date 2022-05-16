import yelp from "../api/yelp";
import { useState } from "react";


export default () => {
    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null
    });
    const searchRestaurants = async (term) => {
        setResults({
            data: null,
            error: null,
            loading: true
        });


        try {
            const response = await yelp.get('/search', {
                params: {
                    term: term,
                    limit: 15,
                    location: "Paris"
                }
            });

            setResults({
                data: response.data.businesses,
                error: null,
                loading: false
            });

    
        } catch(error){
            setResults({
                data: null,
                error: "Eroare preluare rezultate.",
                loading: false
            });
        }

        

    }
    return [results, searchRestaurants];
}

