import {
  Then,
  When,
} from 'cypress-cucumber-preprocessor/steps';

import { notes } from '../../common/parameters';

let keySound = null;

When('I press the {ordinal} key of my keyboard', (number) => {
  keySound = notes[(number - 1) % 7];
});

Then('I should hear a(n) {note} sound', (note) => {
  expect(note).to.equal(keySound);
});
