<template>
  <div class="container mt-4">
    <div class="dashboard">
      <div class="left-column">
        <div class="section">
          <h1 class="mt-5 fw-bold">My Activity</h1>
          <div class="row mt-3">
            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>To-Do App</h3>
                  <p>Design and develop your own personal portfolio site using HTML, CSS, and JS.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <span class="badge bg-warning text-dark"><i class="fas fa-hourglass-half"></i> In Progress</span>
                  <div class="progress mt-3" style="height: 8px;">
                    <div class="progress-bar bg-primary progress-bar-animated" role="progressbar" aria-valuenow="75"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>Last edited: June 2, 2025</p>
                  <button class="btn btn-sm btn-light border mb-2">View More</button>
                  <div class="project-stats">
                    <span><i class="fas fa-users"></i> 5 members</span>
                    <span><i class="fas fa-clock ms-3"></i> In Progress</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>E-commerce Website</h3>
                  <p>Design and develop your own personal portfolio site using HTML, CSS, and JS.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <span class="badge bg-success"><i class="fas fa-check-circle"></i> Completed</span>
                  <div class="progress mt-3" style="height: 8px;">
                    <div class="progress-bar bg-danger progress-bar-animated" role="progressbar" aria-valuenow="100"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>Last edited: May 30, 2025</p>
                  <button class="btn btn-sm btn-light border mb-2">View More</button>
                  <div class="project-stats">
                    <span><i class="fas fa-clock"></i> Denied</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>Blog Platform</h3>
                  <p>Design and develop your own personal portfolio site using HTML, CSS, and JS.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <span class="badge bg-success"><i class="fas fa-check-circle"></i> Completed</span>
                  <div class="progress mt-3" style="height: 8px;">
                    <div class="progress-bar bg-warning progress-bar-animated" role="progressbar" aria-valuenow="25"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>Last edited: May 25, 2025</p>
                  <button class="btn btn-sm btn-light border mb-2">View More</button>
                  <div class="project-stats">
                    <span><i class="fas fa-clock"></i> Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h1 class="mt-5 fw-bold" id="completedProjects">Completed Projects</h1>
          <div class="row mt-3">
            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>Expense Tracker</h3>
                  <p>Develop a tool to manage daily expenses with charts and reports.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <span class="badge bg-success"><i class="fas fa-check-circle"></i> Completed</span>
                  <div class="progress mt-3" style="height: 8px;">
                    <div class="progress-bar bg-success progress-bar-animated" role="progressbar" aria-valuenow="100"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <button class="btn btn-sm btn-light border mt-4">View More</button>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>Recipe Finder</h3>
                  <p>Use API to find recipes based on ingredients you have at home.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <span class="badge bg-success"><i class="fas fa-check-circle"></i> Completed</span>
                  <div class="progress mt-3" style="height: 8px;">
                    <div class="progress-bar bg-success progress-bar-animated" role="progressbar" aria-valuenow="100"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <button class="btn btn-sm btn-light border mt-4">View More</button>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>Language Learning App</h3>
                  <p>Build an interactive app to help users learn new languages.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <span class="badge bg-success"><i class="fas fa-check-circle"></i> Completed</span>
                  <div class="progress mt-3" style="height: 8px;">
                    <div class="progress-bar bg-success progress-bar-animated" role="progressbar" aria-valuenow="100"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <button class="btn btn-sm btn-light border mt-4">View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <h1 class="mt-5 fw-bold">Bookmarked Projects</h1>
          <div class="row mt-3">
            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>AI Chatbot</h3>
                  <p>Build a smart assistant chatbot using Python and machine learning libraries.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <br>
                  <button class="btn btn-sm btn-light border mt-4">View More</button>
                  <button class="btn btn-sm btn-orange float-end mt-4">Join</button>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>Weather App</h3>
                  <p>Create a weather forecasting web app with real-time API integration.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <br>
                  <button class="btn btn-sm btn-light border mt-4">View More</button>
                  <button class="btn btn-sm btn-orange float-end mt-4">Join</button>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="project-item">
                <div class="project-content">
                  <h3>Portfolio Website</h3>
                  <p>Design and develop your own personal portfolio site using HTML, CSS, and JS.</p>
                  <span class="badge bg-primary"><i class="fas fa-laptop-code"></i> Frontend</span>
                  <span class="badge bg-info text-dark"><i class="fas fa-cloud"></i> AWS S3</span>
                  <br>
                  <button class="btn btn-sm btn-light border mt-4">View More</button>
                  <button class="btn btn-sm btn-orange float-end mt-4">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-column mt-5">
        <div class="profile-card">
          <img :src="cloudfrontUrl + 'images/me.jpeg'" alt="User Avatar">
          <h3>Asanda Mehlo</h3>
          <p class="text-muted">Cloud Support Associate Intern</p>
          <router-link to="/profile" class="btn btn-outline-primary btn-sm btn-profile">View Full Profile</router-link>

          <div class="activity-section">
            <h3><i class="fas fa-hourglass-half me-2"></i> Pending Requests</h3>
            <div class="activity-list">
              <div class="activity-item">
                <span class="project-title">Mobile Banking App</span>
                <span class="status text-warning">Pending Review</span>
                <a href="./project-details.html?id=mobile-banking" class="btn btn-sm btn-outline-secondary">View
                  Details</a>
              </div>
              <div class="activity-item">
                <span class="project-title">Smart Home System</span>
                <span class="status text-warning">Awaiting Approval</span>
                <a href="./project-details.html?id=smart-home" class="btn btn-sm btn-outline-secondary">View Details</a>
              </div>
              <div class="activity-item">
                <span class="project-title">Data Analytics Dashboard</span>
                <span class="status text-warning">Submitted</span>
                <a href="./project-details.html?id=data-dash" class="btn btn-sm btn-outline-secondary">View Details</a>
              </div>
            </div>
          </div>

          <div class="activity-section">
            <h3><i class="fas fa-check-circle me-2"></i> Recently Accepted Requests</h3>
            <div class="activity-list">
              <div class="activity-item">
                <span class="project-title">Inventory Management System</span>
                <span class="status text-success">Accepted, June 10</span>
                <a href="./project-details.html?id=inventory-mgmt" class="btn btn-sm btn-outline-success">View
                  Details</a>
              </div>
              <div class="activity-item">
                <span class="project-title">Online Learning Platform</span>
                <span class="status text-success">Accepted, June 5</span>
                <a href="./project-details.html?id=online-learning" class="btn btn-sm btn-outline-success">View
                  Details</a>
              </div>
              <div class="activity-item">
                <span class="project-title">Healthcare AI Assistant</span>
                <span class="status text-success">Accepted, May 28</span>
                <a href="./project-details.html?id=healthcare-ai" class="btn btn-sm btn-outline-success">View
                  Details</a>
              </div>
            </div>
          </div>

          <div class="activity-section">
            <h3><i class="fas fa-bullhorn me-2"></i> Announcements</h3>
            <div class="activity-list">
              <div class="announcement-item">
                <strong>New Feature: Team Collaboration Tools!</strong>
                <span class="date">June 15, 2025</span>
                <p class="mb-0">Excited to announce our new integrated chat and file sharing within projects.</p>
              </div>
              <div class="announcement-item">
                <strong>Maintenance Window Tonight</strong>
                <span class="date">June 14, 2025</span>
                <p class="mb-0">Scheduled maintenance from 10 PM - 12 AM SAST for performance improvements.</p>
              </div>
              <div class="announcement-item">
                <strong>ProjectHub v2.0 Released!</strong>
                <span class="date">May 20, 2025</span>
                <p class="mb-0">Explore the redesigned dashboard and improved search filters.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';

const cloudfrontUrl = 'https://d19rfzvlyb1g0k.cloudfront.net/';

onMounted(() => {
  // --- Progress Bar Animation on Load ---
  const progressBars = document.querySelectorAll('.progress-bar-animated');
  progressBars.forEach(bar => {
    const width = bar.getAttribute('aria-valuenow') + '%';
    // Set initial width to 0 for animation start
    bar.style.width = '0%';
    // Use nextTick to ensure the DOM is updated before applying the transition
    nextTick(() => {
      // Use a small timeout to ensure the transition is applied after the initial width is set
      setTimeout(() => {
        bar.style.width = width;
      }, 100); // A small delay to trigger the transition
    });
  });
});
</script>

<style scoped>
header {
  background-color: #2c3e50;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile {
  font-weight: bold;
}


main {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  margin-bottom: 15px;
  color: #2c3e50;
}

/* Projects Section */
.projects-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

.projects-card h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #232f3e;
}

.project-item {
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
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
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #232f3e;
}

.project-content p {
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 15px;
}

.project-item .badge {
  font-size: 0.85rem;
  padding: 6px 10px;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-flex;
  /* Use flexbox for badges to align */
  align-items: center;
}

.project-item .badge i {
  margin-right: 5px;
}

.project-body {
  padding: 20px;
}

.btn-orange {
  background-color: #FF9900;
  /* AWS Orange from Profile5.html */
  color: white;
  border-color: #FF9900;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  width: 100px
}

.btn-orange:hover {
  background-color: #e65c00;
}

/* Profile Card (now consolidates all right-column content) */
.profile-card {
  background: white;
  padding: 20px;
  /* Overall padding for the card */
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  /* For the profile header part */
}

.profile-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #FF9900;
}

.profile-card h3 {
  font-size: 1.7rem;
  color: #232f3e;
  margin-bottom: 5px;
}

.profile-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.profile-card .btn-profile {
  /* Specific style for the "View Full Profile" button */
  padding: 8px 20px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  /* Space between profile part and first activity list */
}


.footer a {
  text-decoration: none;
  color: inherit;
}

img {
  border-radius: 100px 100px;
}

.left-column {
  flex: 2;
}

.right-column {
  flex: 1;
}

.dashboard {
  display: flex;
  max-width: 1300px;
  /* Increased max-width for 3 columns */
  margin: 20px auto;
  gap: 20px;
}

/* Styles for activity feed sections within the consolidated profile card */
.activity-section {
  padding-top: 15px;
  /* Padding above each section title */
  padding-bottom: 15px;
  border-top: 1px solid #eee;
  /* Separator between sections */
  margin-top: 15px;
  /* Space above the section separator */
  text-align: left;
  /* Align text within activity sections to left */
}

/* No top border for the very first activity section in the profile card */
.profile-card .activity-section:first-of-type {
  border-top: none;
  margin-top: 0;
  padding-top: 0;
}

.activity-section h3 {
  font-size: 1.4rem;
  /* Slightly smaller heading for sub-sections */
  color: #232f3e;
  margin-bottom: 10px;
  padding-bottom: 5px;
  /* Space below title before list starts */
}

.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  /* Reduced padding for more compact list */
  border-bottom: 1px dashed #f0f0f0;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-item .project-title {
  font-weight: bold;
  color: #333;
  flex-grow: 1;
  font-size: 0.95rem;
  /* Slightly smaller font for titles */
}

.activity-item .status {
  font-size: 0.8rem;
  /* Smaller font for status */
  color: #777;
  margin-left: 8px;
}

.activity-item .btn {
  white-space: nowrap;
  margin-left: 10px;
}

.activity-item .btn-sm {
  padding: 4px 8px;
  /* Even smaller padding for buttons */
  font-size: 0.8rem;
}

/* Specific style for announcements */
.announcement-item {
  font-size: 0.9rem;
  color: #555;
  padding: 8px 0;
  border-bottom: 1px dashed #f0f0f0;
}

.announcement-item:last-child {
  border-bottom: none;
}

.announcement-item strong {
  color: #232f3e;
}

.announcement-item .date {
  font-size: 0.75rem;
  color: #999;
  display: block;
  margin-top: 3px;
}

/* Animation for progress bars */
.progress-bar-animated {
  width: 0%;
  /* Start at 0 */
  transition: width 1.5s ease-out;
  /* Smooth animation for progress bar */
}
</style>