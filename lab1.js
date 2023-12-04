/*
Lab 11ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
*/
let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
console.log(first); // *
console.log(second); // **
console.log(third); // ***
// ตอบ Maya เพราะ first คือค่าตัวแปรแรกใน array

/**Lab 12
- ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร */
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses',
    'whiskers on kittens',
    'Bright copper kettles',
    'warm woolen mittens',
];
console.log(raindrops); // *
console.log(whiskers); // **
console.log(aFewOfMyFavoriteThings); // ***
// ตอบ Raindrops on roses เพราะ raindrops คือค่าตัวแปรแรกใน array

/**Lab 13
- ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
 */
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // *
// ตอบ 10 30 20 เพราะตำแหน่งที่ 1 กับ 2 สลับกันใน array จะเริ่มนับตำเเหน่งจาก 0

/**Lab 14
- ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร */
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // *
console.log(yearNeptuneDiscovered); // **
// ตอบ 8 เพราะ numPlanets คือค่าตัวเเรกที่เก็บใน facts

/**Lab 15
- ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร */
let planetFacts = {
    numPlanets1: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
let { numPlanets1, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // *
// ตอบ yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659 เพราะ discoveryYears ไม่เก็บค่าของ numPlanets1: 8

/**Lab 16
- ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร */
function getUserData({ firstName, favoriteColor = 'green' }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
getUserData({ firstName: 'Melissa' }); // **
getUserData({}); // ***
// ตอบ 'Your name is undefined and you like green' เพราะ firstName เก็บค่า Your name is และ favoriteColor เก็บค่า and you like

/**Lab 19
- จงเขียน Object destructuring โดยกำหนดให้
- ตัวแปร name เก็บค่า name property
- ตัวแปร age เก็บค่า years property
- ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false 
let user = {
 name: 'John',
 years: 27
};*/
let user = {
    name: 'John',
    years: 27
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

/** Lab 21
- ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
let arr = [1, [2, [[[3, 4], 5], 6]]];*/
let arr = [1, [2, [[[3, 4], 5], 6]]];

let [a, [b, [[c, d], e], f]] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

/**Lab 24
- a และ b มีค่าเท่าไร*/
const [, , , a1, b1] = [1, 2, 3];
// ค่าของ a1 คือ 3 และ b1 คือ undefined.

/*Lab 28
- ให้ใช่ for … of กับ users (ให้ destructuring object ในแตละ iteration)
- ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown */

const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
];

for (const { user, age = 'ไม่ทราบ' } of users) {
    console.log(`${user} - อายุ: ${age}`);
}
