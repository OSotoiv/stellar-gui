import axios from "axios";
import { BASE_API_URL, SECRET_USER, PW_SECRET } from './configs'

class StellarApi {
    constructor() {
        this.BASE_API_URL = BASE_API_URL;
    }
    static async getToken() {
        try {
            const { data } = await axios.post(`${BASE_API_URL}/auth/token`, {
                username: SECRET_USER,
                password: PW_SECRET
            });
            return data.token;
        } catch (error) {
            throw new Error('Failed to fetch JWT token:', error);
        }
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
        const token = await StellarApi.getToken();
        const { data } = await axios.post(`${BASE_API_URL}/score`,
            { username, exam_score, exam_time, exam_id },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return data
    }
    static async isTopTen(exam_id, exam_score, exam_time) {
        const token = await StellarApi.getToken();
        const { data } = await axios.get(`${BASE_API_URL}/score/isTopTen/${exam_id}`,
            { params: { exam_score, exam_time }, headers: { Authorization: `Bearer ${token}` } });
        return data.isTopTen
    }
    static async allLeaders() {
        const { data } = await axios.get(`${BASE_API_URL}/score/leaders`)
        return data
    }
    static async getTopTen(exam_id) {
        //used for modal on exams page
        const { data } = await axios.get(`${BASE_API_URL}/score/topTen/${exam_id}`);
        return data;
    }

}

export default StellarApi;