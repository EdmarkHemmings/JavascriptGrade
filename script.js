const calculateButton = document.getElementById('calculateButton');
const averageOutput = document.getElementById('averageOutput');

calculateButton.addEventListener('click', function() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const grade4 = parseFloat(document.getElementById('grade4').value);
    const grade5 = parseFloat(document.getElementById('grade5').value);

    const average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

    averageOutput.textContent = "Average Grade: " + average.toFixed(2);
});