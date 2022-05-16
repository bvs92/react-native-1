import yelp from "../api/yelp";
import { useState } from "react";


export default () => {
    const [result, setResult] = useState({
        data: null,
        loading: false,
        error: null
    });


    const searchRestaurant = async (id) => {
        setResult({
            data: null,
            error: null,
            loading: true
        });

        console.log('primul')


        try {
            const response = await yelp.get(`/${id}`);

            setResult({
                data: response.data,
                error: null,
                loading: false
            });

            console.log(response.data)

    
        } catch(error){
            setResult({
                data: null,
                error: "Eroare preluare rezultat.",
                loading: false
            });

            console.log('eroare')
        }

        

    }
    return [result, searchRestaurant];
}

