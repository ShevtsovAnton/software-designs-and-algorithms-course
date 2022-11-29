import { Vertex } from './vertex'

export interface iWeightedGraph<T> {
    addVertex(key: string): void;
    addEdge(vertex1: T, vertex2: T, weight: number): void;
}

export class WeightedGraph implements iWeightedGraph<Vertex> {

    public graph: any;

    constructor() {
        this.graph = {};
    }

    public addVertex(key: string): void {
        this.graph[key] = [];
    }

    public addEdge(vertex1: Vertex, vertex2: Vertex, weight: number): void {
        const from = vertex1.point;
        const to = vertex2.point;
        this.graph[from].push({ [to]: weight });
        this.graph[to].push({ [from]: weight });
    }
}   
