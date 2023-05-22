const toggleBtn = document.querySelector('.toggle_btn')
const toggltBtnIon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
}


// const toggleBtn = document.querySelector('.toggle_btn')
// const toggleBtnIon = document.querySelector('.toggle_btn i')
// const dropDownMenu = document.querySelector('.dropdown_menu')
//
// toggleBtn.onclick = function () {
//   dropDownMenu.classList.toggle('open')
//   const isOpen = dropDownMenu.classList.contains('open')
//
//   toggleBtnIon.classList = isOpen
//     ?'fa-solid fa-xmark'
//     :'fa-solid fa-bars'
// }
