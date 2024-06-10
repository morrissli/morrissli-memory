const company = {
    sales: [{name: 'Jhon', salary: 1000}, {name: 'Alise', salary: 600}],
    development: {
        web: [{name: "Peter", salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function totalSolary(company) {
    let total = 0;

    for (let employee of company.sales) {
        total += employee.salary;
    }

    for (let employee of company.development.web) {
        total += employee.salary;
    }

    for (let employee of company.development.internals) {
        total += employee.salary;
    }

    return total;
}

console.log(totalSolary(company));