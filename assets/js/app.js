var cl = console.log;
//alert("hello")

const selectColor = document.getElementById('selectColor');
cl(selectColor);

const all = Array.from(document.querySelectorAll(".all"));
// const orange = Array.from(document.querySelectorAll(".orange"));
// const pink = Array.from(document.querySelectorAll(".pink"));
// const red = Array.from(document.querySelectorAll(".red"));
// const blue = Array.from(document.querySelectorAll(".blue"));
// const violet = Array.from(document.querySelectorAll(".violet"));
// const yellowgreen = Array.from(document.querySelectorAll(".yellowgreen"));

const onchangeColor = (eve) => {
    let getColor = eve.target.value;
    cl(getColor);
    all.forEach(div => div.classList.add("d-none"));

    // let getdivs = document.querySelectorAll("." + getColor);
    // cl(getdivs);

      let getdivs =Array.from(document.querySelectorAll("." + getColor));
    //let getdivs =[...document.querySelectorAll("." + getColor)]; //spread operator
      getdivs.forEach(div => div.classList.remove("d-none"));
}

selectColor.addEventListener("change", onchangeColor)











