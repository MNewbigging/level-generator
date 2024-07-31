import * as THREE from "three";

export interface FloorNode {
  // grid position
  x: number;
  z: number;
  // type - enum
  // doorway: boolean
}

interface Room {
  nodes: [][];
}

export interface Level {
  floor: FloorNode[];
}

// Creates a random level blueprint for the level visualiser
export class LevelGenerator {
  private minRoomSize = 3;
  private maxRoomSize = 10;

  createLevel(): Level {
    const room = this.createRoom();

    // Flatten the nodes
    const floor: FloorNode[] = [];
    room.forEach((row) => row.forEach((col) => floor.push(col)));

    // Test - manually place some floor pieces
    return {
      floor,
    };
  }

  private createRoom() {
    // A room is a grid of squares
    const rows = THREE.MathUtils.randInt(this.minRoomSize, this.maxRoomSize);
    const columns = THREE.MathUtils.randInt(this.minRoomSize, this.maxRoomSize);

    const grid: FloorNode[][] = [];

    for (let r = 0; r < rows; r++) {
      grid[r] = [];

      for (let c = 0; c < columns; c++) {
        const node: FloorNode = {
          x: c,
          z: r,
        };

        grid[r][c] = node;
      }
    }

    return grid;
  }
}
