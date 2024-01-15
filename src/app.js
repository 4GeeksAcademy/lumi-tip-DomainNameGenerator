let pronoum = ["The", "Our", "Your"];
let adj = ["Top", "Fast", "Deep"];
let noun = ["Walker", "Padel", "Moose"];

// function domainName() {
//   let name = "";
//   name += pronoum[Math.floor(Math.random() * pronoum.length)];
//   name += adj[Math.floor(Math.random() * adj.length)];
//   name += noun[Math.floor(Math.random() * noun.length)];
//   return name;
// }

function domainName() {
  for (let i = 0; i <= 10; i++) {
    let name = "";
    name += pronoum[Math.floor(Math.random() * pronoum.length)];
    name += adj[Math.floor(Math.random() * adj.length)];
    name += noun[Math.floor(Math.random() * noun.length)];
    console.log(name);
  }
}

domainName();
