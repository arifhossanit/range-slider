var countEl = document.getElementById("range");
countEl.style.backgroundSize=`${countEl.value}%`;
document.getElementById("rangevalue").innerHTML=countEl.value;


const rangeInputs = document.querySelectorAll('input[type="range"]');
const bubble = document.querySelector(".bubble");
bubble.style.left = `calc(${countEl.value}% + (${24 - countEl.value * 0.44}px))`;

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  // const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  bubble.style.left = `calc(${val}% + (${24 - val * 0.44}px))`;
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

// var countEl = document.getElementById("range");
// var count = countEl.value;
var count;
function plus(){
    count = countEl.value;
    count++;
    countEl.value = count;

    var mins=countEl.min
    var maxs=countEl.max
    var vals=countEl.value
    bubble.innerHTML = vals;
    // var newVals = Number(((vals - mins) * 100) / (maxs - mins));

    countEl.style.backgroundSize = (vals - mins) * 100 / (maxs - mins) + '% 100%'
    bubble.style.left = `calc(${vals}% + (${24 - vals * 0.44}px))`;
    
    console.log(newVals);
    // const newVal = Number(((val - min) * 100) / (max - min));
    // bubble.innerHTML = val;
    // bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
function minus(){
  count = countEl.value;
  if (count > 0) {
    count--;
    countEl.value = count;

    var mins=countEl.min
    var maxs=countEl.max
    var vals=countEl.value
    bubble.innerHTML = vals;
    // var newVals = Number(((vals - mins) * 100) / (maxs - mins));

    countEl.style.backgroundSize = (vals - mins) * 100 / (maxs - mins) + '% 100%'
    bubble.style.left = `calc(${vals}% + (${24 - vals * 0.44}px))`;
  }  
}

