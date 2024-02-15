'use strict';

const company = {
  name: 'ООО Арго',
  employees: [
    {
      name: 'Mark',
    },
    {
      name: 'Den',
    },
    {
      name: 'Anna',
    },
  ],
  getEmployeeName: function () {
    const allEmployees = [];
    this.employees.map((el) => {
      allEmployees.push(el.name);
    });
    console.log(allEmployees.join(', '));
  },

  ceo: {
    name: 'Frank',
    getCeoName: function () {
      console.log(this.name);
    },
  },
  getCompanyName: function () {
    console.log(this.name);
  },
};

company.getCompanyName();
company.ceo.getCeoName();
company.getEmployeeName();
