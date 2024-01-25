// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
let pronoum = ["The", "Our", "Your"];
let adj = ["Top", "Fast", "Deep"];
let noun = ["Peresiansises", "Capcom", "Waldo", "Cococom", "Ogre"];
let extention = ["es", "com", "org"];

function domainName() {
  pronoum.forEach((initial) => {
    adj.forEach((mid) => {
      noun.forEach((final) => {
        extention.forEach((termination) => {
          if (
            final.substring(final.length, final.length - termination.length) ===
            termination
          ) {
            final = final.substring(0, final.length - termination.length);
            let name = initial + mid + final + "." + termination;
            console.log(name);
          } else {
            let name = initial + mid + final + "." + termination;
            console.log(name);
          }
        });
      });
    });
  });
}
domainName();
// };

//-------------------------------------------------Solo con FOR LOOPS--------------------------------------------------------------

// function domainName() {
//   for (let i = 0; i <= 10; i++) {
//     let name = "";
//     let initial = pronoum[Math.floor(Math.random() * pronoum.length)];
//     let mid = adj[Math.floor(Math.random() * adj.length)];
//     let final = noun[Math.floor(Math.random() * noun.length)];
//     let termination = extention[Math.floor(Math.random() * extention.length)];
//     let hackFinal = "";

//     if(final[final.length - 3] + final[final.length - 2] + final[final.length - 1] === termination){
//       for(let x = 0; x < final.length; x++){
//         if(x === final.length - 3 || x === final.length - 2 || x === final.length - 1) continue;
//         else hackFinal += final[x];
//       }
//       name = initial + mid + hackFinal + "." + termination;
//     }

//     else if(final[final.length - 2] + final[final.length - 1] === termination){
//       for(let x = 0; x < final.length; x++){
//         if(x === final.length - 2 || x === final.length - 1) continue;
//         else hackFinal += final[x];
//       }
//       name = initial + mid + hackFinal + "." + termination;
//     }

//     else name = initial + mid + final + "." + termination;

//     console.log(name);
//   }
// }
