import { useEffect, useState, useCallback } from 'react'
import { Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters'

const Confetti = ({ trigger }) => {
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (trigger) {
      // Force re-render to restart particles
      setKey(prev => prev + 1)
    }
  }, [trigger])

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
    await loadEmittersPlugin(engine)
  }, [])

  if (!trigger) return null

  return (
    <div 
      className="absolute pointer-events-none overflow-visible" 
      style={{ 
        zIndex: 1000,
        top: '50%',
        left: '50%',
        width: '300px',
        height: '300px',
        transform: 'translate(-50%, -50%)',
        margin: 0,
        padding: 0
      }}
    >
      <Particles
        key={key}
        id={`tsparticles-confetti-${key}`}
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 1
          },
          emitters: [
            {
              position: {
                x: 50,
                y: 50
              },
              rate: {
                quantity: 5,
                delay: 0.15
              },
              life: {
                duration: {
                  sync: false,
                  value: 3
                },
                count: 1
              }
            }
          ],
          particles: {
            color: {
              value: [
                "#c0e7eb",
                "#ffd8dd",
                "#ffd700",
                "#ff6b6b",
                "#4ecdc4",
                "#ffe66d"
              ]
            },
            move: {
              decay: 0.05,
              direction: "top",
              enable: true,
              gravity: {
                enable: true
              },
              outModes: {
                top: "none",
                default: "destroy"
              },
              speed: {
                min: 50,
                max: 100
              }
            },
            number: {
              value: 0
            },
            opacity: {
              value: 1
            },
            rotate: {
              value: {
                min: 0,
                max: 360
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 30
              }
            },
            tilt: {
              direction: "random",
              enable: true,
              value: {
                min: 0,
                max: 360
              },
              animation: {
                enable: true,
                speed: 30
              }
            },
            size: {
              value: 3,
              animation: {
                enable: true,
                startValue: "min",
                count: 1,
                speed: 16,
                sync: true
              }
            },
            roll: {
              darken: {
                enable: true,
                value: 25
              },
              enlighten: {
                enable: true,
                value: 25
              },
              enable: true,
              speed: {
                min: 5,
                max: 15
              }
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -7,
                max: 7
              }
            },
            shape: {
              type: [
                "circle",
                "square"
              ],
              options: {}
            }
          },
          responsive: [
            {
              maxWidth: 1024,
              options: {
                particles: {
                  move: {
                    speed: {
                      min: 33,
                      max: 66
                    }
                  }
                }
              }
            }
          ]
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </div>
  )
}

export default Confetti
