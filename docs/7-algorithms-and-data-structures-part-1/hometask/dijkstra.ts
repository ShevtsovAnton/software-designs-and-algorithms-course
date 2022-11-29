import { Vertex } from "./vertex";
import { iPath, Path } from "./path";
import { WeightedGraph } from "./weighted-graph";

export interface iDijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): iPath;
    findAllShortestPaths(vertex: T): iPath[];
}

export class Dijkstra implements iDijkstra<Vertex> {

    public graph: WeightedGraph

    constructor(graph: WeightedGraph) {
        this.graph = graph;
    }

    public findShortestPath(vertex1: Vertex, vertex2: Vertex): iPath {

        const start = vertex1.point;
        const finish = vertex2.point;
        let distances = 0;
        const vertexes: string[] = [];
        const depthFirstSearch = (graph: any, start: any) => {
            if ((graph[finish].length === 0) || (graph[finish].length === 0)) return distances = Infinity;
            vertexes.push(start.toString());
            if (start === finish) return 0;
            if (graph[start].filter((val: string) => Object.keys(val).toString() === finish.toString()).length === 0) {
                const pathInfo = graph[start].reduce((acc: string[], val: string) => acc > Object['values'](val) ? acc : Object['values'](val));
                const point = Object.keys(pathInfo);
                const distance = Object['values'](pathInfo);
                distances += Number(distance);
                depthFirstSearch(graph, point);
            } else {
                const pathInfo = graph[start].filter((val: string) => Object.keys(val).toString() === finish.toString())[0];
                const point = Object.keys(pathInfo);
                const distance = Object['values'](pathInfo);
                distances += Number(distance);
                vertexes.push(point.toString());
                return distances;
            }
        }

        depthFirstSearch(this.graph.graph, start);
        return new Path(vertexes, distances);

    }


    public findAllShortestPaths(vertex: Vertex): iPath[] {

        const allPaths = (start: Vertex) => (finish: Vertex) => {
            return this.findShortestPath(start, finish);
        }
        const fromPoint = allPaths(vertex);

        return Object.keys(this.graph.graph).map(point => fromPoint(new Vertex(point)));
    }
}
