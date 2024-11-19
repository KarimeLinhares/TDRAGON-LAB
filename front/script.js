document.getElementById('loginForm').addEventListener('submit', async (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	try {
		const response = await fetch('http://backend:3000/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		});

		const data = await response.json();

		if (response.ok) {
			localStorage.setItem('token', data.token);
			document.getElementById('message').innerText = 'Sucesso!';
			console.log('Token JWT:', data.token);
		} else {
			document.getElementById('message').innerText = data.message;
		}
	} catch (error) {
		console.error('Erro:', error);
	}
});

async function acessarProtegido() {
	const token = localStorage.getItem('token');
	if (!token) {
		alert('Você precisa fazer login primeiro');
		return;
	}

	try {
		const response = await fetch('http://backend:3000/protected', {
			method: 'GET',
			headers: { Authorization: token },
		});

		const data = await response.json();
		alert(data.message);
	} catch (error) {
		console.error('Erro:', error);
	}
}
