import '../../common/parameters';

import { When } from 'cypress-cucumber-preprocessor/steps';

When('I press the {ordinal} key of my piano', (number) => {
  expect(typeof number).equal('number');
});
