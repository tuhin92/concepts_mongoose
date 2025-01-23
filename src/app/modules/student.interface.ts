import {Schema, model, connect} from 'mongoose';
export type Student = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: "male"|"female";
    dateOfBirth: string;
    contactNumber: string;
    emergencyContactNumber: string;
    bloodGroup?: "A+"|"A-"| "B+"|"B-"|"O+"|"O-"|"AB+"|"AB-";
    allergies?: string[];
}