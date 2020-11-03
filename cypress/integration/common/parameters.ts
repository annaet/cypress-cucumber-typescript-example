import { defineParameterType } from 'cypress-cucumber-preprocessor/steps';

export const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

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
