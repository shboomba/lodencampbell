import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Scene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Scene & camera
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.z = 4;

    // Solid mesh
    const geo   = new THREE.IcosahedronGeometry(1.2, 0);
    const mat   = new THREE.MeshStandardMaterial({
      color:       0x1a2820,
      roughness:   0.4,
      metalness:   0.6,
      transparent: true,
      opacity:     0.85,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Wireframe overlay
    const wireMat  = new THREE.MeshBasicMaterial({ color: 0x3dd68c, wireframe: true, transparent: true, opacity: 0.6 });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    wireMesh.scale.setScalar(1.01);
    scene.add(wireMesh);

    // Lights
    const ambient = new THREE.AmbientLight(0x3dd68c, 0.4);
    scene.add(ambient);
    const point = new THREE.PointLight(0x3dd68c, 2, 10);
    point.position.set(3, 3, 3);
    scene.add(point);
    const point2 = new THREE.PointLight(0xff6b35, 1, 10);
    point2.position.set(-3, -2, -2);
    scene.add(point2);

    // Drag rotation state
    let isDragging  = false;
    let prevX = 0, prevY = 0;
    let velX  = 0, velY  = 0;
    let rotX  = 0, rotY  = 0;

    const onDown = (e) => {
      isDragging = true;
      prevX = e.clientX ?? e.touches?.[0]?.clientX;
      prevY = e.clientY ?? e.touches?.[0]?.clientY;
      velX = velY = 0;
    };
    const onMove = (e) => {
      if (!isDragging) return;
      const cx = e.clientX ?? e.touches?.[0]?.clientX;
      const cy = e.clientY ?? e.touches?.[0]?.clientY;
      velX = (cx - prevX) * 0.01;
      velY = (cy - prevY) * 0.01;
      rotY += velX;
      rotX += velY;
      prevX = cx;
      prevY = cy;
    };
    const onUp = () => { isDragging = false; };

    // Click pulse
    let pulseT = 0;
    const onClick = () => { pulseT = 1; };

    el.addEventListener("mousedown",  onDown);
    el.addEventListener("mousemove",  onMove);
    el.addEventListener("mouseup",    onUp);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchmove",  onMove, { passive: true });
    el.addEventListener("touchend",   onUp);
    el.addEventListener("click",      onClick);

    // Animation
    let frame;
    let t = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      t += 0.016;

      if (!isDragging) {
        velX *= 0.92;
        velY *= 0.92;
        rotY += velX + 0.003;
        rotX += velY;
      }

      // Floating bob
      mesh.position.y    = Math.sin(t * 0.8) * 0.08;
      wireMesh.position.y = mesh.position.y;

      // Click pulse scale
      if (pulseT > 0) {
        const s = 1 + Math.sin(pulseT * Math.PI) * 0.15;
        mesh.scale.setScalar(s);
        wireMesh.scale.setScalar(s * 1.01);
        pulseT -= 0.05;
        if (pulseT < 0) {
          pulseT = 0;
          mesh.scale.setScalar(1);
          wireMesh.scale.setScalar(1.01);
        }
      }

      mesh.rotation.x    = rotX;
      mesh.rotation.y    = rotY;
      wireMesh.rotation.x = rotX;
      wireMesh.rotation.y = rotY;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("mousedown",  onDown);
      el.removeEventListener("mousemove",  onMove);
      el.removeEventListener("mouseup",    onUp);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchmove",  onMove);
      el.removeEventListener("touchend",   onUp);
      el.removeEventListener("click",      onClick);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width:   "100%",
        height:  "100%",
        cursor:  "grab",
        flexShrink: 0,
      }}
    />
  );
}
