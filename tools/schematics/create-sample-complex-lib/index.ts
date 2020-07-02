import {
  apply,
  applyTemplates,
  chain,
  externalSchematic,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  Tree,
  url
} from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';
import { strings } from '@angular-devkit/core';

function generateLibrary(schema: any): Rule {
  return externalSchematic('@nrwl/angular', 'lib', {
    name: schema.name,
    directory: 'architech'
  });
}

function generateFiles(schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('adding NOTES.md to lib');

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: schema.name
      }),
      move(getProjectConfig(tree, `architech-${schema.name}`).root)
    ]);

    return chain([mergeWith(templateSource)])(tree, context);
  };
}

export default function(schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([generateLibrary(schema), generateFiles(schema)])(
      tree,
      context
    );
  };
}
