import { apply, chain, externalSchematic, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';

function generateLibrary(schema: any): Rule {
  return externalSchematic('@nrwl/workspace', 'lib', {
    name: schema.name,
    directory: 'architech'
  });
}

function generateFiles(schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('adding NOTES.md to lib');

    const templateSource = apply(url('./files'), [
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
