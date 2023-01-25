let serviceBrands = document.querySelector('.service__brands');
let serviceMoreBtn = document.querySelector('.service__brands-more');

function changeServiceBrands() {
  if (!serviceBrands.classList.contains('service__brands_active')) {
    serviceMoreBtn.classList.add('service__brands-more_active');
    serviceBrands.classList.add('service__brands_active');
  } else {
    serviceMoreBtn.classList.remove('service__brands-more_active');
    serviceBrands.classList.remove('service__brands_active');
  }
}

serviceMoreBtn.addEventListener('click', function () {
  changeServiceBrands();
});
