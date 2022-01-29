import { UI } from './view.js';
import { format } from 'date-fns';

function countdown() {
  event.preventDefault();
  const userDate = new Date(UI.INPUT.value);
  if (userDate == 'Invalid Date') return;
  const currentDate = new Date();
  const dateDifference =  new Date(userDate - currentDate);
  let result = "After ";
  if (dateDifference.getFullYear() - 1970) {
    result += `${format(dateDifference, 'y') - 1970} years, `;
  }
  if (dateDifference.getDate()) {
    result += `${format(dateDifference, 'd')} days, `;
  }
  if (dateDifference.getHours() - 6) {
    result += `${format(dateDifference, 'H') - 6} hours`
  }
  UI.RESULT.innerHTML = result;
}

UI.BTN.addEventListener('click', countdown)
