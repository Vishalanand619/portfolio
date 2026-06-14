const text = ["Full Stack Developer", "MERN Developer"];
let i = 0, j = 0, current = "", del = false;

function type() {
  if (!del) current = text[i].substring(0, j++);
  else current = text[i].substring(0, j--);

  document.getElementById("typing").innerHTML = current;

  if (j === text[i].length) del = true;
  if (j === 0) {
    del = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, del ? 150 : 150);
}
type();

// Scroll Progress
window.onscroll = () => {
  let sc = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progress").style.width = sc + "%";
};
