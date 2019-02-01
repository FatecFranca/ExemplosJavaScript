const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let p = new Path2D('M20 20 v100 h100 v-100 h50 v30');
ctx.stroke(p);