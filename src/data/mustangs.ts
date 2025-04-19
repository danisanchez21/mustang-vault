export interface Mustang {
    id?: number;
    nombre: string;
    año: number;
    hp: number;
    velocidad: number;
    imgFront: string;
    imgBack: string;
    model3DId?: string;
}

export const mustangs: Mustang[] = [
    {
        id: 1,
        nombre: "Mustang Fastback",
        año: 1967,
        hp: 271,
        velocidad: 120,
        imgFront: "/assets/fastback-front.png",
        imgBack: "/assets/fastback-back.png",
    },
    {
        id: 2,
        nombre: "Mustang Mach 1",
        año: 1969,
        hp: 335,
        velocidad: 126,
        imgFront: "/assets/fastback-front.png",
        imgBack: "/assets/fastback-back.png",
        model3DId: "fd8d342bb5ad45a999c5908fa0311b58",
    },
    {
        id: 3,
        nombre: "Mustang Boss 302",
        año: 1970,
        hp: 290,
        velocidad: 127,
        imgFront: "/assets/fastback-front.png",
        imgBack: "/assets/fastback-back.png",
    },
];
