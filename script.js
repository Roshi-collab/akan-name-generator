const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];

const femaleNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];

const form = document.getElementById("akan-form");
const dayInput = document.getElementById("birth-day");
const monthInput = document.getElementById("birth-month");
const yearInput = document.getElementById("birth-year");
const maleInput = document.getElementById("male");

const resultCard = document.getElementById("result-card");
const resultName = document.getElementById("result-name");
const resultDay = document.getElementById("result-day");

function showValidationError(message, field) {
  alert(message);
  field.focus();
}

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function calculateDayIndex(day, month, year) {
  let adjustedMonth = month;
  let adjustedYear = year;

  if (month === 1 || month === 2) {
    adjustedMonth = month + 12;
    adjustedYear = year - 1;
  }

  const CC = Math.floor(adjustedYear / 100);
  const YY = adjustedYear % 100;
  const MM = adjustedMonth;
  const DD = day;

  const formulaTotal =
    Math.floor(CC / 4) -
    2 * CC -
    1 +
    Math.floor((5 * YY) / 4) +
    Math.floor((26 * (MM + 1)) / 10) +
    DD;

  return ((formulaTotal % 7) + 7) % 7;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  resultCard.hidden = true;

  const dayValue = dayInput.value.trim();
  const monthValue = monthInput.value.trim();
  const yearValue = yearInput.value.trim();

  const selectedGender = document.querySelector(
    'input[name="gender"]:checked'
  );

  if (dayValue === "") {
    showValidationError("Please enter your birth day.", dayInput);
    return;
  }

  if (monthValue === "") {
    showValidationError("Please enter your birth month.", monthInput);
    return;
  }

  if (yearValue === "") {
    showValidationError("Please enter your birth year.", yearInput);
    return;
  }

  if (selectedGender === null) {
    showValidationError("Please select Male or Female.", maleInput);
    return;
  }

  const day = Number(dayValue);
  const month = Number(monthValue);
  const year = Number(yearValue);

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    showValidationError(
      "Please enter a day between 1 and 31.",
      dayInput
    );
    return;
  }

  if (!Number.isInteger(month) || month < 1 || month > 12) {
    showValidationError(
      "Please enter a month between 1 and 12.",
      monthInput
    );
    return;
  }

  const currentYear = new Date().getFullYear();

  if (
    !Number.isInteger(year) ||
    year < 1900 ||
    year > currentYear
  ) {
    showValidationError(
      `Please enter a year between 1900 and ${currentYear}.`,
      yearInput
    );
    return;
  }

  if (!isValidDate(day, month, year)) {
    showValidationError(
      "That date does not exist. Please check it and try again.",
      dayInput
    );
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  if (birthDate > today) {
    showValidationError(
      "Your birth date cannot be in the future.",
      yearInput
    );
    return;
  }

  const dayIndex = calculateDayIndex(day, month, year);
  const gender = selectedGender.value;

  let akanName;

  if (gender === "male") {
    akanName = maleNames[dayIndex];
  } else {
    akanName = femaleNames[dayIndex];
  }

  resultName.textContent = akanName;
  resultDay.textContent =
    `You were born on a ${daysOfWeek[dayIndex]}.`;

  resultCard.hidden = false;
  form.reset();
});