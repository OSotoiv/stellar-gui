
const BASE_API_URL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://stellar-api-4c4337d94ef4.herokuapp.com"
const SECRET_USER = process.env.REACT_APP_SECRET_USER;
const PW_SECRET = process.env.REACT_APP_PW_SECRET

export {
    BASE_API_URL,
    SECRET_USER,
    PW_SECRET
}