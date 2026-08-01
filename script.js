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

const resultCard = document.getElementById("result-card");
const resultName = document.getElementById("result-name");
const resultDay = document.getElementById("result-day");

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

  if (
    dayValue === "" ||
    monthValue === "" ||
    yearValue === "" ||
    selectedGender === null
  ) {
    alert("Please complete every field and select Male or Female.");
    return;
  }

  const day = Number(dayValue);
  const month = Number(monthValue);
  const year = Number(yearValue);

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    alert("Please enter a day between 1 and 31.");
    return;
  }

  if (!Number.isInteger(month) || month < 1 || month > 12) {
    alert("Please enter a month between 1 and 12.");
    return;
  }

  const currentYear = new Date().getFullYear();

  if (
    !Number.isInteger(year) ||
    year < 1900 ||
    year > currentYear
  ) {
    alert(`Please enter a year between 1900 and ${currentYear}.`);
    return;
  }

  if (!isValidDate(day, month, year)) {
    alert("That date does not exist. Please check it and try again.");
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  if (birthDate > today) {
    alert("Your birth date cannot be in the future.");
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