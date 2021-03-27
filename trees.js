
// Город - Школы - Классы - Ученики
const city = [
  { 
    name: "№1",
    groups: [
      {
        name: "1А",
        pupils: ["Антон", "Андрей"]
      },
      
      {
        name: "2А",
        pupils: ["Хаккназар", "Нурасыл"]
      },
      
      {
        name: "1Я",
        pupils: []
      }
    ]
  },
  { 
    name: "№45",
    groups: [
      {
        name: "1А",
        pupils: ["Антон", "Андрей"]
      },
      
    ]
  }
];


const getAllGroups = city => 
  city.map(school => school.groups.map(group => group.pupils.length)).flat(Infinity);



// const getAllGroups = city => {
//   let arr = [];
//   for(let i = 0; i < city.length; i++){
//       for(let j = 0; j < city[i].groups.length; j++){
//           arr.push(city[i].groups[j].name);
//       }
//   }
//   return arr;
// }

const getAllPupils = city => 
  city.map(school => school.groups.filter(group => group.name[0] === "1").map(group => group.pupils)).flat(Infinity);



console.log(getAllGroups(city));
console.log(getAllPupils(city));

