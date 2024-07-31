import * as THREE from "three";
import { AssetManager } from "./asset-manager";
import { Level, FloorNode } from "./level-generator";

// Handles drawing/disposing of levels
export class LevelVisualiser {
  private floorMaterial: THREE.MeshBasicMaterial;

  private levelObjects: THREE.Object3D[] = [];

  constructor(private assetManager: AssetManager, private scene: THREE.Scene) {
    this.floorMaterial = new THREE.MeshBasicMaterial({
      map: assetManager.textures.get("floor-black"),
    });
  }

  displayLevel(level: Level) {
    this.disposeLevel();

    // Floor
    level.floor.forEach((node) => this.createFloor(node));
  }

  disposeLevel() {
    this.levelObjects.forEach((object) => this.scene.remove(object));
  }

  private createFloor(node: FloorNode) {
    const cube = new THREE.Mesh(new THREE.BoxGeometry(), this.floorMaterial);

    cube.position.set(node.x, -0.5, node.z);

    this.scene.add(cube);

    this.levelObjects.push(cube);
  }
}
