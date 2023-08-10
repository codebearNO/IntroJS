function noStyle() {
	document.getElementById("cards").classList = [];
}

function vertLayout() {
	noStyle();
	document.getElementById("cards").classList.add("vert");
}

function horLayout() {
	noStyle();
	document.getElementById("cards").classList.add("hor");
}

function gridLayout() {
	noStyle();
	document.getElementById("cards").classList.add("grid");
}

function showTools() {
	clearAll();
	document.getElementById("tools").innerHTML = /* HTML */ `
		<div class="innercard">
			De to viktigste verktøyene vi skal bruke er disse:
			<ul>
				<li>
					Koderedigeringsprogrammet
					<a href="https://code.visualstudio.com/">VSCode</a><br />
					Vi skal bruke noen <i>extensions</i>:
					<ul>
						<li>Javascript booster</li>
						<li>es6-string.html</li>
						<li>live-server</li>
						<li>live-share</li>
					</ul>
				</li>

				<li>
					Nettleseren
					<a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
				</li>
			</ul>
		</div>
	`;
}

function showHtml() {
	clearAll();
	document.getElementById("html").innerHTML = /*HTML*/ `
  <div class="innercard">

				Vi bruker HTML til å definere et dokument.
				<ul>
					<li>Tagger for grunnleggende oppsett av en HTML-fil</li>
					<li>Tagger for grunnleggende formatering av tekst</li>
					<li><tt>&lt;div&gt;</tt></li>
					<li><tt>&lt;input type="text"&gt;</tt></li>
					<li><tt>&lt;button&gt;</tt></li>
					<li>
						<a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
					</li>
					<li>
						<a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
					</li>
				</ul>
			</div>
  `;
}

function showCss() {
	clearAll();
	document.getElementById("css").innerHTML = /*HTML*/ `
  <div class="innercard">

				Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter,
				utseende og lignende.
				<ul>
					<li><tt>background-color</tt></li>
					<li><tt>color</tt></li>
					<li><tt>padding</tt></li>
					<li><tt>margin</tt></li>
					<li><tt>border</tt></li>
					<li><tt>text-align</tt></li>
					<li><tt>font-size</tt></li>

					<li>
						<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a>
					</li>
					<li>
						<a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a>
					</li>
					<li>
						<a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
					</li>
					<li>
						<a href="https://www.w3schools.com/cssref/default.asp" target="_new">w3schools CSS Reference</a>
					</li>
				</ul>
			</div>
  `;
}

function showJs() {
	clearAll();
	document.getElementById("js").innerHTML = /*HTML*/ `
  <div class="innercard">

				Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal
				lære grunnleggende programmering ved å manipulere HTML- og CSS-kode på
				en nettside ved hjelp av JavaScript
				<ul>
					<li>
						Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi
						heller å følge kurset vårt på moodle
					</li>
					<li>
						<a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript Reference
						</a>
					</li>
				</ul>
			</div>
  `;
}

function showHkb() {
	clearAll();
	document.getElementById("hkb").innerHTML = /*HTML*/ `
    <div class="container">
		<button onclick="headLeft()">◀</button>
			<img src="${headContainer}"/>
		<button onclick="headRight()">▶</button>
		</div>

    <div class="container">
		<button onclick="bodyLeft()">◀</button>
			<img src="${bodyContainer}"/>
		<button onclick="bodyRight()">▶</button>
		</div>

    <div class="container">
		<button onclick="legsLeft()">◀</button>
			<img src="${legsContainer}"/>
		<button onclick="legsRight()">▶</button>
		</div>
    `;
}

function clearAll() {
	document.getElementById("tools").innerHTML = "";
	document.getElementById("html").innerHTML = "";
	document.getElementById("css").innerHTML = "";
	document.getElementById("js").innerHTML = "";
	document.getElementById("hkb").innerHTML = "";
	document.getElementById("counter").innerHTML = "";
}

const arrHeads = [
	"img/head1.png",
	"img/head2.png",
	"img/head3.png",
	"img/head4.png",
	"img/head5.png",
];

const arrBodies = [
	"img/body1.png",
	"img/body2.png",
	"img/body3.png",
	"img/body4.png",
	"img/body5.png",
];

const arrLegs = [
	"img/legs1.png",
	"img/legs2.png",
	"img/legs3.png",
	"img/legs4.png",
	"img/legs5.png",
];

let headIndex = 0;
let headContainer = arrHeads[headIndex];

function headRight() {
	if (headIndex < arrHeads.length - 1) {
		headIndex++;
	} else {
		headIndex = 0;
	}
	headContainer = arrHeads[headIndex];
	showHkb();
}
function headLeft() {
	if (headIndex == 0) {
		headIndex = arrHeads.length - 1;
	} else {
		headIndex--;
	}
	headContainer = arrHeads[headIndex];
	showHkb();
}

let bodyIndex = 0;
let bodyContainer = arrBodies[bodyIndex];

function bodyRight() {
	if (bodyIndex < arrBodies.length - 1) {
		bodyIndex++;
	} else {
		bodyIndex = 0;
	}
	bodyContainer = arrBodies[bodyIndex];
	showHkb();
}
function bodyLeft() {
	if (bodyIndex == 0) {
		bodyIndex = arrBodies.length - 1;
	} else {
		bodyIndex--;
	}
	bodyContainer = arrBodies[bodyIndex];
	showHkb();
}

let legsIndex = 0;
let legsContainer = arrLegs[legsIndex];

function legsRight() {
	if (legsIndex < arrLegs.length - 1) {
		legsIndex++;
	} else {
		legsIndex = 0;
	}
	legsContainer = arrLegs[legsIndex];
	showHkb();
}
function legsLeft() {
	if (legsIndex == 0) {
		legsIndex = arrLegs.length - 1;
	} else {
		legsIndex--;
	}
	legsContainer = arrLegs[legsIndex];
	showHkb();
}

var count = 0;

function showCounter() {
	clearAll();
	document.getElementById("counter").innerHTML = /*HTML*/ `
  <div class="container">
  <button id="minus" onclick="minus()">-</button>
  <p id="display"></p>
  <button id="plus"onclick="plus()">+</button>
  </div>
  `;
	document.getElementById("display").innerHTML = count;
}

function plus() {
	count++;
	document.getElementById("display").innerHTML = count;
}
function minus() {
	count--;
	document.getElementById("display").innerHTML = count;
}
