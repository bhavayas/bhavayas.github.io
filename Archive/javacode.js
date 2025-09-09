document.addEventListener("DOMContentLoaded", function () {
        const projectCards = document.querySelectorAll(".project-card");
        const projectsSection = document.getElementById("projects-section");
        const backButton = document.getElementById("backButton");
        const selectedProjectName = document.querySelector(
          ".selected-project-name"
        );

        projectCards.forEach((card) => {
          card.addEventListener("click", () => {
            const projectTitle = card.getAttribute("data-project");
            /*selectedProjectName.textContent = `– ${projectTitle}`; */
            projectsSection.classList.add("focused");

            if (dataContainer && detailContainer) {
              detailContainer.innerHTML = dataContainer.innerHTML;
              document.getElementById("project-detail").style.display = "block";
            }
          });
        });

        backButton.addEventListener("click", () => {
          projectsSection.classList.remove("focused");
          selectedProjectName.textContent = "";
          document.getElementById("project-detail").style.display = "none";
        });
      });
    </script>

    <br />
    <hr class="rounded-hr" />
    <!--Footer Code-->

    <footer>
      <p>© 2025 Bhavaya Shah. All rights reserved.</p>
    </footer>

    <!-- Javascript Code-->
    <script>
      const modal = document.getElementById("summaryModal");
      const btn = document.getElementById("summaryBtn");
      const span = document.getElementsByClassName("close")[0];

      btn.onclick = function () {
        modal.style.display = "block";
      };

      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };