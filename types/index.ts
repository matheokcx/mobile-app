export type Item = {
    name: string;
    price: number;
    description: string;
    image?: string;
};

export type Sexe = "Male" | "Female";

export type Profile = {
    email: string;
    fullName: string;
    sexe: Sexe;
    image?: string;
};
