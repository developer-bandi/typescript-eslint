import { ImplicitLibVariable, Variable } from '../../../src/variable';
import { createSerializer } from './baseSerializer';

const serializer = createSerializer(Variable, [
  //
  'defs',
  'name',
  'references',
  'isValueVariable',
  'isTypeVariable',
]);
const implicitLibVarSerializer = createSerializer(ImplicitLibVariable, [
  //
  'defs',
  'name',
  'references',
  'isValueVariable',
  'isTypeVariable',
]);

export { implicitLibVarSerializer, serializer };
