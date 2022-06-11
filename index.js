// Write your solution in this file!
const employee={name:"Sam", streetAddress:"11 Broadway"}

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const newKey={...employee};
    newKey[key]=value;
     return newKey;
}


function deleteFromEmployeeByKey(employee, key)
{
    const newEmployee= {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, value="Sam")
{
employee[key]=value;
return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
delete employee[key];
return employee;
}
