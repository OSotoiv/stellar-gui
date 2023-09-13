import axios from "axios";
const BASE_API_URL = process.env.REACT_APP_ENV === "development" ? "http://localhost:3001" : "https://stellar-api-4c4337d94ef4.herokuapp.com"

class StellarApi {
    constructor({ token }) {
        this.BASE_API_URL = BASE_API_URL;
        this.token = token;
    }
    static async allExams() {
        const { data } = await axios.get(`${BASE_API_URL}/exam/all`)
        return data.exams;
    }
    static async getExam(id) {
        const { data } = await axios.get(`${BASE_API_URL}/exam/view/${id}`)
        return data
    }
    static async addUserToLeaderboard(username, exam_score, exam_time, exam_id) {
        const { data } = await axios.post(`${BASE_API_URL}/score`,
            { username, exam_score, exam_time, exam_id })
        return data
    }
    static async isTopTen(exam_id, exam_score, exam_time) {
        const { data } = await axios.get(`${BASE_API_URL}/score/isTopTen/${exam_id}`,
            { params: { exam_score, exam_time } });
        return data.isTopTen
    }
    static async allLeaders() {
        const { data } = await axios.get(`${BASE_API_URL}/score/leaders`)
        return data
    }
    static async getTopTen(exam_id) {
        const { data } = await axios.get(`${BASE_API_URL}/score/topTen/${exam_id}`);
        return data;
    }

}

export default StellarApi;