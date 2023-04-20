let result = document.getElementById("result");
const equals = document.getElementById('btn')
const clearBtn = document.getElementById('clear-btn');
const decimal = document.getElementById('decimal');
const stringBox = document.getElementById('string');
const romanBox = document.getElementById('roman');

decimal.addEventListener('click', () =>{
    decimal.disabled = true;
});

document.addEventListener("click", function (e) {
    let target = e.target.closest('input');
    if(target.value === 'C'){
        result.value = "";
        stringBox.value = "";
        romanBox.value = '';
    } else if (target.value === '='){
        let a = result.value;
        let b = eval(a);
        result.value = b;
        convertToStr(b)
    }else if(target){
    result.value += e.target.value;
    };
  });


  function convertToStr(num){
    switch(num) {
      case 0:
        stringBox.value = 'zero';
        romanBox.value = '';
        break;
      case 1:
        stringBox.value = 'one';
        romanBox.value = 'I';
        break;
      case 2:
        stringBox.value = 'two';
        romanBox.value = 'II';
        break;
      case 3:
        stringBox.value = 'three';
        romanBox.value = 'III';
        break;
      case 4:
        stringBox.value = 'four';
        romanBox.value = 'IV';
        break;
      case 5:
        stringBox.value = 'five';
        romanBox.value = 'V';
        break;
      case 6:
        stringBox.value = 'six';
        romanBox.value = 'VI';
        break;
      case 7:
        stringBox.value = 'seven';
        romanBox.value = 'VII';
        break;
      case 8:
        stringBox.value = 'eight';
        romanBox.value = 'VIII';
        break;
      case 9:
        stringBox.value = 'nine';
        romanBox.value = 'IX';
        break;
      case 10:
        stringBox.value = 'ten';
        romanBox.value = 'X';
        break;
      case 11:
        stringBox.value = 'eleven';
        romanBox.value = 'XI';
        break;
      case 12:
        stringBox.value = 'twelve';
        romanBox.value = 'XII';
        break;
      case 13:
        stringBox.value = 'thriteen';
        romanBox.value = 'XIII';
        break;
      case 14:
        stringBox.value = 'fourteen';
        romanBox.value = 'XIV';
        break;
      case 15:
        stringBox.value = 'fifteen';
        romanBox.value = 'XV';
        break;
      case 16:
        stringBox.value = 'sixteen';
        romanBox.value = 'XVI';
        break;
      case 17:
        stringBox.value = 'seventeen';
        romanBox.value = 'XVII';
        break;
      case 18:
        stringBox.value = 'eighteen';
        romanBox.value = 'XVII';
        break;
      case 19:
        stringBox.value = 'nineteen';
        romanBox.value = 'XIX';
        break;
      case 20:
        stringBox.value = 'twenty';
        romanBox.value = 'XX';
        break;
      default:
        stringBox.value = "We haven't got that far!";
        romanBox.value = "Nullam fortunam!";
        break;
    };
};
