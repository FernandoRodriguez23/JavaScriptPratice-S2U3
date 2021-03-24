//JS Pratice

//--------------------------Active Engament--------------------------//

//Create a 2D array

let day = [
    ['school', 8],
    ['food', 1],
    ['Driving', 2],
    ['Free Time', 6],
    ['Sleeping', 7]
];

//day[4][0] //Sleeping

day.splice(3, 0 , ['Study', 2]);
// The 3 is the row and the 0 is the amount of rows we are removing
day[4][1]-=2;
//Removes time from free time

day.splice(5, 0 , ['Programing', 1]);
day[6][1]-=1;


//Creating a new colume
// in is i = 0; i < i.length; i++

for(i in day){
    let percent = Math.round(day[i][1]/24*100);
    day[i][2] = percent + "%";
}


//console.log(day);

console.table(day); //creates a nice table in the console

//-----------------------------------------------------------------------//