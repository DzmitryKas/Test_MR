const buttonFilterLength = document.querySelector(".filter-length-word");
const buttonFilterWord = document.querySelector(".filter-word");
const textInput = document.querySelector(".input-text");
const textOutput = document.querySelector(".output-text");
const checkbox = document.querySelector(".checkbox");

async function getInformation() {
  const url = "http://www.mrsoft.by/data.json";
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const responce = await fetch(proxyurl + url);
  const data = await responce.json();
  return data;
}

async function filterStringLength() {
  const data = await getInformation();
  textOutput.innerHTML = "";
  let count = 0;
  data.data.forEach(el => {
    if (el.length > textInput.value) {
      if (count === 0) {
        textOutput.innerHTML = el;
      }
      count++;
      textOutput.innerHTML = textOutput.innerHTML + ", " + el;
    }
  });
}

async function filterSubstring() {
  const data = await getInformation();
  textOutput.innerHTML = "";
  let count = 0;
  data.data.forEach(el => {
    if (el.includes(textInput.value)) {
      if (count === 0) {
        textOutput.innerHTML = el;
      }
      count++;
      textOutput.innerHTML = textOutput.innerHTML + ",  " + el;
    }
  });
}

async function filterSubstringRegister() {
  const data = await getInformation();
  textOutput.innerHTML = "";
  let count = 0;
  data.data.forEach(el => {
    if (el.toLowerCase().includes(textInput.value.toLowerCase())) {
      if (count === 0) {
        textOutput.innerHTML = el;
      }
      count++;
      textOutput.innerHTML = textOutput.innerHTML + ", " + el;
    }
  });
}

buttonFilterLength.addEventListener("click", () => {
  filterStringLength();
});

buttonFilterWord.addEventListener("click", () => {
  if (checkbox.checked == true) {
    filterSubstring();
  } else {
    filterSubstringRegister();
  }
});
