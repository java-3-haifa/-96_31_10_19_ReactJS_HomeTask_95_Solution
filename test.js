let input = document.querySelector("#inp");

input.oninput = (e) => {
    console.log(e.target.value);
};

input.onblur = (e) => {
    console.log("On Blur");
};

input.onchange = (e) => {
  console.log("On Change");
};
