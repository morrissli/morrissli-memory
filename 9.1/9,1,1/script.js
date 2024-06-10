let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function totalSalary(department) {
    let total = 0;

    if (Array.isArray(department)) {
        for (let employee of department) {
            total += employee.salary;
        }
    } else {
        for (let subDepartment of department) {
            total += totalSalary(department[subDepartment]);
        }
    }

    return total;
}

console.log(totalSalary(company));