const apiDomain = 'https://rocky-meadow-55707.herokuapp.com/api/v2';

class AuthController {
	static login(event,form) {
		event.preventDefault();
		const email = form['email'].value; 
		const password = form['password'].value;
		const data = {email, password};
		
		fetch(`${apiDomain}/users/login`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-type":"application/json",
				"Accept":"application/json"
			}
		})
		.then(response => {
			return response.json()
		})
		.then(response => {
			if(window.localStorage.getItem('token') !==''){
				window.localStorage.removeItem('token');
			}
				let token = response.token;
				window.localStorage.setItem('token',token);
				console.log(token);
				// location.href('')
		})
		.catch(error => console.log(error))
	}

	static register(event,form) {
		event.preventDefault();
		const name = form['name'].value; 
		const email = form['email'].value; 
		const password = form['password'].value;
		const data = {name, email, password};
		
		fetch(`${apiDomain}/users`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-type":"application/json",
				"Accept":"application/json"
			}
		})
		.then(response => {
			return response.json()
		})
		.then(response => {
			if(window.localStorage.getItem('token') !==''){
				window.localStorage.removeItem('token');
			}
			let token = response.token;
				window.localStorage.setItem('token',token);
				console.log(token);
				// location.href('')
		})
		.catch(error => console.log(error))
	}
}