import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const port = process.env.PORT;

export default port;