// worked with thao nguyen and leonard constant

let images = [
  "better luffy.png",
  "better zoro.png",
  "better sanji.png",
  "better usopp.png",
  "better Jinbe.png",
];

document.querySelector(".play").addEventListener("click", () => {
  console.log(document.querySelector("#bet").value);
  if (
    document.querySelector("#bet").value >
    parseInt(document.querySelector(".bank").innerText)
  ) {
    alert("excuse me person, you're broke. ");
  } else if (document.querySelector("#bet").value === "") {
    alert("no bet, no spin");
  } else if (document.querySelector("#bet").value <= 49) {
    alert("go big or go home, we need 50 AT LEAST");
  } else {
    let bets = document.querySelector("#bet").value;
    let spin1 = Math.floor(Math.random() * 5);
    let spin2 = Math.floor(Math.random() * 5);
    let spin3 = Math.floor(Math.random() * 5);

    document.querySelector(".shuffle1").src = images[spin1];
    document.querySelector(".shuffle2").src = images[spin2];
    document.querySelector(".shuffle3").src = images[spin3];

    if (
      document.querySelector(".shuffle1").src ===
        document.querySelector(".shuffle2").src &&
      document.querySelector(".shuffle2").src ===
        document.querySelector(".shuffle3").src
    ) {
      let revenue = bets * 2;
      document.querySelector(".bank").innerText =
        parseInt(document.querySelector(".bank").innerText) + revenue;
    } else {
      document.querySelector(".bank").innerText =
        parseInt(document.querySelector(".bank").innerText) - bets;
    }
  }
});

document.querySelector(".min").addEventListener("click", () => {
  console.log(document.querySelector(".min"));
  if (50 > parseInt(document.querySelector(".bank").innerText)) {
    alert("excuse me person, you're broke");
  } else {
    let bets = 50;
    let spin1 = Math.floor(Math.random() * 5);
    let spin2 = Math.floor(Math.random() * 5);
    let spin3 = Math.floor(Math.random() * 5);

    document.querySelector(".shuffle1").src = images[spin1];
    document.querySelector(".shuffle2").src = images[spin2];
    document.querySelector(".shuffle3").src = images[spin3];

    if (
      document.querySelector(".shuffle1").src ===
        document.querySelector(".shuffle2").src &&
      document.querySelector(".shuffle2").src ===
        document.querySelector(".shuffle3").src
    ) {
      let revenue = bets * 2;
      document.querySelector(".bank").innerText =
        parseInt(document.querySelector(".bank").innerText) + revenue;
    } else {
      document.querySelector(".bank").innerText =
        parseInt(document.querySelector(".bank").innerText) - bets;
    }
  }
});
document.querySelector(".max").addEventListener("click", () => {
  console.log(document.querySelector(".max"));
  if (1000 > parseInt(document.querySelector(".bank").innerText)) {
    alert("excuse me person, you're broke, need atleast 1000");
  } else {
    let bets = 1000;
    let spin1 = Math.floor(Math.random() * 5);
    let spin2 = Math.floor(Math.random() * 5);
    let spin3 = Math.floor(Math.random() * 5);

    document.querySelector(".shuffle1").src = images[spin1];
    document.querySelector(".shuffle2").src = images[spin2];
    document.querySelector(".shuffle3").src = images[spin3];

    if (
      document.querySelector(".shuffle1").src ===
        document.querySelector(".shuffle2").src &&
      document.querySelector(".shuffle2").src ===
        document.querySelector(".shuffle3").src
    ) {
      let revenue = bets * 2;
      document.querySelector(".bank").innerText =
        parseInt(document.querySelector(".bank").innerText) + revenue;
    } else {
      document.querySelector(".bank").innerText =
        parseInt(document.querySelector(".bank").innerText) - bets;
    }
  }
});
