const rainbow =
['gray','orange','cream','green','blue','rebeccapurple','violet', 'gold'];
setInterval(
function change() {
document.body.style.background =
 rainbow[Math.floor(7*Math.random())];
},2000);


