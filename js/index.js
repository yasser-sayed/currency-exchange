///////////////////////////var S
const amountInp = document.querySelector(".amount-inp");
const swapBTN = document.querySelector(".swap");
const imgFrom = document.querySelector(".img-from");
const imgTo = document.querySelector(".img-to");
const selFrom = document.querySelector(".select-from");
const selTo = document.querySelector(".select-to");
const convBTN = document.querySelector(".conv-btn");
const resultH1 = document.querySelector(".result");
//////////////////////////var E

///////////////////////////////////////////////////img func S
function imgChange() {
  imgFrom.src = `https://flagsapi.com/${selFrom.value.slice(
    0,
    2
  )}/shiny/32.png`;
  imgTo.src = `https://flagsapi.com/${selTo.value.slice(0, 2)}/shiny/32.png`;
}
//////////////////////////////////////////////////img func E

//////////////////////////////////////////////////select action S
selFrom.addEventListener("change", () => {
  imgChange();
});
selTo.addEventListener("change", () => {
  imgChange();
});
//////////////////////////////////////////////////select action E

//////////////////////////////////////////////////swap action fun S
swapBTN.addEventListener("click", () => {
  let cont = null;
  cont = selFrom.value;
  selFrom.value = selTo.value;
  selTo.value = cont;
  imgChange();
});
//////////////////////////////////////////////////swap action fun E

//////////////////////////////////////////////////convert action fun S
convBTN.addEventListener("click", () => {
  const selFromOpt = selFrom.selectedOptions[0].value;
  const selToOpt = selTo.selectedOptions[0].value;
  fetch(
    `https://v6.exchangerate-api.com/v6/3b31a7e5ea9d23f9c73de102/latest/${selFromOpt}`
  )
    .then((res) => res.json())
    .then((data) => data.conversion_rates)
    .then((currency) => {
      resultH1.innerHTML = `${
        +amountInp.value ? +amountInp.value : 1
      } ${selFromOpt} = ${(+amountInp.value
        ? +currency[selToOpt] * +amountInp.value
        : currency[selToOpt]
      ).toFixed(2)} ${selToOpt} `;
    });
});
//////////////////////////////////////////////////convert action fun E
