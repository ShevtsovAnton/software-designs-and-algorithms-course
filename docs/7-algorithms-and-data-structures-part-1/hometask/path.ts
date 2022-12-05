export interface iPath {
    path: string[];
    distance: number;
}

export class Path implements iPath {

    public path: string[];
    public distance: number;

    constructor(path: string[], distance: number) {
        this.path = path;
        this.distance = distance;
    }

}
