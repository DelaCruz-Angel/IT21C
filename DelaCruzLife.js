//Step 1
let name = "Angel Dela Cruz";
let course = "Bachelor of Science in Information Technology";
let yearLevel = "2nd year";

console.log("Name: " + name + "\nCourse: " + course + "\nYearLevel: " + yearLevel);

//step 2
let HoursofSleep = 8;
let HoursofStudied = 5;

console.log("Hours of sleep: " + HoursofSleep + "\nHours studied: " + HoursofStudied);

//step 3
let studyMessage = "";
if(HoursofStudied >= 5){
    studyMessage = "Great! You studied enough today.";
}else{
    studyMessage = "You need to  study more.";
}
console.log(studyMessage);

//step 4
let subjects = ["OOP","Event Driven Programing", "Networking", "Web Development" + "Database System"];
console.log("List of my subjects this semester");
for (let i = 0; i< subjects.length; i++) {
    console.log(("-") + subjects[i]);
}

//step 5
function studentSummary(){
    return "My name is " + name + " " + "a" + " " + yearLevel + " " + "from" + " " + course;

}

console.log(studentSummary());
