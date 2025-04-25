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
        year: 1964,
        model: "Mustang 1964½",
        image: "/assets/mustang-1964.png",
        description:
            "La primera generación debutó en abril de 1964. El Mustang 1964½ marcó el inicio de una leyenda automovilística.",
        engine: "260 CID V8",
        power: "164 HP",
        acceleration: "8.3 sec",
        quarterMile: "16.9 sec",
        basePrice: "$2,368",
        videoUrl: "",
    },
    {
        year: 1965,
        model: "Fastback 2+2",
        image: "/assets/mustang-1965-fastback.png",
        description:
            "Introducido como una opción más deportiva, el Fastback 2+2 aportó una silueta icónica al Mustang.",
        engine: "289 CID V8",
        power: "271 HP",
        acceleration: "7.5 sec",
        quarterMile: "15.3 sec",
        basePrice: "$2,663",
        videoUrl: "",
    },
    {
        year: 1966,
        model: "GT350",
        image: "/assets/mustang-gt350.png",
        description:
            "Desarrollado por Carroll Shelby, el GT350 fue un Mustang de alto rendimiento orientado a las pistas.",
        engine: "289 CID V8",
        power: "306 HP",
        acceleration: "6.8 sec",
        quarterMile: "13.15 sec",
        basePrice: "$4,547",
        videoUrl: "",
    },
    {
        year: 1967,
        model: "GT500",
        image: "/assets/mustang-gt500-1967.png",
        description:
            "El GT500 introdujo el potente motor 428 Police Interceptor, dando paso al dominio Shelby.",
        engine: "428 CID V8",
        power: "355 HP",
        acceleration: "6.5 sec",
        quarterMile: "14 sec",
        basePrice: "$4,195",
        videoUrl: "",
    },
    {
        year: 1968,
        model: "California Special (GT/CS)",
        image: "/assets/mustang-gtcs-1968.png",
        description:
            "Edición limitada para el mercado del oeste de EE.UU., con toques visuales únicos y estilo Shelby.",
        engine: "302 CID V8",
        power: "250 HP",
        acceleration: "8.2 sec",
        quarterMile: "16.1 sec",
        basePrice: "$2,837",
        videoUrl: "",
    },
    {
        year: 1969,
        model: "Mach 1",
        image: "/assets/mustang-mach1-1969.png",
        description:
            "Debut del Mach 1 con un diseño agresivo y el potente motor Cobra Jet como opción estrella.",
        engine: "428 Cobra Jet V8",
        power: "335 HP",
        acceleration: "5.5 sec",
        quarterMile: "13.9 sec",
        basePrice: "$3,122",
        videoUrl: "",
    },
    {
        year: 1969,
        model: "Boss 302",
        image: "/assets/mustang-boss302-1969.png",
        description:
            "Diseñado para competir en la Trans-Am, combinando agilidad con un V8 de altas revoluciones.",
        engine: "302 CID V8",
        power: "290 HP",
        acceleration: "6.0 sec",
        quarterMile: "14.6 sec",
        basePrice: "$3,720",
        videoUrl: "",
    },
    {
        year: 1969,
        model: "Boss 429",
        image: "/assets/mustang-boss429-1969.png",
        description:
            "Un muscle car legendario, producido para homologar el motor 429 semi-Hemi para NASCAR.",
        engine: "429 CID V8",
        power: "375 HP",
        acceleration: "5.3 sec",
        quarterMile: "13.6 sec",
        basePrice: "$4,798",
        videoUrl: "",
    },
    {
        year: 1970,
        model: "Boss 302",
        image: "/assets/mustang-boss302.png",
        description:
            "En 1970, el Boss 302 triunfó en la Trans-Am con Parnelli Jones al volante.",
        engine: "302 CID V8",
        power: "290 HP",
        acceleration: "5.6 sec",
        quarterMile: "14 sec",
        basePrice: "$3,720",
        videoUrl: "",
    },
    {
        year: 1971,
        model: "Mach 1",
        image: "/assets/mustang-mach1-1971.png",
        description:
            "La carrocería creció para 1971. El Mach 1 ofrecía motores potentes como el 429 Super Cobra Jet.",
        engine: "429 CID V8",
        power: "375 HP",
        acceleration: "6.4 sec",
        quarterMile: "14 sec",
        basePrice: "$3,453",
        videoUrl: "",
    },
    {
        year: 1971,
        model: "Boss 351",
        image: "/assets/mustang-boss351-1971.png",
        description:
            "Versión exclusiva de 1971 con el nuevo motor 351 Cleveland de alto rendimiento.",
        engine: "351 CID V8",
        power: "330 HP",
        acceleration: "5.8 sec",
        quarterMile: "13.8 sec",
        basePrice: "$4,124",
        videoUrl: "",
    },
    {
        year: 1973,
        model: "Mach 1",
        image: "/assets/mustang-mach1-1973.png",
        description:
            "Último año de la primera generación, con cambios estéticos y una línea más lujosa.",
        engine: "351 Cleveland V8",
        power: "266 HP",
        acceleration: "7.3 sec",
        quarterMile: "15.2 sec",
        basePrice: "$3,088",
        videoUrl: "",
    },
    {
        year: 1974,
        model: "Mustang II",
        image: "/assets/mustang-ii-1974.png",
        description:
            "Revisión completa del Mustang, más pequeño y eficiente, adaptado a la crisis del petróleo.",
        engine: "2.8L V6",
        power: "105 HP",
        acceleration: "13.5 sec",
        quarterMile: "18.5 sec",
        basePrice: "$3,255",
        videoUrl: "",
    },
    {
        year: 1975,
        model: "Mustang II Ghia",
        image: "/assets/mustang-ii-ghia-1975.png",
        description:
            "Versión de lujo con techo vinílico y detalles europeos, dirigida a un mercado más refinado.",
        engine: "302 CID V8",
        power: "140 HP",
        acceleration: "11.5 sec",
        quarterMile: "17.5 sec",
        basePrice: "$3,655",
        videoUrl: "",
    },
    {
        year: 1976,
        model: "Mustang II Cobra II",
        image: "/assets/mustang-ii-cobra-1976.png",
        description:
            "Diseño inspirado en los muscle cars de los 60, con gráficos llamativos y mejoras deportivas.",
        engine: "302 CID V8",
        power: "140 HP",
        acceleration: "10.5 sec",
        quarterMile: "17 sec",
        basePrice: "$3,884",
        videoUrl: "",
    },
    {
        year: 1977,
        model: "Mustang II Mach 1",
        image: "/assets/mustang-ii-mach1-1977.png",
        description:
            "Versión deportiva del Mustang II con suspensión reforzada y estilo agresivo.",
        engine: "302 CID V8",
        power: "134 HP",
        acceleration: "10.9 sec",
        quarterMile: "17.2 sec",
        basePrice: "$4,096",
        videoUrl: "",
    },
    {
        year: 1978,
        model: "Mustang II King Cobra",
        image: "/assets/mustang-ii-kingcobra-1978.png",
        description:
            "Edición especial de fin de generación con capó negro mate, gráficos de serpiente y alerón trasero.",
        engine: "302 CID V8",
        power: "139 HP",
        acceleration: "10.2 sec",
        quarterMile: "17 sec",
        basePrice: "$4,877",
        videoUrl: "",
    },
];