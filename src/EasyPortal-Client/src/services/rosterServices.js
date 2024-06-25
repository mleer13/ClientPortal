import easyportalAPI from "../config/api";

// Mock data used for front end unit testing
export const employees = [
    { id: 1, name: "Jenny", monday: "9am-5pm", tuesday: "9am-5pm", wednesday: "9am-5pm", 
    thursday: "9am-5pm", friday: "9am-5pm", saturday: "", sunday: ""},
    { id: 2, name: "Kenny", monday: "9am-5pm", tuesday: "9am-4pm", wednesday: "9am-4pm", 
    thursday: "9am-4pm", friday: "9am-4pm", saturday: "", sunday: ""},
    { id: 3, name: "Lilly", monday: "9am-5pm", tuesday: "9am-3pm", wednesday: "9am-5pm", 
    thursday: "9am-5pm", friday: "9am-3pm", saturday: "", sunday: ""},
    { id: 4, name: "Jill", monday: "9am-5pm", tuesday: "10am-5pm", wednesday: "9am-5pm", 
    thursday: "9am-5pm", friday: "9am-5pm", saturday: "", sunday: ""},
    { id: 5, name: "Jack", monday: "10am-5pm", tuesday: "9am-5pm", wednesday: "9am-5pm", 
    thursday: "9am-5pm", friday: "9am-5pm", saturday: "", sunday: ""}
  ]

function transformRoster(employee) {
    let transformedRoster = {
        name: employee.displayName, 
        monday: employee.monday,
        tuesday: employee.tuesday,
        wednesday: employee.wednesday,
        thursday: employee.thursday,
        friday: employee.friday,
        saturday: employee.saturday,
        sunday: employee.sunday
    }
    return transformedRoster;
}

export async function getRosters() {
    const response = await easyportalAPI.get('/employees');
    console.log ("response is (allEmployees):", response.data.allEmployees);
    return response.data.allEmployees
}

export async function getRoster(_id) {
    const response = await easyportalAPI.get(`/employees/${_id}`);
    let employees = response.data;
    const employee = employees.find(employee => employee._id.toString() === _id.toString())
    return employee ? transformRoster(employee) : null
}

// export async function createRoster(employee) {
// 	const response = await easyportalAPI.post('/employees', employee);
// 	return response.data;
// }

export async function deleteRoster(id) {
	const response = await easyportalAPI.delete(`/employees/${id}`);
	return response.data;
}

export async function updateRoster(data) {
	let updatedRoster = {
		displayName: data.body.displayName,
        
        employeeID: data.body.employeeID,
        Monday: data.body.Monday,
        Tuesday: data.body.Tuesday,
        Wednesday: data.body.Wednesday,
        Thursday: data.body.Thursday,
        Friday: data.body.Friday,
        Saturday: data.body.Saturday,
        Sunday: data.body.Sunday       
	}
	const response = await easyportalAPI.put(`/employees/${data.id}`, updatedRoster);
	return response.data;
}