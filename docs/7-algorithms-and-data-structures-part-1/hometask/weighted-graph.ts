import { Vertex } from './vertex'

export interface iWeightedGraph<T> {
    addVertex(vertex: T): void;
    addEdge(vertex1: T, vertex2: T, weight: number): void;
}
export interface iVertexEdge {
    to: Vertex;
    weight: number;
}
export class WeightedGraph implements iWeightedGraph<Vertex> {

    private vertexes: Map<string, iVertexEdge[]> = new Map();

    public addVertex(vertex: Vertex) {
        this.vertexes.set(vertex.point, []);
    }

    public getVertexes(): Map<string, iVertexEdge[]> {
        return this.vertexes;
    }

    public getVertexesPoints(): string[] {
        return Array.from(this.getVertexes().entries()).map((e) => e[0]);
    }

    public addEdge(vertex1: Vertex, vertex2: Vertex, weight: number) {
        this.getEdges(vertex1.point)?.push({ to: vertex2, weight });
        this.getEdges(vertex2.point)?.push({ to: vertex1, weight });
    }

   public getEdges(vertexName: string): iVertexEdge[] | null {
        return this.vertexes.get(vertexName) || null;
    }
}   
