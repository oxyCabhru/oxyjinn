import { readable, type Readable } from "svelte/store";
import type { NavbarItem } from "./utils.server";
export const navbar_links: Readable<NavbarItem[]> = readable([
    {
        name: "chiralium",
        active: true,
        main_link: "#",
        source: "https://github.com/oxyCabhru/chiralium/",
        is_mod: true
    },
    {
        name: "embers rekindled guide",
        active: false,
        main_link: "https://github.com/oxyCabhru/embersGuide/blob/master/README.md",
    },
])
