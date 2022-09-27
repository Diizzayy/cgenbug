import { generate } from '@graphql-codegen/cli';

generate({
  schema: [
    'https://api.spacex.land/graphql',
    'https://swapi-graphql.netlify.app/.netlify/functions/index'
 ],
  documents: ["./src/test.gql"],
  generates: {
    ["gql.ts"]: {
      plugins: ["typescript", 'typescript-operations'],
      config: {
        skipDocumentsValidation: true
      }
    }
  }
});
