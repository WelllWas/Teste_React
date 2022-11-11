import axios from "axios";
const endpoint = process.env.REACT_APP_USERS_API;

export default class UserRequests {
    async GetUsers() {
        try {
            const response = await axios.get(endpoint)
            return response;
        } catch (e) {
            return e;
        }
    }

    async PostUsers(userName) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        const user = {
            id: Math.floor(Math.random() * 1000),
            nome: userName,
            dataCriada: today.toString()
        }

        try {
            const response = await axios.post(endpoint, {
                ...user
            })
            return response;
        } catch (e) {
            return e;
        }
    }
}