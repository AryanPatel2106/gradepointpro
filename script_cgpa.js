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
                            Semister: ${n}
                        </div>
                        <input type="number" class="credit" placeholder="credits">
                        <input type="number" class="gpa" placeholder="gpa">`
    container.appendChild(newsubject);
    n++;
}

/* gpa calculator */
    // const gradeMap = {
    //   S: 10,
    //   A: 9,
    //   B: 8,
    //   C: 7,
    //   D: 6,
    //   E: 5,
    //   F: 0,
    //   N: 0
    // };
function calculateGPA() {
    const credits = document.querySelectorAll(".credit");
    const gpas = document.querySelectorAll(".gpa");
    let totalcredits = 0;
    let totalsemgpa = 0;
    for (let i = 0; i < credits.length; i++) {
        const credit = parseFloat(credits[i].value);
        const gpa= parseFloat(gpas[i].value);
        if (!isNaN(credit)) {
            totalcredits += credit;
            totalsemgpa += gpa * credit;
        }
    }
    const gpa = totalcredits > 0 ? (totalsemgpa/totalcredits).toFixed(2) : 0;
    document.querySelector(".result").innerHTML = `Your CGPA is: ${gpa}`;
}









