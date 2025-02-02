import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";


const calls = [
  "./callouts/auroraBorealis.png",
  "./callouts/bird.png",
  "./callouts/mouthofGod.png",
];

const calls2 = [
  "./callouts2/chains.png",
  "./callouts2/clocks.png",
  "./callouts2/eyes.png",
];

const calls3 = [
  "./callouts3/city.png",
  "./callouts3/lake.png",
  "./callouts3/surf.png",
];


document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading"><h1>Samuel Padron</h1>
    <p>Undergraduate Architectural Student</p>
    </section>
    <section id="heading">
    <h2>Cadavre Exquis</h2></section>
    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <img src="./cadavre/Cadavre Exquis.jpg" id="model1" alt="Cadavre Exquis" />
        </div>
        <div id="images-description">
          <h4 id="description">This Cadavre emphasizes
          the idea of a voyage to freedom from personal struggles with time, balance, outer judgement, and divine intervention. Through this project, I learned a bit more about how I
          might be able to express my feelings and more outwardly, my thoughts. It began by fusing the ideas of nature, the city, and my own dreams. From there, I added ideas of excitement and 
          personal struggles to create a contrast and end goal: escape.
          There is a balance between the city and nature life ones lives in: The balance between my duties and leisure. It showcases my path: to be yearning for a freedom only found in solitude and nature,
          by the guiding tools of God. Yet over the image, there is a swirling and mistful texture. This represents how this is all in the realm of mind and spirit, like a song 
          committed to memory.
          </h4>
          <h4 id="description">The divine tools that guide my life into freedom make themselves clear: the aurora borealis creating an exciting wave to
          ride on, light crows signaling the way to the light and protecting me from the dangers around to emphasize my resonance with nature, and the glowing presence of God. 
          The crows themselves symbolize the nature I hold close to my heart, that place harbouring the mountains and lake on the bottom.
          These are the things that pour out from the mouth eye of God, the things that are good and show the way to still waters.<br>
          </h4>
          <div id="images">
            ${calls
              .map(
                (call, index) => `<img src="${call}" alt="callout${index + 1}" />`
              )
              .join("")}
          </div>
          <div id="images">
            ${calls2
              .map(
                (call, index) => `<img src="${call}" alt="callout2${index + 1}" />`
              )
              .join("")}
          </div>
            <h4 id="description">The hostile eyes of judgement cease to exist when I pass through the threshold that is the light. These eyes represent all those who onlook on
            my life, the people who scrutinize my actions and think to have their own plans for my life. The chains are formed by those meddlers, but the chains that 
            revolve around my life are only an illusion as they are loosened. Without chains to hold me down, without people to force their way into my life,
            I am free from the constraints of time as I can choose my own speed and destiny.<br></h4>
            <div id="images">
            ${calls3
              .map(
                (call, index) => `<img src="${call}" alt="callout2${index + 1}" />`
              )
              .join("")}
          </div>
            <h4 id="description"><br><br>The final images: the mountain and city life converging, the still lake, and the image of me surfing along the northern lights. They represent an
            exciting and serene freedom, a place of harmonic mental and spiritual peace far away from the things that hold me back. With the ability to choose and make my own way, the
            world is my oyster. The lake, rightside up, represents reality. When I reach this state of peacefulness, I am back in touch with reality.<br><br>
            As the lake reflects the sun, it puts into perspective how all this is the other side; the unseen story behind the image of the life I lead.
        </div>
      </div>

      <h2>Cinematic</h2>
      <div id="project-row">
        <div id=video">
          <video controls>
            <source src = "./video/Voyage.mp4" type="video/mp4">
          </video>
        </div>
      </div>

      <h2>Interoperability</h2>
      <div id="project-row">
        <div id="images-description">
          <div id="chart">
            <a href="/interop/chart.jpg" target="_blank">
              <img src="./interop/chart.jpg" alt="chart" />
            </a>
          </div>
        </div>
      </div>

      <div id="project-row">
        <div id="description-images">
          <h4 id="description">The differences between mesh and NURB 
          modeling.<br>Changing between file types is something that can be useful because certain 
          tasks or even qualities are made easier and clearer across file types. When transferring from Blender to Rhino, for example, I often found that STL files held more 
          desirable qualities in terms of object quality than the other two.<br>In the final process of it all (3d printing and paper modeling) I found that STL files had no holes in them and made it easy to 3d print.  I made the models in Blender as it was easier to create using mesh modeling.  Blender was a very powerful tool in the creation of my second and third models as those were both closed objects, and the figure I made was much more of an organic form. These organic forms are much easier to make with mesh modeling compared to NURBS modeling because it allows for working not only with quads but also triangles.
        </h4>
        <div id="images">
          <a href="/interop/model1.jpg" target="_blank">
              <img src="./interop/model1.jpg" alt="model1" />
          </a>
          <a href="/interop/model2.jpg" target="_blank">
              <img src="./interop/model2.jpg" alt="model2" />
          </a>
          <a href="/interop/model3.jpg" target="_blank">
              <img src="./interop/model3.jpg" alt="model3" />
          </a>
          <a href="/interop/model4.jpg" target="_blank">
              <img src="./interop/model4.jpg" alt="model4" />
          </a>
        </div>
        <div id="images">
          <a href="/interop/model5.jpg" target="_blank">
              <img src="./interop/model5.jpg" alt="model5" />
          </a>
          <a href="/interop/model6.jpg" target="_blank">
              <img src="./interop/model6.jpg" alt="model6" />
          </a>
          <a href="/interop/model7.jpg" target="_blank">
              <img src="./interop/model7.jpg" alt="model7" />
          </a>
          <a href="/interop/model8.jpg" target="_blank">
              <img src="./interop/model8.jpg" alt="model8" />
          </a>
        </div>
        <h4 id="description">I liked the look of the SubD models the best as opposed to the mesh and NURBS models 
          because it was a nice mix of both. The NURBS models in the assignment were much smoother than the meshes, which is something to take into consideration. In future projects, 
          I will definitely consider mesh and SubD modeling for more organic looking forms like people or other creative objects, and NURB modeling for built structures with the need
          for slick surfaces.</h4>
        </div>
      </div>
      <div id="description-images">
        <div id="images">
          <a href="/interop/blenderClo.png" target="_blank">
              <img src="./interop/blenderClo.png" alt="model5" />
          </a>
          <a href="/interop/rhinoClo.png" target="_blank">
              <img src="./interop/rhinoClo.png" alt="model6" />
          </a>
          <a href="/interop/blenderPv.png" target="_blank">
              <img src="./interop/blenderPv.png" alt="model7" />
          </a>
          <a href="/interop/rhinoPv.png" target="_blank">
              <img src="./interop/rhinoPv.png" alt="model8" />
          </a>
        </div>
        <div id="images">
          <a href="/interop/blenderClo.png" target="_blank">
              <img src="./interop/blenderFig.png" alt="model5" />
          </a>
          <a href="/interop/rhinoFig.png" target="_blank">
              <img src="./interop/rhinoFig.png" alt="model6" />
          </a>
          <a href="/interop/paper.png" target="_blank">
              <img src="./interop/paper.png" alt="model7" />
          </a>
            <a href="/interop/exploded.png" target="_blank">
              <img src="./interop/exploded.png" alt="model8" />
          </a>
        </div>
        <div id="images">
          <a href="/interop/lowPoly.png" target="_blank">
              <img src="./interop/lowPoly.png" alt="model5" />
          </a>
        </div>
      </div>

      <h2>Sources</h2>
      <div id="project-row">
        <div id="images-description">
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
            <a href="https://www.pexels.com/search/anchor/" target="_blank">
              <img src="./sourceImages/anchor.jpg" alt="chain" />
            </a>
          </div>
          <h4 id="description">
          <br>- McMurray, Dave. Picture of Andygood Peak.<br>
          - Wikipedia. Mount Tecumseh, southeast aspect.<br>
          - booallan. Time Conceptual Background with Clocks and Gears.<br>
          - Adobe Stock. Star Background.<br>
          - Music: Coahuila by Balmorhea<br>
          All other images by Sam Padron.
          </h4>
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