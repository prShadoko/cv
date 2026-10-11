import { abilities, experiences, languages, hobbies, contact, readme } from './data';

interface GroupedAbilities {
  category: string;
  abilities: Array<{
    ability: string;
    level: number;
  }>;
}

export function load() {
	return {
		experiences,
		abilities: abilities.reduce((acc, item) => {
      const category = acc.find((a) => a.category === item.category);
      if (!category) {
        return [
          ...acc,
          {
            category: item.category,
            abilities: [{ ability: item.ability, level: item.level }],
          },
        ];
      }

      category.abilities.push({ ability: item.ability, level: item.level });
      return acc;
    }, [] as GroupedAbilities[]),
    languages,
    hobbies,
    contact,
    readme,
	};
}
