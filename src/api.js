import axios from 'axios';

let api = axios.create(
    {
        headers:{
            'Client-ID' : 'VOTRE_CLIENT_ID',
            'Authorization' : 'Bearer VOTRE_JETON'
        }
    }
)
/*

CLIENT-ID : e86hoynxu0pf3m2k7hqcmxmu9xe1bu
REDIRECT = 'http://localhost:3000/'

LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT}&response_type=token

LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?client_id=e86hoynxu0pf3m2k7hqcmxmu9xe1bu&redirect_uri=http://localhost:3000/&response_type=token

*/

export default api;