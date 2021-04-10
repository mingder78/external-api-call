const fetch = require('node-fetch');

module.exports = async () => {
	const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=eTitgeQIgcVYEqKbEfToPyG1r1GVVbaV4SKC7vwe&feedtype=json&ver=1.0');
	const json = await response.json();

	return json;
};
