import * as THREE from "../../libs/three/three.module.js";
import { OrbitControls } from "../../libs/three/jsm/OrbitControls.js";

class App {
  constructor() {
    const container = document.createElement("div");
    document.body.appendChild(container);

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 4);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x457ede);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    this.renderer.setAnimationLoop(this.render.bind(this));

    const geometry = new THREE.BoxBufferGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });

    this.mesh = new THREE.Mesh(geometry, material);

    this.scene.add(this.mesh);

    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    this.mesh.rotateY(0.01);
    this.renderer.render(this.scene, this.camera);
  }
}

export { App };
