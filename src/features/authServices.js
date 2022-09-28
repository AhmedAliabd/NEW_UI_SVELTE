import axios from 'axios';
export const login = async (userData) => {
	console.log(userData);
	const response = await axios.post(`http://localhost:5000/api/users/login`, userData);
	console.log(response);
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	console.log('>?>?>?>?>', localStorage.getItem('user'));
	return response.data;
};
