import {storiesOf} from '@storybook/react'
import * as React from 'react'

import {Hello} from '../Hello'


storiesOf('Hello', module)

  .add('default', () => (
    <Hello />
  ))
