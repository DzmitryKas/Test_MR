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
  data.data.forEach(el => {
    let arr = el.split(" ");
    arr.forEach(element => {
      if (element.length > textInput.value) {
        textOutput.innerHTML = textOutput.innerHTML + "  " + element;
      }
    });
  });
}

async function filterSubstring() {
  const data = await getInformation();
  textOutput.innerHTML = "";
  data.data.forEach(el => {
    let arr = el.split(" ");
    arr.forEach(element => {
      if (element.includes(textInput.value)) {
        textOutput.innerHTML = textOutput.innerHTML + "  " + element;
      }
    });
  });
}

async function filterSubstringRegister() {
  const data = await getInformation();
  textOutput.innerHTML = "";
  data.data.forEach(el => {
    let arr = el.split(" ");
    arr.forEach(element => {
      if (element.toLowerCase().includes(textInput.value.toLowerCase())) {
        textOutput.innerHTML = textOutput.innerHTML + "  " + element;
      }
    });
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
