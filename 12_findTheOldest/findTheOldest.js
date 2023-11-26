const findTheOldest = function (array) {
  // Reduce the array by comparing the current age with the previous age.
  return array.reduce((oldest, currentPerson) => {
    //
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    console.log(oldestAge);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
