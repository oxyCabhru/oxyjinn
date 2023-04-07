const compareSemanticVersions = (a: string, b: string) => {
    //thank you: https://medium.com/geekculture/sorting-an-array-of-semantic-versions-in-typescript-55d65d411df2
    //..and chatgpt
    const aParts = a.split('.');
    const bParts = b.split('.');
    const len = Math.max(aParts.length, bParts.length);
    for (let i = 0; i < len; i++) {
      const aPart = +aParts[i] || 0;
      const bPart = +bParts[i] || 0;
      if (aPart !== bPart) {
        return aPart > bPart ? 1 : -1;
      }
    }
    return 0;
  };

export const latest_version: ((mc_mod: NavbarItem) => Promise<string>) = async (mc_mod: NavbarItem) => {
    if (!mc_mod.is_mod) return '';
    const modrinth_res = await fetch("https://api.modrinth.com/v2/project/"+mc_mod.name);
    if (modrinth_res.status == 404) return '';
    const game_versions = (await modrinth_res.json()).game_versions;
    game_versions.sort(compareSemanticVersions).reverse();
    return `[${game_versions[0]}]`;
}

export interface NavbarItem {
    name: string;
    active: boolean;
    main_link: string;
    source?: string;
    is_mod?: true;
    latest_version?: string; //if is_mod is set, latest_version gets set serverside on page render via +page.server.ts
}