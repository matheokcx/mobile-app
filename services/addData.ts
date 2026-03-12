import {Item} from "@/types";

export function addItem(itemsList: Item[], newElement: Item): Item[] {
    return [...itemsList, newElement];
}
