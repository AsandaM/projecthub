<template>
  <div>
    <div class="container-profile">
      <div class="profile-header">
        <img src="/src/images/me.jpeg" alt="Profile Avatar" id="mainProfileAvatar" />
        <div class="profile-info">
          <h1 id="profileName">Ethan Hector</h1>
          <p id="profileTitle">Cloud Support Engineer I</p>
          <p id="profileEmail"><i class="fas fa-envelope"></i> ethnhect@amazon.com</p>

          <p id="profileLocation"><i class="fas fa-map-marker-alt"></i> Cape Town, South Africa</p>
          <div class="profile-bio">
            <p id="profileBioText">
              I am passionately developing my
              expertise in cloud technologies and support operations. I am eager to contribute to
              innovative solutions and learn from experienced professionals in the dynamic tech
              environment.
            </p>
          </div>
        </div>
        <button
          class="btn btn-warning mt-3 mt-md-0 ms-md-auto"
          data-bs-toggle="modal"
          data-bs-target="#editProfileModal"
        >
          <i class="fas fa-edit"></i> Edit Profile
        </button>
      </div>

      <div class="stats-card">
        <div class="row">
          <div class="col-md-4">
            <div class="stat-item">
              <h3>25</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-item">
              <h3>1200+</h3>
              <p>Hours Coded</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-item">
              <h3>4.8 <i class="fas fa-star text-warning"></i></h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-card">
        <h2><i class="fas fa-code"></i> Skills</h2>
        <div id="mainSkillsGrid">
          <span class="skill-tag" data-skill-name="JavaScript">JavaScript</span>
          <span class="skill-tag" data-skill-name="Python">Python</span>
          <span class="skill-tag" data-skill-name="AWS">AWS</span>
          <span class="skill-tag" data-skill-name="React">React</span>
          <span class="skill-tag" data-skill-name="Node.js">Node.js</span>
          <span class="skill-tag" data-skill-name="SQL">SQL</span>
          <span class="skill-tag" data-skill-name="Docker">Docker</span>
          <span class="skill-tag" data-skill-name="Kubernetes">Kubernetes</span>
          <span class="skill-tag" data-skill-name="Terraform">Terraform</span>
        </div>
      </div>

      <div class="projects-card">
        <h2><i class="fas fa-project-diagram"></i> Recent Projects</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="project-item">
              <img
                src="https://via.placeholder.com/400x200/232f3e/FFFFFF?text=Project+Alpha"
                alt="Project Alpha"
              />
              <div class="project-content">
                <h3>Project Alpha Dashboard</h3>
                <p>
                  Developed a responsive dashboard for real-time data visualization using React and
                  D3.js, integrating with a RESTful API backend.
                </p>
                <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                <span class="badge bg-success"><i class="fas fa-check-circle"></i> Completed</span>
                <div class="progress mt-3" style="height: 8px">
                  <div
                    class="progress-bar bg-success progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="project-item">
              <img
                src="https://via.placeholder.com/400x200/FF9900/FFFFFF?text=Project+Beta"
                alt="Project Beta"
              />
              <div class="project-content">
                <h3>Serverless API Gateway</h3>
                <p>
                  Designed and implemented a scalable serverless API using AWS Lambda, API Gateway,
                  and DynamoDB for a mobile application backend.
                </p>
                <span class="badge bg-warning text-dark"><i class="fas fa-server"></i> Backend</span>
                <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS Lambda</span>
                <span class="badge bg-success"><i class="fas fa-check-circle"></i> Completed</span>
                <div class="progress mt-3" style="height: 8px">
                  <div
                    class="progress-bar bg-info progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="project-item">
              <img
                src="https://via.placeholder.com/400x200/37BD7D/FFFFFF?text=Project+Gamma"
                alt="Project Gamma"
              />
              <div class="project-content">
                <h3>Machine Learning Pipeline</h3>
                <p>
                  Built an automated data processing and machine learning pipeline on AWS SageMaker
                  for predictive analytics.
                </p>
                <span class="badge bg-danger"><i class="fas fa-brain"></i> AI/ML</span>
                <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS SageMaker</span>
                <span class="badge bg-warning text-dark"
                  ><i class="fas fa-hourglass-half"></i> In Progress</span
                >
                <div class="progress mt-3" style="height: 8px">
                  <div
                    class="progress-bar bg-warning progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="project-item">
              <img
                src="https://via.placeholder.com/400x200/007bff/FFFFFF?text=Project+Delta"
                alt="Project Delta"
              />
              <div class="project-content">
                <h3>E-commerce Microservices</h3>
                <p>
                  Contributed to the development of a microservices-based e-commerce platform using
                  Spring Boot and Docker.
                </p>
                <span class="badge bg-primary"><i class="fas fa-code"></i> Fullstack</span>
                <span class="badge bg-secondary"><i class="fas fa-shipping-fast"></i> E-commerce</span>
                <span class="badge bg-success"><i class="fas fa-check-circle"></i> Completed</span>
                <div class="progress mt-3" style="height: 8px">
                  <div
                    class="progress-bar bg-primary progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-card">
        <h2><i class="fas fa-envelope"></i> Get in Touch</h2>
        <div class="contact-info">
          <p><i class="fas fa-envelope"></i> ethnhect@amazon.com</p>
          <p><i class="fas fa-phone"></i> 079 157 5192</p>
          <p><i class="fas fa-map-marker-alt"></i> Cape Town, South Africa</p>
        </div>
        <div class="social-links mt-4">
          <a href="https://www.linkedin.com/in/ethanhector/" target="_blank" aria-label="LinkedIn"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a href="https://github.com/johndoe" target="_blank" aria-label="GitHub"
            ><i class="fab fa-github-square"></i
          ></a>
          <a href="https://twitter.com/johndoe" target="_blank" aria-label="Twitter"
            ><i class="fab fa-twitter-square"></i
          ></a>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="editProfileModal"
      tabindex="-1"
      aria-labelledby="editProfileModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProfileModalLabel">Edit Profile</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="profileEditForm">
              <div class="mb-3 text-center">
                <label for="avatarUpload" class="form-label d-block">Profile Picture</label>
                <div class="avatar-upload-area" id="avatarUploadArea">
                  <i class="fas fa-cloud-upload-alt fa-3x text-muted"></i>
                  <p class="file-input-label text-muted">Click or drag to upload new image</p>
                  <input type="file" id="avatarUpload" class="d-none" accept="image/*" />
                </div>
                <img id="avatarPreview" class="avatar-preview" src="" alt="Avatar Preview" />
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" value="Ethan Hector" />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    value="Cloud Support Associate Intern"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value="ethnhect@amazon.com"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="tel" class="form-control" id="phone" value="079 157 5192" />
                </div>
              </div>
              <div class="mb-3">
                <label for="location" class="form-label">Location</label>
                <input type="text" class="form-control" id="location" value="Cape Town, South Africa" />
              </div>
              <div class="mb-3">
                <label for="bio" class="form-label">Bio</label>
                <textarea class="form-control" id="bio" rows="4">As a Cloud Support Associate Intern at Amazon, I am passionately developing my expertise in cloud technologies and support operations. I am eager to contribute to innovative solutions and learn from experienced professionals in the dynamic tech environment.</textarea>
              </div>

              <div class="mb-3">
                <label class="form-label">Skills</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  id="skillSearch"
                  placeholder="Search or add skills..."
                />
                <div id="allSkillsContainer">
                  <span class="modal-skill-tag" data-skill-name="JavaScript">JavaScript</span>
                  <span class="modal-skill-tag" data-skill-name="Python">Python</span>
                  <span class="modal-skill-tag" data-skill-name="Java">Java</span>
                  <span class="modal-skill-tag" data-skill-name="C++">C++</span>
                  <span class="modal-skill-tag" data-skill-name="AWS">AWS</span>
                  <span class="modal-skill-tag" data-skill-name="Azure">Azure</span>
                  <span class="modal-skill-tag" data-skill-name="GCP">GCP</span>
                  <span class="modal-skill-tag" data-skill-name="React">React</span>
                  <span class="modal-skill-tag" data-skill-name="Angular">Angular</span>
                  <span class="modal-skill-tag" data-skill-name="Vue.js">Vue.js</span>
                  <span class="modal-skill-tag" data-skill-name="Node.js">Node.js</span>
                  <span class="modal-skill-tag" data-skill-name="Django">Django</span>
                  <span class="modal-skill-tag" data-skill-name="Spring Boot">Spring Boot</span>
                  <span class="modal-skill-tag" data-skill-name="SQL">SQL</span>
                  <span class="modal-skill-tag" data-skill-name="NoSQL">NoSQL</span>
                  <span class="modal-skill-tag" data-skill-name="Docker">Docker</span>
                  <span class="modal-skill-tag" data-skill-name="Kubernetes">Kubernetes</span>
                  <span class="modal-skill-tag" data-skill-name="Terraform">Terraform</span>
                  <span class="modal-skill-tag" data-skill-name="Ansible">Ansible</span>
                  <span class="modal-skill-tag" data-skill-name="Jenkins">Jenkins</span>
                  <span class="modal-skill-tag" data-skill-name="Machine Learning">Machine Learning</span>
                  <span class="modal-skill-tag" data-skill-name="Data Science">Data Science</span>
                  <span class="modal-skill-tag" data-skill-name="Agile">Agile</span>
                  <span class="modal-skill-tag" data-skill-name="Scrum">Scrum</span>
                </div>
                <p class="text-muted small">Click skills above to add/remove.</p>
                <div id="selectedSkillsContainer">
                  <span class="selected-skill-tag" data-skill-name="JavaScript"
                    >JavaScript <i class="fas fa-times-circle"></i
                  ></span>
                  <span class="selected-skill-tag" data-skill-name="Python"
                    >Python <i class="fas fa-times-circle"></i
                  ></span>
                  <span class="selected-skill-tag" data-skill-name="AWS"
                    >AWS <i class="fas fa-times-circle"></i
                  ></span>
                  <span class="selected-skill-tag" data-skill-name="React"
                    >React <i class="fas fa-times-circle"></i
                  ></span>
                  <span class="selected-skill-tag" data-skill-name="Node.js"
                    >Node.js <i class="fas fa-times-circle"></i
                  ></span>
                  <span class="selected-skill-tag" data-skill-name="SQL"
                    >SQL <i class="fas fa-times-circle"></i
                  ></span>
                  <span class="selected-skill-tag" data-skill-name="Docker"
                    >Docker <i class="fas fa-times-circle"></i
                  ></span>
                  <span class="selected-skill-tag" data-skill-name="Kubernetes"
                    >Kubernetes <i class="fas fa-times-circle"></i
                  ></span>
                  <span class="selected-skill-tag" data-skill-name="Terraform"
                    >Terraform <i class="fas fa-times-circle"></i
                  ></span>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="saveProfileChanges">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <button onclick="topFunction()" id="scrollToTopBtn" title="Go to top">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// The following code is a direct conversion of your original JavaScript.
// While functional, in a real Vue.js application, you would typically use
// Vue's reactivity system (ref, reactive) and directives (v-model, v-for, v-if)
// instead of direct DOM manipulation (`document.getElementById`, `innerHTML`, etc.).

onMounted(() => {
  // --- Profile Edit Modal Functionality ---
  const editProfileModal = document.getElementById('editProfileModal');
  const saveProfileChangesBtn = document.getElementById('saveProfileChanges');

  const mainProfileAvatar = document.getElementById('mainProfileAvatar');
  const profileName = document.getElementById('profileName');
  const profileTitle = document.getElementById('profileTitle');
  const profileEmail = document.getElementById('profileEmail');
  const profilePhone = document.getElementById('profilePhone');
  const profileLocation = document.getElementById('profileLocation');
  const profileBioText = document.getElementById('profileBioText');
  const mainSkillsGrid = document.getElementById('mainSkillsGrid');

  // Modal form elements
  const nameInput = document.getElementById('name');
  const titleInput = document.getElementById('title');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const locationInput = document.getElementById('location');
  const bioInput = document.getElementById('bio');

  // Avatar Upload
  const avatarUploadArea = document.getElementById('avatarUploadArea');
  const avatarUploadInput = document.getElementById('avatarUpload');
  const avatarPreview = document.getElementById('avatarPreview');

  avatarUploadArea.addEventListener('click', () => avatarUploadInput.click());
  avatarUploadInput.addEventListener('change', function (event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        avatarPreview.src = e.target.result;
        avatarPreview.style.display = 'block';
        avatarUploadArea.style.display = 'none'; // Hide upload area after selection
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  // Populate modal fields when modal is shown
  // Note: Bootstrap 5 modal events are typically `show.bs.modal`
  if (editProfileModal) { // Check if modal element exists
    editProfileModal.addEventListener('show.bs.modal', function () {
      nameInput.value = profileName.textContent;
      titleInput.value = profileTitle.textContent;
      // Clean up icon text for email, phone, location
      profileEmail.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          emailInput.value = node.textContent.trim();
        }
      });
      profilePhone.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          phoneInput.value = node.textContent.trim();
        }
      });
      profileLocation.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          locationInput.value = node.textContent.trim();
        }
      });

      bioInput.value = profileBioText.textContent.trim();

      // Set avatar preview
      if (mainProfileAvatar.src && mainProfileAvatar.src !== window.location.href) { // Avoid default empty src
        avatarPreview.src = mainProfileAvatar.src;
        avatarPreview.style.display = 'block';
        avatarUploadArea.style.display = 'none';
      } else {
        avatarPreview.style.display = 'none';
        avatarUploadArea.style.display = 'block';
      }

      syncModalSkillsToMainSkills();
    });
  }

  // Save changes
  if (saveProfileChangesBtn) {
    saveProfileChangesBtn.addEventListener('click', function () {
      profileName.textContent = nameInput.value;
      profileTitle.textContent = titleInput.value;
      profileEmail.innerHTML = `<i class="fas fa-envelope"></i> ${emailInput.value}`;
      profilePhone.innerHTML = `<i class="fas fa-phone"></i> ${phoneInput.value}`;
      profileLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${locationInput.value}`;
      profileBioText.textContent = bioInput.value;
      mainProfileAvatar.src = avatarPreview.src;

      updateMainSkillsFromModal();

      // Bootstrap modal instance is required to hide it programmatically
      // Assuming Bootstrap 5 is globally available
      if (window.bootstrap && editProfileModal) {
          const modal = window.bootstrap.Modal.getInstance(editProfileModal);
          if (modal) {
              modal.hide();
          }
      }
      showNotification('Profile updated successfully!');
    });
  }

  // --- Skill Management in Modal ---
  const allSkillsContainer = document.getElementById('allSkillsContainer');
  const selectedSkillsContainer = document.getElementById('selectedSkillsContainer');
  const skillSearchInput = document.getElementById('skillSearch');

  let allAvailableSkills = []; // Stores all unique skills
  let currentSelectedSkills = new Set(); // Stores skills currently selected in the modal

  // Function to initialize/sync modal skills based on main profile skills
  function syncModalSkillsToMainSkills() {
    currentSelectedSkills.clear();
    mainSkillsGrid.querySelectorAll('.skill-tag').forEach((tag) => {
      currentSelectedSkills.add(tag.dataset.skillName);
    });

    // Collect all skills from both main grid and initial modal container
    allAvailableSkills = Array.from(
      new Set(
        Array.from(allSkillsContainer.children)
          .map((s) => s.dataset.skillName)
          .concat(Array.from(mainSkillsGrid.children).map((s) => s.dataset.skillName))
      )
    );

    renderModalSkills();
    renderSelectedSkills();
  }

  function renderModalSkills() {
    allSkillsContainer.innerHTML = '';
    const searchTerm = skillSearchInput.value.toLowerCase();
    const filteredSkills = allAvailableSkills.filter(
      (skill) => skill.toLowerCase().includes(searchTerm) && !currentSelectedSkills.has(skill)
    );

    filteredSkills.forEach((skillName) => {
      const span = document.createElement('span');
      span.classList.add('modal-skill-tag');
      span.textContent = skillName;
      span.dataset.skillName = skillName;
      span.addEventListener('click', () => {
        currentSelectedSkills.add(skillName);
        renderModalSkills();
        renderSelectedSkills();
      });
      allSkillsContainer.appendChild(span);
    });
  }

  function renderSelectedSkills() {
    selectedSkillsContainer.innerHTML = '';
    currentSelectedSkills.forEach((skillName) => {
      const span = document.createElement('span');
      span.classList.add('selected-skill-tag');
      span.innerHTML = `${skillName} <i class="fas fa-times-circle"></i>`;
      span.dataset.skillName = skillName;
      span.addEventListener('click', () => {
        currentSelectedSkills.delete(skillName);
        renderModalSkills();
        renderSelectedSkills();
      });
      selectedSkillsContainer.appendChild(span);
    });
  }

  function updateMainSkillsFromModal() {
    mainSkillsGrid.innerHTML = ''; // Clear existing
    currentSelectedSkills.forEach((skillName) => {
      const span = document.createElement('span');
      span.classList.add('skill-tag');
      span.textContent = skillName;
      span.dataset.skillName = skillName;
      mainSkillsGrid.appendChild(span);
    });
  }

  if (skillSearchInput) {
    skillSearchInput.addEventListener('input', renderModalSkills);
  }

  // --- Scroll to Top Button Functionality ---
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (scrollToTopBtn) scrollToTopBtn.style.display = 'block';
    } else {
      if (scrollToTopBtn) scrollToTopBtn.style.display = 'none';
    }
  };

  // Attach to window for global access as in original HTML
  window.onscroll = scrollFunction;

  // Define topFunction globally as it's used in template's onclick
  window.topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  // --- Success/Error Notification ---
  const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('notification');
    // Note: 'notification' class and its styles are not provided in your HTML.
    // Ensure you have CSS for '.notification' in your global styles.
    if (type === 'error') {
      notification.style.backgroundColor = '#dc3545'; // Bootstrap danger color
    } else if (type === 'success') {
      notification.style.backgroundColor = '#28a745'; // Bootstrap success color
    }
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  // --- Progress Bar Animation on Load ---
  const progressBars = document.querySelectorAll('.progress-bar-animated');
  progressBars.forEach((bar) => {
    const width = bar.getAttribute('aria-valuenow') + '%';
    // Set initial width to 0 for animation start
    bar.style.width = '0%';
    // Use a small timeout to ensure the transition is applied
    setTimeout(() => {
      bar.style.width = width;
    }, 100); // A small delay to trigger the transition
  });
});
</script>

<style scoped>

    /* Container for Profile Content */
    .container-profile {
      max-width: 1200px;
      margin: 30px auto;
      padding: 0 15px;
    }

    /* Profile Header Section */
    .profile-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      text-align: center;
      margin-bottom: 30px;
    }
    .profile-header img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 20px;
      border: 5px solid #FF9900; /* AWS Orange */
    }
    .profile-info h1 {
      font-size: 2.5rem;
      margin-bottom: 5px;
      color: #232f3e;
    }
    .profile-info p {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 8px;
    }
    .profile-info p i {
      margin-right: 8px;
      color: #FF9900; /* AWS Orange */
    }
    .profile-bio {
      margin-top: 15px;
      font-style: italic;
      color: #666;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    .profile-bio p {
      line-height: 1.8;
    }

    /* Stats Section */
    .stats-card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      margin-bottom: 30px;
    }
    .stat-item {
      text-align: center;
      padding: 10px 0;
    }
    .stat-item h3 {
      font-size: 2rem;
      color: #FF9900; /* AWS Orange */
      margin-bottom: 5px;
    }
    .stat-item p {
      font-size: 1rem;
      color: #666;
      margin-bottom: 0;
    }
    .stats-card .row > div:not(:last-child) .stat-item {
      border-right: 1px solid #e1e1e1;
    }

    /* Skills Section */
    .skills-card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      margin-bottom: 30px;
    }
    .skills-card h2 {
      margin-bottom: 20px;
      font-size: 1.8rem;
      color: #232f3e;
    }
    .skill-tag {
      display: inline-block;
      background-color: #e9ecef;
      color: #495057;
      padding: 8px 15px;
      margin: 5px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .skill-tag:hover {
      background-color: #FF9900; /* AWS Orange */
      color: white;
      cursor: pointer;
    }

    /* Projects Section */
    .projects-card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      margin-bottom: 30px;
    }
    .projects-card h2 {
      margin-bottom: 20px;
      font-size: 1.8rem;
      color: #232f3e;
    }
    .project-item {
      border: 1px solid #e1e1e1;
      border-radius: 8px;
      margin-bottom: 20px;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .project-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }
    .project-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-bottom: 1px solid #e1e1e1;
    }
    .project-content {
      padding: 20px;
    }
    .project-content h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;
      color: #232f3e;
    }
    .project-content p {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 15px;
    }
    .project-item .badge {
      font-size: 0.85rem;
      padding: 6px 10px;
      border-radius: 5px;
      margin-right: 5px;
      margin-bottom: 5px;
      display: inline-flex; /* Use flexbox for badges to align */
      align-items: center;
    }
    .project-item .badge i {
      margin-right: 5px;
    }
    /* Updated for animation */
    .progress-bar-animated {
      width: 0%; /* Start at 0 */
      transition: width 1.5s ease-out; /* Smooth animation for progress bar */
    }

    /* Contact & Social Section */
    .contact-card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      margin-bottom: 30px;
    }
    .contact-card h2 {
      margin-bottom: 20px;
      font-size: 1.8rem;
      color: #232f3e;
    }
    .contact-info p {
      margin-bottom: 10px;
      font-size: 1rem;
      color: #444;
    }
    .contact-info p i {
      margin-right: 10px;
      color: #FF9900; /* AWS Orange */
      width: 20px; /* Ensure consistent alignment */
      text-align: center;
    }
    .social-links a {
      font-size: 1.8rem;
      color: #232f3e;
      margin-right: 15px;
      transition: color 0.3s ease;
    }
    .social-links a:hover {
      color: #FF9900; /* AWS Orange */
    }

    /* Modal for Profile Editing */
    .modal-content {
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }
    .modal-header {
      background-color: #232f3e;
      color: white;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      padding: 20px;
    }
    .modal-header .btn-close {
      filter: invert(1); /* Makes the close button white */
    }
    .modal-body {
      padding: 30px;
    }
    .form-label {
      font-weight: 600;
      color: #333;
    }
    .modal-footer {
      padding: 20px 30px;
      border-top: 1px solid #e9ecef;
    }
    .modal-footer .btn-primary {
      background-color: #FF9900; /* AWS Orange */
      border-color: #FF9900;
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }
    .modal-footer .btn-primary:hover {
      background-color: #e68a00;
      border-color: #e68a00;
    }
    .modal-footer .btn-secondary {
      background-color: #6c757d;
      border-color: #6c757d;
    }

    /* Skill Selection in Modal */
    #allSkillsContainer {
      border: 1px solid #ced4da;
      border-radius: 8px;
      padding: 10px;
      max-height: 200px;
      overflow-y: auto;
      margin-bottom: 15px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;
    }
    .modal-skill-tag {
      display: inline-block;
      background-color: #e9ecef;
      color: #495057;
      padding: 6px 12px;
      margin: 4px;
      border-radius: 15px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: background-color 0.2s ease, color 0.2s ease;
      user-select: none; /* Prevent text selection on click */
    }
    .modal-skill-tag.selected {
      background-color: #28a745; /* Green for selected */
      color: white;
    }
    #selectedSkillsContainer {
      border: 1px dashed #ced4da; /* Dashed border for selection area */
      border-radius: 8px;
      padding: 10px;
      min-height: 50px; /* To show the area clearly */
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;
    }
    .selected-skill-tag {
      display: inline-flex; /* Use flexbox for icon alignment */
      align-items: center;
      background-color: #007bff; /* Bootstrap primary for selected */
      color: white;
      padding: 6px 10px;
      margin: 4px;
      border-radius: 15px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }
    .selected-skill-tag i {
      margin-left: 8px;
      font-size: 0.75rem;
      transition: transform 0.2s ease;
    }
    .selected-skill-tag:hover {
      background-color: #0056b3;
      transform: scale(1.02);
    }
    .selected-skill-tag:hover i {
      transform: rotate(90deg); /* Little animation on close icon */
    }

    /* Avatar Upload in Modal */
    .avatar-upload-area {
      border: 2px dashed #ced4da;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      cursor: pointer;
      margin-bottom: 20px;
      transition: border-color 0.3s ease;
    }
    .avatar-upload-area:hover {
      border-color: #FF9900;
    }
    .avatar-preview {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-top: 15px;
      border: 3px solid #FF9900;
      display: none; /* Hidden by default */
      margin-left: auto;
      margin-right: auto;
    }
    .file-input-label {
      display: block;
      margin-top: 10px;
      color: #666;
    }

    /* Scroll to Top Button */
    #scrollToTopBtn {
      display: none; /* Hidden by default */
      position: fixed; /* Fixed position */
      bottom: 30px; /* Place the button at the bottom */
      right: 30px; /* Place the button at the right */
      z-index: 99; /* Make sure it does not overlap */
      border: none; /* Remove borders */
      outline: none; /* Remove outline */
      background-color: #232f3e; /* Set a background color */
      color: white; /* Text color */
      cursor: pointer; /* Add a mouse pointer on hover */
      padding: 15px; /* Some padding */
      border-radius: 50%; /* Rounded corners */
      font-size: 18px; /* Increase font size */
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      transition: background-color 0.3s ease, transform 0.2s ease;
    }
    #scrollToTopBtn:hover {
      background-color: #FF9900; /* Darker background on hover */
      transform: translateY(-3px);
    }

    /* Notification Styles */
    .notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #28a745; /* Default success color */
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      z-index: 1001;
      opacity: 0;
      transform: translateY(20px);
      animation: slideIn 0.3s ease forwards, fadeOut 0.3s ease 2.7s forwards;
    }

    @keyframes slideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }

    /* Responsive Adjustments */
    @media (min-width: 768px) {
      .profile-header {
        flex-direction: row;
        text-align: left;
      }
      .profile-header img {
        margin-bottom: 0;
        margin-right: 30px;
      }
      .profile-info {
        flex-grow: 1;
      }
      .stats-card .row > div:not(:last-child) .stat-item {
        border-right: 1px solid #e1e1e1;
      }
    }

    @media (max-width: 767px) {
      .navbar-brand {
        font-size: 1.25rem;
      }
      .nav-link {
        text-align: center;
      }
      .profile-header {
        padding: 20px;
      }
      .profile-header img {
        width: 100px;
        height: 100px;
      }
      .profile-info h1 {
        font-size: 2rem;
      }
      .profile-info p {
        font-size: 1rem;
      }
      .stats-card .row > div .stat-item {
        border-right: none !important;
        border-bottom: 1px solid #e1e1e1;
      }
      .stats-card .row > div:last-child .stat-item {
        border-bottom: none;
      }
      .skills-card, .projects-card, .contact-card {
        padding: 20px;
      }
      .project-item img {
        height: 150px;
      }
    }
</style>