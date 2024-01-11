console.log('Exporting module');
/// Point num 4 in script.js
const birthYear = 1999;
const age = 23;
export const arrName = [];
/// Point num 2 in script.js
export const fullName = function (firstName, lastName) {
    arrName.push({ firstName, lastName });
    console.log(`My name is ${firstName} ${lastName}`);
};
/// Point num 6
export default function (firstName, lastName) {
    arrName.push({ firstName, lastName });
    console.log(`My name is ${firstName} ${lastName}`);
}
export { birthYear, age };
