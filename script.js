var speed = 500;

var style = `
body{font-family:'Karla',sans-serif;\nfont-size:1rem;\nmargin:0}
h5{font-weight:700}
section{padding:30px}
.container-fluid{background-color:#e5eef4;\npadding:20% 10%}
.row{box-shadow:0 -7px 20px 12px #0000000a}
.col-lg-12,.col-lg-6{padding:0}
#intro{background-color:#fff}
.intro-heading{color:#29b1af}
.money-back{color:#bfdf34}
.info{color:#98a5bd}
#subscribe{color:#e5eef4;\nbackground-color:#29b1af;\nheight:100%}
.dollar{display:inline}
.btn-sign-up{background-color:#bfdf34;\ncolor:white;\nbox-shadow:0 6px 10px 3px #00000026}
.btn-sign-up:hover{color:white;\nbackground-color:#abc924}
#why-us{background-color:#54c3c2;\ncolor:#c7efee}
.why-heading{color:#e5eef4}
.attribution{font-size:11px;\ntext-align:center}
.attribution a{color:#29b1af}
@media(min-width:1000px){.container-fluid{padding:7% 15%}
section{padding:50px}
}
`;
var rules = style.split('\n');
var stylebox;
$(document).ready(function () {
  stylebox = $("body style");
  alert("Styling Started\nYou can edit Speed(milliseconds per character) on js 1st line");
  setTimeout(() => alert("Styling Finished"), rules.length * speed);
  for (var i = 0; i < rules.length; i++) {
    setTimeout(addStyle, i * speed, i);
  }
})

function addStyle(i) {
  stylebox.append(rules[i]);
}