<template>
  <spinner v-if="loading" />
  <div v-if="project" class="project-hub-page">
    <div class="container my-5">
      <div class="project-header mb-4">
        <div>
          <router-link to="/" class="back-link mb-2 d-inline-block">&larr; Back to Projects</router-link>
          <h3 class="fw-bold mt-2">{{ project.title }}</h3>
          <span class="badge bg-success me-2">Active</span>
          <span class="badge bg-primary">Remote</span>
        </div>
        <button class="btn btn-orange mt-2"
          :class="joinedProjects.includes(project?.projectId || project?.id) ? 'btn-secondary' : 'btn-orange'"
          @click.prevent="handleJoin(project?.projectId || project?.id)">
          {{ joinedProjects.includes(project?.projectId || project?.id) ? 'Joined' : 'Join Project' }}
        </button>
      </div>

      <div class="row" style="min-height: 100%;">
        <div class="col-md-8 d-flex">
          <div class="project-card mb-4 w-100">
            <h5 class="fw-bold">Project Details</h5>
            <p>{{ project.description }}</p>

            <h6 class="fw-semibold mt-4">Required Skills</h6>
            <span v-for="skill in project.required_skills" :key="skill" class="badge badge-skill">{{ skill }}</span>

            <div class="row mt-4">
              <div class="col-sm-6">
                <p><strong>Duration:</strong> {{ project.duration }}</p>
                <p><strong>Team Size:</strong> {{ project.team_size }}</p>
              </div>
              <div class="col-sm-6">
                <p><strong>Location:</strong> Remote</p>
                <p><strong>Start Date:</strong> {{ project.start_date }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 d-flex">
          <div class="owner-card w-100">
            <h6 class="fw-bold">Project Owner</h6>
            <div class="d-flex align-items-center mb-3">
              <div class="avatar">👤</div>
              <div class="ms-3">
                <strong>Alex Johnson</strong><br>
                <small>Senior Full Stack Developer</small>
              </div>
            </div>
            <p>
              Alex has over 8 years of experience in web development and has led multiple successful projects.
              Specializes in scalable architecture and cloud solutions.
            </p>

            <h6 class="fw-bold mt-4">Other Projects</h6>
            <div class="other-projects">
              <a href="#">
                E-commerce Platform
                <span>View Project</span>
              </a>
              <a href="#">
                API Gateway Implementation
                <span>View Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="fw-bold">Similar Projects You Might Like</h5>
      </div>

      <div class="row mt-3">
        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">
              <i class="fas fa-code"></i>
            </div>
            <div class="project-body">
              <h6 class="fw-bold">Web App Development</h6>
              <p>Build a web application using React and Node.js with real-time features and cloud
                integration.</p>
              <button class="btn btn-sm btn-light border">View More</button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <div class="project-body">
              <h6 class="fw-bold">Mobile App Design</h6>
              <p>Create intuitive and beautiful UI/UX designs for a health and wellness mobile
                application.</p>
              <button class="btn btn-sm btn-light border">View More</button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <div class="project-body">
              <h6 class="fw-bold">Data Analysis Project</h6>
              <p>Analyze customer behavior data and create insightful visualizations for a retail company.
              </p>
              <button class="btn btn-sm btn-light border">View More</button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Spinner from './Spinner.vue';

const route = useRoute();
const project = ref(null);
const loading = ref(true);
const error = ref('');

// Build the OIDC storage key
const cognitoDomain = import.meta.env.VITE_COGNITO_AUTHORITY;
const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const oidcStorageKey = `oidc.user:${cognitoDomain}:${clientId}`;

// API base URL (adjust as needed)
const apiBaseUrl = 'https://d19rfzvlyb1g0k.cloudfront.net/dev/items';

const JOINED_PROJECTS_KEY = 'joinedProjects';
const joinedProjects = ref([]);

onMounted(async () => {
  loading.value = true;
  error.value = '';
  try {
    // Get token from sessionStorage
    const oidcUserRaw = sessionStorage.getItem(oidcStorageKey);
    if (!oidcUserRaw) throw new Error('Not authenticated');
    const oidcUser = JSON.parse(oidcUserRaw);
    const token = oidcUser && oidcUser.id_token;
    if (!token) throw new Error('Not authenticated');

    // Fetch project by ID
    const response = await fetch(`${apiBaseUrl}/object/${route.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch project: ' + response.statusText);
    }

    const data = await response.json();
    project.value = data;

    // Load joined projects from localStorage
    const joined = localStorage.getItem(JOINED_PROJECTS_KEY);
    if (joined) {
      try {
        joinedProjects.value = JSON.parse(joined);
      } catch (e) {
        joinedProjects.value = [];
      }
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

function handleJoin(projectId) {
  if (joinedProjects.value.includes(projectId)) {
    showAlert('You already joined this project. Check your dashboard for updates.', 'info');
    return;
  }
  joinedProjects.value.push(projectId);
  localStorage.setItem(JOINED_PROJECTS_KEY, JSON.stringify(joinedProjects.value));
  showAlert('Join request sent! Check your dashboard for updates.', 'success');
}

function showAlert(message, type = 'success') {
  // Remove any existing alert
  const oldAlert = document.getElementById('project-details-alert');
  if (oldAlert) oldAlert.remove();
  const alertDiv = document.createElement('div');
  alertDiv.id = 'project-details-alert';
  alertDiv.className = `alert alert-${type === 'info' ? 'info' : type === 'error' ? 'danger' : 'success'} alert-dismissible fade show`;
  alertDiv.role = 'alert';
  alertDiv.style.position = 'fixed';
  alertDiv.style.bottom = '30px';
  alertDiv.style.right = '30px';
  alertDiv.style.zIndex = 1055;
  alertDiv.innerHTML = `
    <span>${message}</span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  document.body.appendChild(alertDiv);
  setTimeout(() => {
    if (alertDiv) alertDiv.classList.remove('show');
    setTimeout(() => alertDiv.remove(), 300);
  }, 3000);
}
</script>

<style scoped>
.btn-orange {
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
}

.btn-orange:hover {
  background-color: #e65c00;
}

.badge-skill {
  background-color: #ffe5d1;
  color: #333;
  margin: 4px;
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 14px;
}

.project-card,
.owner-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  height: 100%;
}

.avatar {
  background-color: #ff6600;
  color: white;
  width: 50px;
  height: 50px;
  font-size: 24px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.back-link {
  color: #ff6600;
  text-decoration: none;
  font-size: 0.95rem;
}

.other-projects a {
  display: block;
  background: #cddced;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
  color: #000;
  margin-bottom: 10px;
  font-weight: 500;
}

.other-projects a span {
  display: block;
  font-size: 0.85rem;
  color: #ff6600;
}

/* Project Card Styles - Adapted from Profile5.html's project-item */
.project-card {
  background: white;
  border: 1px solid #e1e1e1;
  /* Added border */
  border-radius: 12px;
  /* Increased border-radius */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  /* Stronger shadow */
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 20px;
  /* Spacing between cards */
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.project-icon {
  background-color: #f8f9fa;
  /* Lighter background for icons */
  padding: 20px;
  /* Reduced padding slightly */
  text-align: center;
  font-size: 2.5rem;
  /* Adjusted font size */
  border-bottom: 1px solid #e1e1e1;
}

.project-body {
  padding: 20px;
}

.project-body h6 {
  font-size: 1.4rem;
  /* Adjusted font size */
  margin-bottom: 10px;
  color: #232f3e;
}

.project-body p {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 15px;
}

.btn-orange {
  background-color: #FF9900;
  /* AWS Orange from Profile5.html */
  color: white;
  border-color: #FF9900;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  /* width: 100px */
}

.btn-orange:hover {
  background-color: #e68a00;
  border-color: #e68a00;
}
</style>