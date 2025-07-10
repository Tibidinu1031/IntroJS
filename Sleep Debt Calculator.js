const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 7.5;
    case "Tuesday":
      return 7.5;
    case "Wednesday":
      return 7.5;
    case "Thursday":
      return 7.5;
    case "Friday":
      return 7.5;
    case "Saturday":
      return 7.5;
    case "Sunday":
      return 7.5;
    defult:
      return "Prolly the wrong day"
  } 
}

const getActualSleepHours = () => {
  sum = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  return sum;
}

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log(`You need ${idealSleepHours}/week and you sleep you sleep ${getActualSleepHours()}/week. That means your sleep debt is ${idealSleepHours - getActualSleepHours()} hours. Congrats!`)
  } else if (getActualSleepHours() > idealSleepHours) {
    console.log(`You need ${idealSleepHours}/week and you sleep you sleep ${getActualSleepHours()}/week. That not only means you don't have sleep debt but that sleep owes you ${actualSleepHours - idealSleepHours} hours. Congrats! :))))))`)
  } else {
  console.log(`You need ${idealSleepHours}/week and you sleep you sleep ${getActualSleepHours()}/week. That means your sleep debt is ${idealSleepHours - getActualSleepHours()} hours. We encourage you to get more sleep as it's fundamental for everything. Trust us, we learned it the hard way!`)
  }
}

calculateSleepDebt();