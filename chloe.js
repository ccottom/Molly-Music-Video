// create a new hydra-synth instance
const canvas=document.getElementById("myCanvas")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
new window.Hydra({
  canvas: canvas,
  detectAudio: false
})

osc().out()
s0.initVideo("MollyMP4.mp4")
src(s0)
.rotate(0,0)
.repeat()
.invert(0,0)
//.saturateHue()
.scale(1)
//.mult(osc(0,-0.1,0.0))
.color(1,0.6,-1)
.out()
s0.src.setAttribute('muted', false)
