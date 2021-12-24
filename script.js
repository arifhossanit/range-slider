let countEl = document.getElementById("range");
let countE2 = document.getElementById("range2");
let rangevalue=document.getElementById("rangevalue");
let rangevalue2=document.getElementById("rangevalue2");

rangevalue.innerHTML=countEl.value;
countEl.style.backgroundSize=`${countEl.value}%`;
rangevalue.style.left = `calc(${countEl.value}% + (${24 - countEl.value * 0.44}px))`;

rangevalue2.innerHTML=countE2.value;
countE2.style.backgroundSize=`${countE2.value*10}%`;
rangevalue2.style.left = `calc(${countE2.value*10}% + (${24 - (countE2.value*10) * 0.44}px))`;

const rangeInputs = document.querySelectorAll('input[type="range"]');
let countE;
let rangeval;

function handleInputChange(e) {
  let target = e.target;
  if (target.id == 'range') {
    target = document.getElementById('range');
    rangeval = document.getElementById('rangevalue');
  }
  if (target.id == 'range2') {
    target = document.getElementById('range2');
    rangeval = document.getElementById('rangevalue2');
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;
  rangeval.innerHTML = val;
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
  if (target.id == 'range2') {
    rangeval.style.left = `calc(${val*10}% + (${24 - (val*10) * 0.44}px))`;
  }else{
    rangeval.style.left = `calc(${val}% + (${24 - val * 0.44}px))`;
  }
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
})



function controler(cv,rid){
  if (rid == 'range') {
    countE = document.getElementById('range');
    rangeval = document.getElementById('rangevalue');
  }
  if (rid == 'range2') {
    countE = document.getElementById('range2');
    rangeval = document.getElementById('rangevalue2');
  }
  let count = parseInt(countE.value);
  count +=cv;
  countE.value = count;
    let mins=countE.min;
    let maxs=countE.max;
    let vals=countE.value;
    rangeval.innerHTML = vals;

    countE.style.backgroundSize = (vals - mins) * 100 / (maxs - mins) + '% 100%';
    if (rid == 'range2') {
      rangeval.style.left = `calc(${vals*10}% + (${24 - (vals*10) * 0.44}px))`;
    }else{
      rangeval.style.left = `calc(${vals}% + (${24 - vals * 0.44}px))`;
    }
    
    
}

