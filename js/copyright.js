// GET DYNAMIC COPYRIGHT DATE

const copyrightYearEl = document.querySelector(".year");
const copyrightYear = new Date().getFullYear();
copyrightYearEl.textContent = copyrightYear;
