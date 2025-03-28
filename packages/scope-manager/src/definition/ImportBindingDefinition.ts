import type { TSESTree } from '@typescript-eslint/types';

import { DefinitionBase } from './DefinitionBase';
import { DefinitionType } from './DefinitionType';

export class ImportBindingDefinition extends DefinitionBase<
  DefinitionType.ImportBinding,
  | TSESTree.ImportDefaultSpecifier
  | TSESTree.ImportNamespaceSpecifier
  | TSESTree.ImportSpecifier
  | TSESTree.TSImportEqualsDeclaration,
  TSESTree.ImportDeclaration | TSESTree.TSImportEqualsDeclaration,
  TSESTree.Identifier
> {
  public readonly isTypeDefinition = true;
  public readonly isVariableDefinition = true;

  constructor(
    name: TSESTree.Identifier,
    node: TSESTree.TSImportEqualsDeclaration,
    decl: TSESTree.TSImportEqualsDeclaration,
  );
  constructor(
    name: TSESTree.Identifier,
    node: Exclude<
      ImportBindingDefinition['node'],
      TSESTree.TSImportEqualsDeclaration
    >,
    decl: TSESTree.ImportDeclaration,
  );
  constructor(
    name: TSESTree.Identifier,
    node: ImportBindingDefinition['node'],
    decl: TSESTree.ImportDeclaration | TSESTree.TSImportEqualsDeclaration,
  ) {
    super(DefinitionType.ImportBinding, name, node, decl);
  }
}
