// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

// async function getData() {
//     Simulate getting data from a server
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//     return 15;
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let data = await x.json();
//     return data;
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let data = await x.json();
    return data;
}

async function main() {

console.log("Loading modules");

console.log("Doing another interesting thing");

console.log("Load data");

let data = await getData();

console.log(data);

console.log("Processing data");

console.log("Task number 2");

}

main();

// data.then((v)=>{
//     console.log(v);

//     console.log("Processing data");

//     console.log("Task number 2");
// })