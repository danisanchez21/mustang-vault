export interface Mustang {
    id: number;
    nombre: string;
    año: number;
    hp: number;
    velocidad: number;
    imgFront: string;
    imgBack: string;
}

export const mustangs: Mustang[] = [
    {
        id: 1,
        nombre: 'Mustang Fastback',
        año: 1967,
        hp: 271,
        velocidad: 120,
        imgFront: '/assets/fastback-front.jpg',
        imgBack: '/assets/fastback-back.jpg',
    },
    {
        id: 2,
        nombre: 'Mustang Mach 1',
        año: 1969,
        hp: 335,
        velocidad: 126,
        imgFront: '/assets/mach1-front.jpg',
        imgBack: '/assets/mach1-back.jpg',
    },
    {
        id: 3,
        nombre: 'Mustang Boss 302',
        año: 1970,
        hp: 290,
        velocidad: 127,
        imgFront: '/assets/boss302-front.jpg',
        imgBack: '/assets/boss302-back.jpg',
    }
];
