baguetteBox.run('.gallery');

document.getElementById("search").addEventListener("keyup", searchFunction);

function searchFunction() {
  var input, filter, div, a, i, caption;
  input = document.getElementById("search");
  filter = input.value.toLowerCase();
  div = document.getElementsByTagName("gallery");
  caption = document.getElementsByTagName('a');

for (i=0; i<=11; i++) {
    a = caption[i].getAttribute('data-caption');
    if (a.toLowerCase().indexOf(filter) > -1) {
        document.getElementsByTagName('img')[i].style.display = "";
    } else {
        document.getElementsByTagName('img')[i].style.display = "none";
        }
    }
}