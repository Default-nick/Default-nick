const fs = require('node:fs');

const birthDate = new Date('1992-10-01');
const careerStartDate = new Date('2021-03-01');

const now = new Date();

function getFullYears(startDate, endDate) {
  let years = endDate.getFullYear() - startDate.getFullYear();

  const anniversaryHasPassed =
    endDate.getMonth() > startDate.getMonth() ||
    (endDate.getMonth() === startDate.getMonth() &&
      endDate.getDate() >= startDate.getDate());

  if (!anniversaryHasPassed) {
    years--;
  }

  return years;
}

const age = getFullYears(birthDate, now);
const experience = getFullYears(careerStartDate, now);

let readme = fs.readFileSync('README.md', 'utf8');

readme = readme.replace(
  /<!-- AGE -->.*?<!-- \/AGE -->/,
  `<!-- AGE -->${age}<!-- /AGE -->`
);

readme = readme.replace(
  /<!-- EXPERIENCE -->.*?<!-- \/EXPERIENCE -->/,
  `<!-- EXPERIENCE -->${experience}<!-- /EXPERIENCE -->`
);

fs.writeFileSync('README.md', readme);