const isDinnerTime = true;
const hasFoodInDish = false;
const hasFoodInPantry = false;

if (isDinnerTime) {
  console.log("Walk to dog dish");

  if (!hasFoodInDish) {
    console.log("Walk to pantry");

    if (!hasFoodInPantry) {
      console.log("Drive to pet store");
      console.log("Buy pet food");
      console.log("Drive home");
      console.log("Pour food into pantry container");
    }

    console.log("Scoop food into dog dish");
  }

  console.log("Dog eats dinner");
}

console.log("Chill until next dinner time");
