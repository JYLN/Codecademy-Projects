const getSleepHours = day => {
  day = day.toLowerCase();

  switch (day) {
    case 'monday':
      return 6;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 5;
    case 'thursday':
      return 7;
    case 'friday':
      return 9;
    case 'saturday':
      return 10;
    case 'sunday':
      return 5;
    default:
      console.log('Invalid input');
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got more sleep than needed! You were over by ${
        actualSleepHours - idealSleepHours
      } hours.`
    );
  } else {
    console.log(
      `You did not quite get there. You were under by ${
        idealSleepHours - actualSleepHours
      } hours.`
    );
  }
};

calculateSleepDebt();
