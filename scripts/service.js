let serviceBrands = document.querySelector('.service__brands');
let serviceMoreBtn = document.querySelector('.service__brands-more');
let serviceMoreBtnState = false;

function changeServiceBrands() {
  if (serviceMoreBtnState === false) {
    serviceMoreBtnState = true;
    serviceMoreBtn.classList.add('service__brands-more_active');
    serviceBrands.classList.add('service__brands_active');
  } else {
    serviceMoreBtnState = false;
    serviceMoreBtn.classList.remove('service__brands-more_active');
    serviceBrands.classList.remove('service__brands_active');
  }
}

serviceMoreBtn.addEventListener('click', function () {
  changeServiceBrands();
});
