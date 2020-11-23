import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// START_HIGHLIGHT
import { withKnobs, number } from '@storybook/addon-knobs';
// END_HIGHLIGHT
import Carousel from '../src/Carousel';
import slides from '../example/slides';

const stories = storiesOf('Carousel', module);

// START_HIGHLIGHT
stories.addDecorator(withKnobs);
// END_HIGHLIGHT

stories.add('default', () => (
  // START_HIGHLIGHT
  <Carousel
    autoAdvanceDelay={number('autoAdvanceDelay', 10e3)}
    slides={slides}
    onIndexChange={action('onIndexChange')}
  />
  // END_HIGHLIGHT
));
