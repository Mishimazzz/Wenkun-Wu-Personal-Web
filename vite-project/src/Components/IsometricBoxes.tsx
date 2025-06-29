import './IsometricBoxes.css';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

const smileF = `M29.062,9.086c0-4.797,3.904-8.701,8.703-8.701c4.797,0,8.701,3.903,8.701,8.701c0,1.381-1.119,2.5-2.5,2.5
s-2.5-1.119-2.5-2.5c0-2.041-1.66-3.701-3.701-3.701c-2.042,0-3.703,1.66-3.703,3.701c0,1.381-1.119,2.5-2.5,2.5
S29.062,10.466,29.062,9.086z M1.339,9.059c0-4.797,3.904-8.701,8.703-8.701c4.797,0,8.701,3.903,8.701,8.701
c0,1.381-1.119,2.5-2.5,2.5c-1.381,0-2.5-1.119-2.5-2.5c0-2.041-1.66-3.701-3.701-3.701c-2.042,0-3.703,1.66-3.703,3.701
c0,1.381-1.119,2.5-2.5,2.5S1.339,10.44,1.339,9.059z M0.23,31.41c-0.636-1.53,0.089-3.286,1.62-3.921
c0.376-0.156,0.766-0.23,1.15-0.23c1.176,0,2.292,0.696,2.771,1.851c2.777,6.685,9.655,11.004,17.523,11.004
c7.69,0,14.528-4.321,17.421-11.011c0.658-1.521,2.424-2.223,3.943-1.563c1.521,0.658,2.221,2.423,1.563,3.944
C42.38,40.37,33.38,46.112,23.294,46.112C12.993,46.113,3.94,40.342,0.23,31.41z`;

const sadF = `M28.062,9.322c0-4.797,3.904-8.701,8.703-8.701c4.797,0,8.701,3.903,8.701,8.701c0,1.381-1.119,2.5-2.5,2.5
s-2.5-1.119-2.5-2.5c0-2.041-1.66-3.701-3.701-3.701c-2.042,0-3.703,1.66-3.703,3.701c0,1.381-1.119,2.5-2.5,2.5
S28.062,10.702,28.062,9.322z M0.339,9.295c0-4.797,3.904-8.701,8.703-8.701c4.797,0,8.701,3.903,8.701,8.701
c0,1.381-1.119,2.5-2.5,2.5c-1.381,0-2.5-1.119-2.5-2.5c0-2.041-1.66-3.701-3.701-3.701c-2.042,0-3.703,1.66-3.703,3.701
c0,1.381-1.119,2.5-2.5,2.5S0.339,10.676,0.339,9.295z M0.23,41.726c3.71-8.933,12.764-14.703,23.064-14.703
c10.084,0,19.084,5.742,22.927,14.63c0.658,1.521-0.041,3.286-1.563,3.943c-1.52,0.66-3.284-0.042-3.942-1.562
c-2.895-6.689-9.731-11.012-17.421-11.012c-7.868,0-14.747,4.319-17.523,11.004C5.292,45.18,4.175,45.875,3,45.875
c-0.384,0-0.773-0.073-1.15-0.229C0.319,45.012-0.406,43.256,0.23,41.726z`;

export default function IsometricBoxes() {
  const circleCount = Array.from({ length: 9 }, (_, i) => i);

  const handleEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      background:
        'radial-gradient(circle at 65% 15%, #ffffff 1px, #ffbc00 3%, #8b0900 60%, #ffbc00  100%)',
      duration: 0.3,
      ease: 'power1.out',
    });

    const svg = e.currentTarget.querySelector('#sad');
    if (!svg) return;

    gsap.to(svg, {
      duration: 0.3,
      delay: 0.1,
      morphSVG: smileF,
      ease: 'sine.inOut',
    });
  };

  const handleLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      background:
        'radial-gradient(circle at 65% 15%, #e6e6e6 1px, #dadada 3%, #e4e4e4 60%, #dadada 100%)',
      duration: 0.3,
      ease: 'power1.inOut',
    });

    gsap.to(e.currentTarget, {
      boxShadow:
        'inset -25px -15px 40px rgba(0,0,0,.3), -15px 15px 30px #cecece, 15px -15px 30px #ffffff',
      duration: 0.6,
      ease: 'power1.out',
    });

    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.15)',
    });

    const svg = e.currentTarget.querySelector('#sad');
    if (!svg) return;

    gsap.to(svg, {
      duration: 0.4,
      delay: 0.1,
      morphSVG: sadF,
      ease: 'sine.inOut',
    });
  };

  const handleMove = (
    e: React.PointerEvent<HTMLDivElement>,
    el: HTMLDivElement
  ) => {
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const xAngle = ((mouseX - centerX) / window.innerWidth) * 400;
    const yAngle = ((centerY - mouseY) / window.innerHeight) * 400;

    gsap.to(el, {
      x: xAngle,
      y: -yAngle,
      z: 10,
      rotateX: xAngle,
      rotateY: yAngle,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  return (
    <section className="iso-grid">
      {circleCount.map((_, i) => (
        <div
          key={i}
          className="iso-circle"
          onPointerEnter={handleEnter}
          onPointerLeave={handleLeave}
          onPointerMove={(e) => handleMove(e, e.currentTarget)}
        >
          <svg id="smile" width="40%" height="40%" fill="#000">
            <path id="sad" d={sadF} />
          </svg>
        </div>
      ))}
    </section>
  );
}