class PluralizeEnglish {
  private readonly vowels: string[];
  private readonly esPluralSuffixes: string[];
  private readonly fFePluralSuffixes: string[];
  private readonly uncountableNouns: string[];
  private readonly pluralOnlyNouns: string[];
  private readonly exceptionsForFAndFeWords: string[];
  private readonly irregularPlurals: Map<string, string>;
  private readonly invariablePlurals: string[];

  constructor() {
    this.vowels = ["a", "e", "i", "o", "u"];
    this.esPluralSuffixes = ["s", "x", "z", "ch", "sh"];
    this.fFePluralSuffixes = ["f", "fe"];

    this.uncountableNouns = [
      "advice",
      "bread",
      "cattle",
      "cheese",
      "clothing",
      "commerce",
      "education",
      "electricity",
      "employment",
      "energy",
      "furniture",
      "happiness",
      "homework",
      "imagination",
      "information",
      "jewelry",
      "laughter",
      "literature",
      "mathematics",
      "meat",
      "music",
      "news",
      "patience",
      "pollution",
      "progress",
      "rain",
      "salt",
      "shopping",
      "snow",
      "software",
      "stationery",
      "sugar",
      "tea",
      "traffic",
      "transportation",
      "violence",
      "water",
      "weather",
      "wine",
      "yoga",
      "milk",
    ];

    this.pluralOnlyNouns = [
      "clothes",
      "scissors",
      "glasses",
      "trousers",
      "jeans",
      "shorts",
      "pajamas",
      "savings",
      "riches",
      "news",
      "congratulations",
      "thanks",
      "premises",
      "proceeds",
      "stairs",
      "wages",
      "mumps",
      "latter",
      "athletics",
      "billiards",
      "bowels",
      "ceremonies",
      "citizenship",
      "compasses",
      "data",
      "dregs",
      "drinks",
      "fruits",
      "happenings",
      "headlines",
      "heels",
      "innards",
      "mathematics",
      "means",
      "measles",
      "pants",
      "police",
      "provisions",
      "problems",
      "shoes",
      "spirituals",
      "sports",
      "suburbs",
      "surroundings",
      "theater",
      "tools",
      "tongs",
      "vowels",
      "weights",
      "witnesses",
    ];

    this.exceptionsForFAndFeWords = [
      "roof",
      "chef",
      "belief",
      "safe",
      "handkerchief",
    ];

    this.irregularPlurals = new Map([
      ["man", "men"],
      ["woman", "women"],
      ["child", "children"],
      ["person", "people"],
      ["tooth", "teeth"],
      ["foot", "feet"],
      ["mouse", "mice"],
      ["goose", "geese"],
      ["louse", "lice"],
      ["ox", "oxen"],
      ["cactus", "cacti"],
      ["fungus", "fungi"],
      ["nucleus", "nuclei"],
      ["syllabus", "syllabi"],
      ["focus", "foci"],
      ["radius", "radii"],
      ["stimulus", "stimuli"],
      ["analysis", "analyses"],
      ["basis", "bases"],
      ["crisis", "crises"],
      ["diagnosis", "diagnoses"],
      ["thesis", "theses"],
      ["phenomenon", "phenomena"],
      ["criterion", "criteria"],
      ["datum", "data"],
      ["medium", "media"],
      ["appendix", "appendices"],
      ["index", "indices"],
      ["matrix", "matrices"],
      ["vertex", "vertices"],
      ["axis", "axes"],
      ["oasis", "oases"],
    ]);

    this.invariablePlurals = [
      "sheep",
      "deer",
      "fish",
      "moose",
      "salmon",
      "trout",
      "species",
      "aircraft",
      "spacecraft",
    ];
  }

  pluralize(word: string) {
    const optimizedWord = word.toLowerCase();

    // Check for uncountable nouns
    if (this.uncountableNouns.includes(optimizedWord)) {
      return optimizedWord;
    }
    // Check for plural only nouns
    if (this.pluralOnlyNouns.includes(optimizedWord)) {
      return optimizedWord;
    }

    // Check for irregular plurals
    if (this.irregularPlurals.has(optimizedWord)) {
      return this.irregularPlurals.get(optimizedWord);
    }

    // Check for invariable plurals
    if (this.invariablePlurals.includes(optimizedWord)) {
      return optimizedWord;
    }

    const lastCharacter = optimizedWord.slice(-1);
    const lastTwoCharacters = optimizedWord.slice(-2);
    const penultimateCharacter = optimizedWord[optimizedWord.length - 2];

    // Apply pluralization rules
    if (
      this.esPluralSuffixes.includes(lastTwoCharacters) ||
      this.esPluralSuffixes.includes(lastCharacter)
    ) {
      return optimizedWord + "es";
    }

    if (
      this.fFePluralSuffixes.includes(lastTwoCharacters) ||
      this.fFePluralSuffixes.includes(lastCharacter)
    ) {
      if (this.exceptionsForFAndFeWords.includes(optimizedWord)) {
        return optimizedWord + "s";
      }

      const suffix = this.fFePluralSuffixes.includes(lastTwoCharacters)
        ? lastTwoCharacters
        : lastCharacter;

      return optimizedWord.replace(suffix, "ves");
    }

    if (lastCharacter === "y") {
      if (this.vowels.includes(penultimateCharacter)) {
        return optimizedWord + "s";
      }
      return optimizedWord.replace("y", "ies");
    }

    // Default pluralization
    return optimizedWord + "s";
  }
}

const pluralizeEnglish = new PluralizeEnglish();

export { pluralizeEnglish };
