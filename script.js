// DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
/**************************************/
/**************************************/

// Main page
const goToLoginPage = () => {
	mainPage.style.display = 'none';
	loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e => {
	if (e.target.classList[1] === 'main-btn') {
		goToLoginPage();
	}
});
