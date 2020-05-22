function Student(name, email) {
    let _name = name,
        _email = email,
        _homeworkResults = [];

    this.getName = function() {
        return _name;
    }
    this.getEmail = function() {
        return _email;
    }
    this.addHomeworkResult = function(topic, success) {
        _homeworkResults.push({'topic' : topic, 'success' : success});
    }
    this.getHomeworkResults = function() {
        return _homeworkResults;
    }
    // this.printStudentsList = function() {
    //     return console.log(`name: ${this.getName()}, email: ${this.getEmail()}`)
    // }
}

// function FrontendLab(students, failedLimit) {
//     let _students = students,
//         _failedLimit = failedLimit;
//         this.printStudentsList = function() {
//             console.log(`name: ${Student.getName()}, email: ${Student.getEmail()}`)
//         }
//     // _failedHomeworksLimit = [];
//     // _studentList = [];

// }