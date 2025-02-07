import { pluralizeEnglish } from "./pluralize-english";

const args = process.argv.slice(2);

if (args.length) {
  const res = pluralizeEnglish.pluralize(args[0]);
  console.log(res);
}

export { pluralizeEnglish };
