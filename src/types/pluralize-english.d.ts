declare class PluralizeEnglish {
    private readonly vowels;
    private readonly esPluralSuffixes;
    private readonly fFePluralSuffixes;
    private readonly uncountableNouns;
    private readonly pluralOnlyNouns;
    private readonly exceptionsForFAndFeWords;
    private readonly irregularPlurals;
    private readonly invariablePlurals;
    constructor();
    pluralize(word: string): string | undefined;
}
declare const pluralizeEnglish: PluralizeEnglish;
export { pluralizeEnglish };
