const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
]

const names = []

for (let i = 0; i < students.length; i++){

    const element = students[i];
    names.push(element.name);

}

console.log(names);

const name = students.map(s => s.name);
const id = students.map(x => x.id);
const bigger = students.filter(x => x.id > 40);
console.log(name);
console.log(id);
console.log(bigger);