import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

//call the controller function
router.post('/create-student', StudentController.createStudent);