import { Vertex } from "./vertex";
import { iPath, Path } from "./path";
import { WeightedGraph, iVertexEdge } from "./weighted-graph";

export interface iDijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): iPath;
    findAllShortestPaths(vertex: T): Record<string, iPath>;
}
export class Dijkstra implements iDijkstra<string> {
    public graph: WeightedGraph;

    constructor(graph: WeightedGraph) {
        this.graph = graph;
    }

    private setDefaultDistances(vertexes: string[], currentVertex: string): Record<string, number> {
        return vertexes.reduce((acc: Record<string, number>, cur) => {
            acc[cur] = cur === currentVertex ? 0 : Infinity;
            return acc;
        }, {});
    }

    private getPath(parents: Record<string, string | null>, startVertex: string, endVertex: string): string[] {
        let currentVertex = endVertex;
        let path = [endVertex];
        if (startVertex === endVertex) {
            return [startVertex];
        }

        if (!parents[currentVertex]) {
            return [];
        }

        while (currentVertex !== startVertex) {
            if (!parents[currentVertex]) {
                break;
            }
            currentVertex = parents[currentVertex]!;
            path.push(currentVertex);
        }
        return path.reverse();
    }

    public findShortestPath(startVertex: string, endVertex: string): iPath {
        const vertexesNames: string[] = this.graph.getVertexesPoints();

        let currentVertex: string = startVertex;
        let currentDistance: number = 0;
        let visited: string[] = [];

        let parents: Record<string, string | null> = { [endVertex]: null };

        let distances: Record<string, number> = this.setDefaultDistances(vertexesNames, currentVertex);
        while (visited.length < vertexesNames.length) {
            let currentVertexEdges: iVertexEdge[] = this.graph.getEdges(currentVertex)!;
            let distancesFromCurrentVertex: Record<string, number> = currentVertexEdges.reduce(
                (acc: Record<string, number>, edge: iVertexEdge) => {
                    if (currentDistance + edge.weight < distances[edge.to.point]) {
                        parents[edge.to.point] = currentVertex;
                        acc[edge.to.point] = currentDistance + edge.weight;

                    }

                    return acc;
                },
                {}
            );

            Object.assign(distances, distancesFromCurrentVertex);

            visited.push(currentVertex);

            if (visited.length !== vertexesNames.length) {
                const nextMinVertex = Object.keys(distances)
                    .filter((key) => !visited.includes(key))
                    .reduce((key, v) => (distances[v] < distances[key] ? v : key));
                currentVertex = nextMinVertex;
                if (distances[currentVertex] !== Infinity) {
                    currentDistance = distances[currentVertex]
                }
            }
        }


        return {
            path: this.getPath(parents, startVertex, endVertex),
            distance: distances[endVertex],
        };
    }

    public findAllShortestPaths(vertex: string): Record<string, Path> {
        let vertexes: Map<string, iVertexEdge[]> = this.graph.getVertexes();

        return Array.from(vertexes.keys()).reduce((acc: Record<string, Path>, currentVertex) => {
            if (currentVertex !== vertex) {
                acc[currentVertex] = this.findShortestPath(vertex, currentVertex);
            }
            return acc;
        }, {});
    }

}
