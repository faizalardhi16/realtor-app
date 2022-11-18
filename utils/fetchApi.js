import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

// headers: {
    // 'x-rapidapi-host': 'bayut.p.rapidapi.com',
    // 'x-rapidapi-key': '4b6ad3f970msh105dfac91219247p18dbbejsna4bb3684a05e'
//   }

export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '4b6ad3f970msh105dfac91219247p18dbbejsna4bb3684a05e'
        }
    })

    return data;
}
