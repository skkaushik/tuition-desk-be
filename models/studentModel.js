const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    studentName: {
        type: String,
        required: true,
    },
    parentName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    className: {
        type: Number,
        required: true,
    },
    subjectOpted: {
        type: [String],
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    joiningDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
    }
});

const studentModel = model('Student', studentSchema);

module.exports = studentModel;