// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = "My cats are called ";

// // for(const cat of cats){
// //     myFavoriteCats += `${cat},`;
// // }

// for(let i=0; i<cats.length; i++){
//     myFavoriteCats = myFavoriteCats + cats[i] + ",";
//     if (cats[i] === cats[1]){
//         break;
//     }
// }

// console.log(myFavoriteCats);

for(let i=10; i>=0; i--){
    console.log(i);
    if(i === 10) {
       i = "Countdown 10";
    } else if(i === 0){
        i = "Blast Off";
    }
}

const output = document.querySelector('.output')

