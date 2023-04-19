let result = document.getElementById("result");
const equals = document.getElementById('btn')
const clearBtn = document.getElementById('clear-btn');
const decimal = document.getElementById('decimal')

decimal.addEventListener('click', () =>{
    decimal.disabled = true;
});

document.addEventListener("click", function (e) {
    let target = e.target.closest('input');
    if(target.value === 'C'){
        result.value = ""
    } else if (target.value === '='){
        let a = result.value;
        let b = eval(a);
        result.value = b;
    }else if(target){
    result.value += e.target.value;
    };
  });


