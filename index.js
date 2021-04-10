const fetch = require('node-fetch');

module.exports = async () => {
	const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=eTitgeQIgcVYEqKbEfToPyG1r1GVVbaV4SKC7vwe&feedtype=json&ver=1.0');
	const json = await response.json();
    const sol = json.sol_keys;
	const last = sol.slice(-1)[0] 
	return {
		First_Date: parseInt (Date.parse(json[last].First_UTC)/1000),
		Last_Date: parseInt (Date.parse(json[last].Last_UTC)/1000),
		Data: json[last]
	};
};
