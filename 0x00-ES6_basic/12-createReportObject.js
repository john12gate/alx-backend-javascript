export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  return {
    allEmployees,
    getNumberOfDepartments: function () {
      return Object.keys(allEmployees).length;
    },
  };
}
