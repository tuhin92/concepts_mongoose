import { Schema , model } from "mongoose";
import { Guardian, LocalGurdian, Student, UserName } from "../student.interface";

// username schema
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

//guardian schema
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});

// local guardian schema
const localGuardianSchema = new Schema<LocalGurdian>({
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});


// Define the schema for the student model
const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: userNameSchema,
  gender: { type: String, enum: ["male", "female"], required: true },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,

  localGuardian: localGuardianSchema,
  profilePicture: { type: String },
  isAcitve: ["active", "inactive"],
});

