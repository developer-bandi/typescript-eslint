import type { AST_NODE_TYPES } from '../../ast-node-types';
import type { BaseNode } from '../../base/BaseNode';
import type { Expression } from '../../unions/Expression';
import type { JSXEmptyExpression } from '../JSXEmptyExpression/spec';

export interface JSXSpreadChild extends BaseNode {
  expression: Expression | JSXEmptyExpression;
  type: AST_NODE_TYPES.JSXSpreadChild;
}
