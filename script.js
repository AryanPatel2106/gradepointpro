/* type animation */
const element = document.getElementById("type");
const sentence = element.textContent.trim();
const speed = 100;
const pauseTime = 1500;
let index = 0;

function typeSentence() {
    if (index <= sentence.length) {
        element.textContent = sentence.substring(0, index);
        index++;
        setTimeout(typeSentence, speed);
    } else {
        setTimeout(() => {
            index = 0;
            element.textContent = "";
            typeSentence();
        }, pauseTime);
    }
}

element.textContent = "";
typeSentence();

/* add button */
let n = 5;
function addsubject() {
    const container = document.querySelector(".subjects-container");
    const newsubject = document.createElement("div");
    newsubject.className = "subject";
    newsubject.innerHTML = `<div class="subject-number">
                            Subject: ${n}
                        </div>
                        <select class="credit">
                            <option value="">credit</option>
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        <select class="grade">
                            <option value="">grade</option>
                            <option value="S">S</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="N">N</option>
                        </select>`
    container.appendChild(newsubject);
    n++;
}

/* gpa calculator */
    const gradeMap = {
      S: 10,
      A: 9,
      B: 8,
      C: 7,
      D: 6,
      E: 5,
      F: 0,
      N: 0
    };
function calculateGPA() {
    const credits = document.querySelectorAll(".credit");
    const grades = document.querySelectorAll(".grade");
    let totalcredits = 0;
    let totalpoints = 0;
    for (let i = 0; i < credits.length; i++) {
        const credit = parseFloat(credits[i].value);
        const grade = grades[i].value;
        if (!isNaN(credit)) {
            totalcredits += credit;
            totalpoints += gradeMap[grade] * credit;
        }
    }
    const gpa = totalcredits > 0 ? (totalpoints/totalcredits).toFixed(2) : 0;
    document.querySelector(".result").innerHTML = `Your GPA is: ${gpa}`;
}









