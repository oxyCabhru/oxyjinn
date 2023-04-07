import { navbar_links as base_links } from "$lib/_store"
import { latest_version, type NavbarItem} from "$lib/utils.server"

export async function load() {
    let navbar_links: NavbarItem[] = [];
    const unsub = base_links.subscribe(entries => {
        entries.filter(entry => entry.is_mod? true:false);
        navbar_links = entries;
    });
    unsub();
    navbar_links.map(async entry => {
        entry.latest_version = await latest_version(entry);
        return entry;
    });
    return { navbar_links };
}