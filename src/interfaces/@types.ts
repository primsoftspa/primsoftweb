export type Service = {
    id: string,
    title: string,
    desc: string,
    img: string,
    img2: string
}


export interface IApp {
    nameServices: string[];
    services: Service[]
}