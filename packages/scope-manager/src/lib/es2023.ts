// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// RUN THE FOLLOWING COMMAND FROM THE WORKSPACE ROOT TO REGENERATE:
// npx nx generate-lib repo

import type { LibDefinition } from '../variable';

import { es2022 } from './es2022';
import { es2023_array } from './es2023.array';
import { es2023_collection } from './es2023.collection';
import { es2023_intl } from './es2023.intl';

export const es2023: LibDefinition = {
  libs: [es2022, es2023_array, es2023_collection, es2023_intl],
  variables: [],
};
