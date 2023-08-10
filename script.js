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
    <div class="container" id="heads">
		</div>

		<div class="container" id="bodies">
		</div>

		<div class="container" id="legs">
		</div>
    `;
	head1();
	body1();
	legs1();
}

function clearAll() {
	document.getElementById("tools").innerHTML = "";
	document.getElementById("html").innerHTML = "";
	document.getElementById("css").innerHTML = "";
	document.getElementById("js").innerHTML = "";
	document.getElementById("hkb").innerHTML = "";
	document.getElementById("counter").innerHTML = "";
}
/*
const headContainer = document.getElementById("heads");

const arrHeads = [
	"img/head1.png",
	"img/head2.png",
	"img/head3.png",
	"img/head4.png",
];

*/

function head1() {
	document.getElementById("heads").innerHTML = /*HTML*/ `
    <button onclick="head4()" >◀</button>
			<img src="img/head1.png"  />
		<button onclick="head2()">▶</button>
  `;
}

function head2() {
	document.getElementById("heads").innerHTML = /*HTML*/ `
    <button onclick="head1()" >◀</button>
			<img src="img/head2.png" />
		<button onclick="head3()">▶</button>
  `;
}

function head3() {
	document.getElementById("heads").innerHTML = /*HTML*/ `
    <button onclick="head2()" >◀</button>
			<img id="head" src="img/head3.png" />
		<button onclick="head4()">▶</button>
  `;
}

function head4() {
	document.getElementById("heads").innerHTML = /*HTML*/ `
    <button onclick="head3()" >◀</button>
			<img src="img/head4.png" />
		<button onclick="head1()">▶</button>
  `;
}

function body1() {
	document.getElementById("bodies").innerHTML = /*HTML*/ `
    <button onclick="body4()" >◀</button>
			<img src="img/body1.png" />
		<button onclick="body2()">▶</button>
  `;
}

function body2() {
	document.getElementById("bodies").innerHTML = /*HTML*/ `
    <button onclick="body1()" >◀</button>
			<img src="img/body2.png" />
		<button onclick="body3()">▶</button>
  `;
}

function body3() {
	document.getElementById("bodies").innerHTML = /*HTML*/ `
    <button onclick="body2()" >◀</button>
			<img src="img/body3.png" />
		<button onclick="body4()">▶</button>
  `;
}

function body4() {
	document.getElementById("bodies").innerHTML = /*HTML*/ `
    <button onclick="body3()" >◀</button>
			<img src="img/body1.png" />
		<button onclick="body1()">▶</button>
  `;
}

function legs1() {
	document.getElementById("legs").innerHTML = /*HTML*/ `
    <button onclick="legs4()" >◀</button>
			<img src="img/legs1.png" />
		<button onclick="legs2()">▶</button>
  `;
}

function legs2() {
	document.getElementById("legs").innerHTML = /*HTML*/ `
    <button onclick="legs1()" >◀</button>
			<img src="img/legs2.png" />
		<button onclick="legs3()">▶</button>
  `;
}

function legs3() {
	document.getElementById("legs").innerHTML = /*HTML*/ `
    <button onclick="legs2()" >◀</button>
			<img src="img/legs3.png" />
		<button onclick="legs4()">▶</button>
  `;
}

function legs4() {
	document.getElementById("legs").innerHTML = /*HTML*/ `
    <button onclick="legs3()">◀</button>
			<img src="img/legs4.png" />
		<button onclick="legs1()">▶</button>
  `;
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
