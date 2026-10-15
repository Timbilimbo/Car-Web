
const empinfo = [
    {
        empno: 1001,
        empname: "Lobster",
        job: "Programmer",
        salary: 30000
    },
    {
        empno: 1002,
        empname: "Alex",
        job: "Designer",
        salary: 28000
    },
    {
        empno: 1003,
        empname: "Robin",
        job: "Manager",
        salary: 40000
    },
    {
        empno: 1004,
        empname: "Sam",
        job: "Technician",
        salary: 32000
    }
];

const jsonData = JSON.stringify(empinfo, null, 4);

console.log(jsonData);