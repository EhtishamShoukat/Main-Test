function addPerson() {
  const name = document.getElementById("nameInput").value;
  const income = parseFloat(document.getElementById("incomeInput").value);
  const expense = parseFloat(document.getElementById("expenseInput").value);

  if (!name || isNaN(income) || isNaN(expense)) {
    alert("Please enter valid values for all fields.");
    return;
  }

  const balance = income - expense;
  const person = { name, income, expense, balance };

  let people = JSON.parse(localStorage.getItem("people")) || [];
  people.push(person);
  localStorage.setItem("people", JSON.stringify(people));

  renderPeopleTable();
  updateReport();
  clearPersonInputs();
}

function renderPeopleTable() {
  const tableBody = document
    .getElementById("personTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  const people = JSON.parse(localStorage.getItem("people")) || [];

  people.forEach((person, index) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = person.name;
    newRow.insertCell(1).innerText = person.income.toFixed(2);
    newRow.insertCell(2).innerText = person.expense.toFixed(2);
    newRow.insertCell(3).innerText = person.balance.toFixed(2);

    const actionsCell = newRow.insertCell(4);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
      deletePerson(index);
    };
    actionsCell.appendChild(deleteButton);
  });
}

function deletePerson(index) {
  let people = JSON.parse(localStorage.getItem("people")) || [];
  people.splice(index, 1);
  localStorage.setItem("people", JSON.stringify(people));
  renderPeopleTable();
  updateReport();
}

function updateReport() {
  const people = JSON.parse(localStorage.getItem("people")) || [];
  const totalPeople = people.length;
  let totalIncome = 0,
    totalExpense = 0,
    totalBalance = 0;

  people.forEach((person) => {
    totalIncome += person.income;
    totalExpense += person.expense;
    totalBalance += person.balance;
  });

  document.getElementById("totalPeople").innerText = totalPeople;
  document.getElementById("totalIncome").innerText = totalIncome.toFixed(2);
  document.getElementById("totalExpense").innerText = totalExpense.toFixed(2);
  document.getElementById("totalBalance").innerText = totalBalance.toFixed(2);
}

function clearPersonInputs() {
  document.getElementById("nameInput").value = "";
  document.getElementById("incomeInput").value = "";
  document.getElementById("expenseInput").value = "";
}

// Company management
function addCompany() {
  const owner = document.getElementById("ownerInput").value;
  const company = document.getElementById("companyInput").value;

  if (!owner || !company) {
    alert("Please enter valid values for all fields.");
    return;
  }

  const companyData = { owner, company };

  let companies = JSON.parse(localStorage.getItem("companies")) || [];
  companies.push(companyData);
  localStorage.setItem("companies", JSON.stringify(companies));

  renderCompanyTable();
  updateCompanyReport();
  clearCompanyInputs();
}

function renderCompanyTable() {
  const tableBody = document
    .getElementById("companyTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  const companies = JSON.parse(localStorage.getItem("companies")) || [];

  companies.forEach((companyData, index) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = companyData.owner;
    newRow.insertCell(1).innerText = companyData.company;

    const actionsCell = newRow.insertCell(2);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
      deleteCompany(index);
    };
    actionsCell.appendChild(deleteButton);
  });
}

function deleteCompany(index) {
  let companies = JSON.parse(localStorage.getItem("companies")) || [];
  companies.splice(index, 1);
  localStorage.setItem("companies", JSON.stringify(companies));
  renderCompanyTable();
  updateCompanyReport();
}

function updateCompanyReport() {
  const companies = JSON.parse(localStorage.getItem("companies")) || [];
  document.getElementById("totalCompanies").innerText = companies.length;
}

function clearCompanyInputs() {
  document.getElementById("ownerInput").value = "";
  document.getElementById("companyInput").value = "";
}

// Initialize
function initialize() {
  renderPeopleTable();
  updateReport();
  renderCompanyTable();
  updateCompanyReport();
}

window.onload = initialize;
