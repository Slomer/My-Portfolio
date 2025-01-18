import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const calls = [
  "./callouts/Sam1.jpg",
  "./callouts/cube2.webp",
  "./callouts/cube3.webp",
];

const calls2 = [
  "./callouts/Sam1.jpg",
  "./callouts/cube2.webp",
  "./callouts/cube3.webp",
];


document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
      <h2>Cadavre Exquis</h2>
    </section>

    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <img src="./cadavre/Cadavre Exquis.jpg" id="model1" alt="Cadavre Exquis" />
        </div>
        <div id="images-description">
          <h4 id="description">A cubic 3D model is a geometric representation of a cube, consisting of six equal square faces joined at right angles. Each edge of the cube is of equal length, forming a symmetrical, rigid structure. The model can be textured, colored, or transparent, and it may include variations such as beveled edges or hollow interiors, depending on its intended purpose in design, animation, or engineering.</h4>
          <div id="images">
            ${calls
              .map(
                (call, index) => `<img src="${call}" alt="callout${index + 1}" />`
              )
              .join("")}
          </div>
        </div>
      </div>

      <h2>Sources</h2>
      <div id="project-row">
        <div id="images-description">
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. 
          It often includes additional details such as doors, chimneys, and balconies, with textures like brick, 
          wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
          <div id="images">
            <a href="https://peaksandstreams.com/2020/08/26/andy-good-peak-23-august-2020/" target="_blank">
              <img src="./sourceImages/andygood.jpg" alt="Andygood" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Mount_Tecumseh_%28Alberta%29" target="_blank">
              <img src="./sourceImages/tecumseh.jpg" alt="Tecumseh" />
            </a>
            <a href="https://wallpapers.com/background/time-1920-x-1052-background-lbdyvfqww5nycf8k.html" target="_blank">
              <img src="./sourceImages/clock.jpg" alt="clock" />
            </a>
            <a href="https://stock.adobe.com/search?k=star+background" target="_blank">
              <img src="./sourceImages/stars.webp" alt="clock" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
// createThreeScene("#model2", "/3DModels/project2/tree.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");