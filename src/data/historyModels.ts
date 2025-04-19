// src/data/historyModels.ts

export interface HistoryModel {
    year: number;
    model: string;
    image: string;
    description: string;
    engine: string;
    power: string;
    acceleration: string;
    quarterMile: string;
    basePrice: string;
    videoUrl?: string;
}

export const historyModels: HistoryModel[] = [
    {
        year: 1966,
        model: "GT350",
        image: "/assets/mustang-gt350.png", // pon aquí la ruta correcta de tu imagen
        description:
            "A total of 562 Shelby GT350s were built in 1965, 37 of which were lightweight or R-model cars.",
        engine: "289 CID V8",
        power: "306 HP",
        acceleration: "6.8 sec",
        quarterMile: "13.15 sec",
        basePrice: "$4,547",
        videoUrl: "",
    },
    {
        year: 1970,
        model: "Boss 302",
        image: "/assets/mustang-boss302.png", // pon aquí la ruta correcta de tu imagen
        description:
            "In 1970, driven by Parnelli Jones, the Boss 302 pulled off a win and took the SCCA Trans-Am Championship.",
        engine: "302 CID V8",
        power: "290 HP",
        acceleration: "5.6 sec",
        quarterMile: "14 sec",
        basePrice: "$3,720",
        videoUrl: "",
    },
];
