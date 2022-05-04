'use strict';

var kaina = prompt('Kokia prekės kaina?');
kaina = Number(kaina);
var procentaisPVM = Number('21');
var kainaBePVM = (Number(kaina) * 100) / (100 + procentaisPVM);
var PVM = Number(kaina) - kainaBePVM;

if (Number.isNaN(kaina)) {
  prompt('Kokia prekės kaina?');
} else {
  console.log('Prekės kaina su PVM: ' + Number(kaina).toFixed(2) + '€');
  console.log('PVM: ' + PVM.toFixed(2) + '€');
  console.log('Prekės kaina be PVM: ' + kainaBePVM.toFixed(2) + '€');
}
