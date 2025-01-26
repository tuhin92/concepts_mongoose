export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNumber: string;
    motherName: string;
    motherOccupation: string;
    motherContactNumber: string;
};

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
}

export type LocalGurdian = {
    name: UserName;
    contactNumber: string;
    address: string;
}


export type Student = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: "male"|"female";
    dateOfBirth?: string;
    email: string;
    contactNumber: string;
    emergencyContactNumber: string;
    bloodGroup?: "A+"|"A-"| "B+"|"B-"|"O+"|"O-"|"AB+"|"AB-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGurdian;
    profilePicture?: string;
    isAcitve: 'active'|'inactive';
}