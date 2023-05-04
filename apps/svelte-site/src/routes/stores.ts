import { writable } from "svelte/store";

export interface KittenType {
    src: string;
    name: string;
    supercute: boolean;
}

export const kittensStore = writable<KittenType[]>([]);
export const kittenSelected = writable<KittenType | undefined>(undefined);