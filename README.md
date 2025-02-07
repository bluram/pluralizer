# Pluralizer

This is a simple program that allows you to pluralize nouns!

## Usage

```typescript
import pluralizeEnglish from "pluralize-english";

// Returns 'words'
pluralizeEnglish.pluralize("word");

// Returns 'rain'
pluralizeEnglish.pluralize("rain");

// Returns 'children'
pluralizeEnglish.singularize("child");
```

## English Rules

1. **Most nouns**: Add `-s` (e.g., _cat_ → _cats_).
2. **Words ending in `-s`, `-x`, `-z`, `-ch`, `-sh`**: Add `-es` (e.g., _box_ → _boxes_).
3. **Words ending in `-y`**:
   - If preceded by a consonant, change `-y` to `-ies` (e.g., _city_ → _cities_).
   - If preceded by a vowel, simply add `-s` (e.g., _boy_ → _boys_).
4. **Irregular forms**: Memorize these (e.g., _child_ → _children_, _man_ → _men_).
5. **Words ending in `-f` or `-fe`**: Change `-f` to `-ves` (e.g., _leaf_ → _leaves_).
6. **Some words remain the same in singular and plural** (e.g., _information_, _scissors_).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
