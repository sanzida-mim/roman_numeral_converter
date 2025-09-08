const inputBox = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let userInput = inputBox.value;
  showMsg(userInput);
});

const showMsg = (num) => {
  const parsedNum = parseInt(num);

  if (isNaN(parsedNum)) {
    output.textContent = `Please enter a valid number.`;
    output.style.display = "block";
  } else if (parsedNum < 1) {
    output.textContent = `Please enter a number greater than or equal to 1.`;
    output.style.display = "block";
  } else if (parsedNum >= 4000) {
    output.textContent = `Please enter a number less than or equal to 3999`;
    output.style.display = "block";
  } else {
    output.textContent = convert(parsedNum);
    output.style.display = "block";
  };
}

function convert(integer) {
  const romanMap = [
    { value: 1000, symbol: 'M' },
    { value: 900,  symbol: 'CM' },
    { value: 500,  symbol: 'D' },
    { value: 400,  symbol: 'CD' },
    { value: 100,  symbol: 'C' },
    { value: 90,   symbol: 'XC' },
    { value: 50,   symbol: 'L' },
    { value: 40,   symbol: 'XL' },
    { value: 10,   symbol: 'X' },
    { value: 9,    symbol: 'IX' },
    { value: 5,    symbol: 'V' },
    { value: 4,    symbol: 'IV' },
    { value: 1,    symbol: 'I' }
  ];

  let result = '';

  for(const { value, symbol } of romanMap ) {
    while (integer >= value) {
      result += symbol;
      integer -= value;
    }
  }

  return result;
}