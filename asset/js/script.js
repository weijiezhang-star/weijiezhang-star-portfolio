function darkmode() {
  document.body.classList.toggle("dark-mode");
}
let scene, camera, renderer, stars, starGeo;
function init() {
  (scene = new THREE.Scene()),
    ((camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1e3
    )).position.z = 1),
    (camera.rotation.x = Math.PI / 2),
    (renderer = new THREE.WebGLRenderer()).setSize(
      window.innerWidth,
      window.innerHeight
    ),
    document.body.appendChild(renderer.domElement),
    (starGeo = new THREE.Geometry());
  for (let e = 0; e < 6e3; e++)
    (star = new THREE.Vector3(
      600 * Math.random() - 300,
      600 * Math.random() - 300,
      600 * Math.random() - 300
    )),
      (star.velocity = 0),
      (star.acceleration = 0.02),
      starGeo.vertices.push(star);
  let e = new THREE.TextureLoader().load("img/star.png"),
    n = new THREE.PointsMaterial({ color: 11184810, size: 0.65, map: e });
  (stars = new THREE.Points(starGeo, n)),
    scene.add(stars),
    window.addEventListener("resize", onWindowResize, !1),
    animate();
}
function onWindowResize() {
  (camera.aspect = window.innerWidth / window.innerHeight),
    camera.updateProjectionMatrix(),
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function animate() {
  starGeo.vertices.forEach((e) => {
    (e.velocity += e.acceleration),
      (e.y -= e.velocity),
      e.y < -200 && ((e.y = 200), (e.velocity = 0));
  }),
    (starGeo.verticesNeedUpdate = !0),
    (stars.rotation.y += 0.002),
    renderer.render(scene, camera),
    requestAnimationFrame(animate);
}
new WOW().init(),
  init(),
  setTimeout(function () {
    $("#preloader").slideToggle(1200);
  }, 3800);
var typed = new Typed(".typed", {
  strings: [
    " ",
    // '"If it is important to you, <br> You will find a way.<br> If not, you’ll find an excuse! " <br> — Ryan Blair  ',
    "Welcome!",
    "I am WeiJie Zhang 💯",
    "I'm a passionate Web Developer ✨",
    "I love to do Frontend Development🐱‍🏍",
    "Feel free to leave a message !⚡",
    ": )",
  ],
  startDelay: 4500,
  backSpeed: 10,
  typeSpeed: 40,
  loop: true,
});
function RemoveClass() {
  $(".fidget").removeClass("rotate");
}
$(".limb, .middle").hover(function () {
  $(".fidget").addClass("rotate"), setTimeout(RemoveClass, 8e3);
}),
  $(document).on({
    contextmenu: function (e) {
      console.log("ctx menu button:", e.which), e.preventDefault();
    },
    mousedown: function (e) {
      console.log("normal mouse down:", e.which);
    },
    mouseup: function (e) {
      console.log("normal mouse up:", e.which);
    },
  }),
  console.clear();
AOS.init();

$(function () {
  $("#fullpage").fullpage({
    sectionSelector: ".page",
    scrollOverflow: true,
  });
});
