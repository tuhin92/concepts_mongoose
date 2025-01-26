import { Student } from "../student.interface";
import { StudentModel } from "./student.model";


const createStudentIntoDb = async (student: Student) => {
    const result = await StudentModel.create(student);
    return result;
};

// export the function
// we export the function so that we can use it in other files
// we export the fuction as a property of an object 
export const StudentService = {
    createStudentIntoDb,
};