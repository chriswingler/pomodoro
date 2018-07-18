import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

import Label from '../components/Label';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('with dynamic text', () => (
    <Label text={text('props.text', 'Break Length')}></Label>
  ))