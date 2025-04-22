const dotenv = require('dotenv');
const Student = require('../models/studentModel');

dotenv.config();

const studentOnboarding = async (req, res) => {
    const { studentName, parentName, age, className, subjectOpted, contactNumber, joiningDate, isActive } = req.body;
    try {
        const newStudent = new Student({ studentName, parentName, age, className, subjectOpted, contactNumber, joiningDate, isActive });
        await newStudent.save();
        res.status(201).json({
            success: true,
            message: 'Student Onboard Successfully!'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const studentsOnboardingList = async (req, res) => {
    try {
        const studentsList = await Student.find();
        res.status(200).json({
            success: true,
            message: 'Students Onboarding List Fetch SuccessFully!',
            data: studentsList
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const studentDetaislById = async (req, res) => {
    const studentId = req.params.id;
    try {
        const studentDetails = await Student.findById(studentId);
        if (!studentDetails) {
            res.status(400).json({
                sucess: false,
                message: "Student Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Student Details Fetch Successfully!",
            data: studentDetails,
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

module.exports = { studentOnboarding, studentsOnboardingList, studentDetaislById }