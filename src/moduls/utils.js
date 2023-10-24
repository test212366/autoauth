export const change = () => {
	const $autoriz = document.querySelector('.auto__auto-entry'),
		$regust = document.querySelector('.auto__auto-regust')
	$autoriz.classList.toggle('hide')
	$regust.classList.toggle('hide')
}
export const regustration = () => {
	const $regustName = document.getElementById('reg-name'),
		$regustPassword = document.getElementById('reg-pass')
	const newUser = new User($regustName.value, $regustPassword.value)
	console.log(newUser)
	newUser.regustrationUser(newUser)
	$regustPassword.value = ''
	$regustName.value = ''
}
export const autorizatonForm = async () => {
	const $autoName = document.getElementById('auto-name'),
		$autoPass = document.getElementById('auto-pass')
	const currentUser = new User($autoName.value, $autoPass.value)
	const resp = await currentUser.autorizatonUser()
	const responce = await resp.json()
	for (const key in responce) {
		if (Object.hasOwnProperty.call(responce, key)) {
			const element = responce[key];
			if (element.name === currentUser.name) {
				if (element.password === currentUser.password) {
					console.log('вход');
				}
			}

		}
	}

	$autoName.value = ''
	$autoPass.value = ''
}
class User {
	constructor(name, password) {
		this.name = name
		this.password = password
	}
	regustrationUser(user, meethod = 'POST') {
		return fetch('https://autoriz-e7596-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
			method: meethod,
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
	autorizatonUser() {
		return fetch('https://autoriz-e7596-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}