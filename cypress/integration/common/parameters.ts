import {
  defineParameterType,
  Then,
  When,
} from 'cypress-cucumber-preprocessor/steps';

const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

defineParameterType({
  name: 'note',
  regexp: new RegExp(notes.join('|')),
  transformer: (n) => n,
});

defineParameterType({
  name: 'ordinal',
  regexp: /(\d+)(?:st|nd|rd|th)/,
  transformer: (s) => parseInt(s, 10),
});

let keySound = null;

When('I press the {ordinal} key of my piano', (number) => {
  keySound = notes[(number - 1) % 7];
});

Then('I should hear a(n) {note} sound', (note) => {
  expect(note).to.equal(keySound);
});
