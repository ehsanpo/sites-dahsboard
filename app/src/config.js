console.log(process.env);
const config = {
	api_url: process.env.REACT_APP_API_URL,
	api_uptime:  process.env.REACT_APP_UPTIME
};

export default config;