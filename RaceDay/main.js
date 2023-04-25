let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = false;
let runnerAge = 18;

if (runnerAge > 18 && earlyReg) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyReg) {
  console.log(`You race at 9:30am. | Race Number ${raceNumber}`);
} else if (runnerAge > 18 && !earlyReg) {
  console.log(`You race at 11:00am. | Race Number ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You race at 12:30pm. | Race Number ${raceNumber}`);
} else {
  console.log('See registration desk.');
}
