import { autorizatonForm, change, regustration } from "./moduls/utils"

document.addEventListener('DOMContentLoaded', () => {
	const $linkRegust = document.getElementById('reg'),
		$autoriz = document.getElementById('autoriz'),
		$formReg = document.getElementById('regust'),
		$autorizationForm = document.getElementById('autorizationForm')
	document.body.addEventListener('click', e => {
		switch (e.target) {
			case $linkRegust:
				change()
				break;
			case $autoriz:
				change()
				break;
			default:
				break;
		}
	})
	$formReg.addEventListener('submit', e => {
		e.preventDefault()
		regustration()
	})
	$autorizationForm.addEventListener('submit', e => {
		e.preventDefault()
		autorizatonForm()
	})
})