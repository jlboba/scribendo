// ==============================
// DEPENDENCIES
// ==============================
// -- packages
import React from 'react'
import Particles from 'react-particles-js'

// ==============================
// PARTICLES COMPONENT
// ==============================
function ParticlesContainer() {
  // ==============================
  // JSX RETURN
  // ==============================
  return (
    <Particles
      params={
        {
          particles: {
            number: {
              value: 260,
              density: { enable: true, value_area: 631.3181133058181 }
            },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: 2,
              random: true,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: { enable: true, mode: "push" },
              resize: true
            }
          }
        }
      }
    />
  )
}

// ==============================
// EXPORT
// ==============================
export default ParticlesContainer
