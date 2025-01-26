import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try{
        //get the request body
    const student = req.body;
    //will call service function to send this data
    const result = await StudentService.createStudentIntoDb(student);
    //send a response
    res.status(200).json({
        success: true,
        message: "Student created successfully",
        data: result,
    });
    }catch(err){
        console.log(err);
    }
};

export const StudentController = {
    createStudent,
};