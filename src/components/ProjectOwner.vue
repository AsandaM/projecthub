<template>
  <div class="container-main">
    <div class="Welcome">
      <img :src="cloudfrontUrl + 'images/JudeBellingham.png'" class="profile-pic-welcome">
      <h3 class="fw-bold">Welcome! <i class="fas fa-hand-sparkles text-warning"></i></h3>
      <p class="text-muted">Manage your projects and team efficiently.</p>
    </div>

    <div class="dashboard-wrapper">
      <div class="projectManagement">
        <h4 class="fw-bold"><i class="fas fa-cogs"></i> Project Management</h4>
        <p>Create your project with the tool below.</p>
        <a class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#createProjectModal">Create New Project</a>
      </div>
      <div class="JoinRequests">
        <h4 class="fw-bold"><i class="fas fa-user-plus"></i> Join Requests</h4>
        <p>Review and manage pending engineer requests.</p>
        <a class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewRequests">View Pending Requests</a>
      </div>
    </div>

    <div class="tabs-wrapper">
      <h3 class="title"><i class="fas fa-list-alt"></i> Current Projects</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          <tr class="first-tab">
              <td data-label="Project Title">Web App Development</td>
              <td data-label="Status">
                <select class="form-select">
                  <option>Ongoing</option>
                  <option>Completed</option>
                </select>
              </td>
            </tr>
            <tr class="second-tab">
              <td data-label="Project Title">Mobile App Design</td>
              <td data-label="Status">
                <select class="form-select">
                  <option>Ongoing</option>
                  <option>Completed</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="modal fade" id="createProjectModal" tabindex="-1" aria-labelledby="createProjectModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createProjectModalLabel">Create New Project</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="projectTitle" class="form-label">Project Title</label>
              <input type="text" class="form-control" id="projectTitle" placeholder="e.g., Develop a new e-commerce platform">
            </div>
            <div class="mb-3">
              <label for="projectDescription" class="form-label">Project Description</label>
              <textarea class="form-control" id="projectDescription" rows="4" placeholder="Provide a detailed description of the project goals, scope, and deliverables."></textarea>
            </div>
            <div class="mb-3">
              <label for="projectDeadline" class="form-label">Deadline</label>
              <input type="date" class="form-control" id="projectDeadline">
            </div>

            <div class="mb-3">
              <label for="projectSkills" class="form-label">Required Skills</label>
              <select name="skills" id="projectSkills" multiple>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue.js">Vue.js</option>
                <option value="Node.js">Node.js</option>
                <option value="Django">Django</option>
                <option value="Flask">Flask</option>
                <option value="Ruby on Rails">Ruby on Rails</option>
                <option value="PHP">PHP</option>
                <option value="Laravel">Laravel</option>
                <option value="SQL">SQL</option>
                <option value="NoSQL">NoSQL</option>
                <option value="AWS">AWS</option>
                <option value="Azure">Azure</option>
                <option value="Google Cloud">Google Cloud</option>
                <option value="Docker">Docker</option>
                <option value="Kubernetes">Kubernetes</option>
                <option value="Git">Git</option>
                <option value="Agile">Agile</option>
                <option value="Scrum">Scrum</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Figma">Figma</option>
                <option value="Adobe XD">Adobe XD</option>
                <option value="Content Writing">Content Writing</option>
                <option value="SEO">SEO</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>



            <div class="mb-3">
              <label for="teamCapacity" class="form-label">Team Capacity</label>
              <select id="teamCapacity" class="form-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>

            <div class="mb-4 text-center">
              <label class="form-label d-block mb-3">Project Showcase Image (Optional)</label>
              <div class="project-image-placeholder border rounded p-4 text-muted bg-light d-inline-block">
                <i class="fas fa-image fa-3x mb-2 d-block"></i>
                Click or drag image here
                <input type="file" class="d-none" accept="image/*">
              </div>
              <small class="form-text text-muted d-block mt-2">Recommended size: 800x450px</small>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="saveProfileChanges" @click="createProject">Create Project</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="viewRequests" tabindex="-1" aria-labelledby="viewRequestsLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="viewRequestsLabel">View Pending Requests</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="profileEditForm">
            <h2><i class="fas fa-inbox"></i> Pending Requests</h2>

            <div class="request-wrapper">
              <div class="request">
                <div class="request-info">
                  <h4>Asanda Mehlo</h4>
                  <strong class="request-desc">Requested to join Web App Development</strong>
                </div>
                <div class="action-button">
                  <button class="btn btn-accept" @click="(e) => handleRequest('accept', userName, courseTitle, e.target)">Accept</button>
                  <button class="btn btn-accept" @click="(e) => handleRequest('accept', userName, courseTitle, e.target)">Reject</button>
                </div>
              </div>
            </div>

            <div class="request-wrapper">
              <div class="request">
                <div class="request-info">
                  <h4>Joseline McKenna</h4>
                  <strong class="request-desc">Requested to join Mobile App Design</strong>
                </div>
                <div class="action-button">
                  <button class="btn btn-accept" @click="(e) => handleRequest('accept', userName, courseTitle, e.target)">Accept</button>
                  <button class="btn btn-accept" @click="(e) => handleRequest('accept', userName, courseTitle, e.target)">Reject</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="saveProfileChanges" @click="createProject">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cloudfrontUrl = 'https://d19rfzvlyb1g0k.cloudfront.net/';
const API_URL = 'https://7f7w0zcocc.execute-api.us-east-1.amazonaws.com/create2/createProject';
const SNS_API_URL = 'https://7f7w0zcocc.execute-api.us-east-1.amazonaws.com/create2/requestNotifications';

const projectTitle = ref('');
const projectDescription = ref('');
const projectDeadline = ref('');
const projectSkills = ref([]);
const teamCapacity = ref(1);
const imageUrl = ref('');

const showNotification = (message, type = 'success') => {
  const notification = document.createElement('div');
  notification.className = `alert alert-${type}`;
  notification.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 1000;';
  notification.innerHTML = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
};

const handleRequest = async (action, userName, courseTitle, button) => {
  try {
    console.log('Processing request:', { action, userName, courseTitle });
    button.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Processing...';
    button.disabled = true;

    const response = await fetch(SNS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        action,
        course: courseTitle
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Notification sent:', result);

    showNotification(`You have ${action}ed ${userName}'s request to join ${courseTitle}`);
    
    const requestDiv = button.closest('.request-wrapper');
    if (requestDiv) {
      requestDiv.remove();
    }

  } catch (error) {
    console.error('Error:', error);
    showNotification(`Error ${action}ing request`, 'danger');
  } finally {
    button.innerHTML = action.charAt(0).toUpperCase() + action.slice(1);
    button.disabled = false;
  }
};

// Original createProject implementation
const createProject = async () => {
  console.log('createProject function called');
  
  const payload = {
    title: document.getElementById('projectTitle').value,
    description: document.getElementById('projectDescription').value,
    deadline: document.getElementById('projectDeadline').value,
    skills: Array.from(document.getElementById('projectSkills').selectedOptions).map(option => option.value),
    teamCapacity: document.getElementById('teamCapacity').value,
    imageUrl: '', 
  };

  console.log('Sending payload:', payload);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers));

    const responseText = await response.text();
    console.log('Raw response:', responseText);

    if (!response.ok) {
      try {
        const errorData = JSON.parse(responseText);
        throw new Error(errorData.message || 'Failed to create project');
      } catch (e) {
        throw new Error(`Server returned ${response.status}: ${responseText}`);
      }
    }

    const data = JSON.parse(responseText);
    console.log('Success:', data);
    alert('Project created successfully!');
    
  } catch (error) {
    console.error('Detailed error:', error);
    alert('Failed to create project: ' + error.message);
  }
};

const mounted = () => {
  document.querySelectorAll('.btn-accept, .btn-reject').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const action = button.classList.contains('btn-accept') ? 'accept' : 'reject';
      const requestDiv = button.closest('.request');
      const userName = requestDiv.querySelector('h4').textContent;
      const requestDesc = requestDiv.querySelector('.request-desc').textContent;
      const courseTitle = requestDesc.replace('Requested to join ', '');
      
      console.log('Request action:', { action, userName, courseTitle });
      handleRequest(action, userName, courseTitle, button);
    });
  });
};

onMounted(mounted);

defineExpose({ createProject });
</script>

<style scoped>
.alert {
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.alert-success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
}

.alert-danger {
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
}
  
/* Main Content Container */
.container-main {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 15px;
}
/* --- Welcome Section (Modified) --- */
.Welcome {
  margin-bottom: 30px;
  padding: 25px 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border: 1px solid #e0e0e0;
  position: relative; /* Make it a positioning context for the absolute image */
  text-align: center; /* Center the text content */
  padding-top: 50px; /* Add padding to make space for the image at the top */
}

.profile-pic-welcome {
  position: absolute; /* Position the image absolutely */
  top: 15px; /* Adjust top positioning as needed */
  right: 25px; /* Place it in the right corner */
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #FF9900;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.Welcome h3 {
  font-size: 2.2rem;
  color: #232f3e;
  margin-bottom: 10px; /* Restore some margin below the heading */
}
.Welcome p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0;
}

/* --- Dashboard Cards Wrapper --- */
.dashboard-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
  justify-content: center;
}

.projectManagement, .JoinRequests {
  flex: 1;
  min-width: 300px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.projectManagement:hover, .JoinRequests:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
.projectManagement h4, .JoinRequests h4 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #232f3e;
}
.projectManagement p, .JoinRequests p {
  color: #555;
  margin-bottom: 25px;
  font-size: 1.05rem;
}

/* Buttons */
.btn {
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-decoration: none;
}
.btn-primary {
  background-color: #FF9900;
  border-color: #FF9900;
  color: white;
}
.btn-primary:hover {
  background-color: #e68a00;
  border-color: #e68a00;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.btn-sm {
  padding: 8px 20px;
  font-size: 0.9rem;
  border-radius: 6px;
}

/* Tabs Wrapper & Table */
.tabs-wrapper {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  padding: 30px;
  border: 1px solid #e0e0e0;
  margin-bottom: 30px;
}
.tabs-wrapper .title {
  font-size: 2rem;
  margin-bottom: 25px;
  color: #232f3e;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  margin-bottom: 0;
}

thead th {
  background-color: #232f3e;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: 600;
  font-size: 1.05rem;
  border-bottom: none;
}
thead th:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
thead th:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

tbody tr {
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}
tbody tr:hover {
  background-color: #f0f0f0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

tbody td {
  padding: 15px;
  font-size: 1rem;
  color: #333;
  vertical-align: middle;
  border-top: none;
  border-bottom: none;
}
tbody tr td:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
tbody tr td:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

/* Specific row colors */
.first-tab {
  background-color: #ffe6cc;
}
.second-tab {
  background-color: #e6f7ff;
}

.form-select {
  border-radius: 8px;
  border: 1px solid #ced4da;
  padding: 8px 12px;
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.form-select:focus {
  border-color: #FF9900;
  box-shadow: 0 0 0 0.25rem rgba(255, 153, 0, 0.25);
  outline: none;
}

/* Footer (No footer in your provided code, keeping styles for completeness) */
.footer {
  text-align: center;
  padding: 30px;
  color: #777;
  font-size: 0.9rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  margin-top: 40px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
}
.footer a {
  color: #232f3e;
  font-weight: 500;
  transition: color 0.3s ease;
}
.footer a:hover {
  color: #FF9900;
  text-decoration: none;
}

/* Custom Button Styles (Matching previous buttons) */
.btn-accept {
  background-color: #FF9900;
  border-color: #FF9900;
  color: white;
}
.btn-accept:hover {
  background-color: #e68a00;
  border-color: #e68a00;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn-reject {
  background-color: #f8f9fa;
  border-color: #ced4da;
  color: #232f3e;
}
.btn-reject:hover {
  background-color: #e2e6ea;
  border-color: #dae0e5;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Request Card Styles */
.request-wrapper {
  margin-bottom: 20px;
}

.request {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.request:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.request-info h4 {
  font-size: 1.6rem;
  margin-bottom: 5px;
  color: #232f3e;
}

.request-desc {
  font-size: 1.05rem;
  color: #555;
  display: block;
  margin-bottom: 15px;
}

.action-button .btn {
  margin-left: 10px;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Responsive Adjustments */
@media (max-width: 767px) {
  .navbar-brand {
    font-size: 1.25rem;
    padding-left: 15px;
  }
  .nav-link {
    text-align: center;
  }
  .Welcome {
    padding: 20px;
    padding-top: 45px; /* Adjust padding-top for smaller screens */
    text-align: center; /* Keep text centered */
  }
  .profile-pic-welcome {
    top: 10px; /* Adjust top for smaller screens */
    right: 15px; /* Adjust right for smaller screens */
    width: 50px;
    height: 50px;
  }
  .Welcome h3 {
    font-size: 1.75rem;
    margin-bottom: 5px;
  }
  .Welcome p {
    font-size: 1rem;
  }
  .dashboard-wrapper {
    flex-direction: column;
    gap: 20px;
  }
  .projectManagement, .JoinRequests {
    padding: 25px;
  }
  .tabs-wrapper {
    padding: 20px;
  }
  .tabs-wrapper .title {
    font-size: 1.75rem;
  }
  thead th, tbody td {
    font-size: 0.9rem;
    padding: 12px;
  }
  table, thead, tbody, th, td, tr {
    display: block;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  tbody tr {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
  tbody td {
    border: none;
    position: relative;
    padding-left: 50%;
    text-align: right;
  }
  tbody td:before {
    content: attr(data-label);
    position: absolute;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    text-align: left;
    font-weight: bold;
    color: #232f3e;
  }
  tbody tr td:first-child,
  tbody tr td:last-child {
    border-radius: 0;
  }
  .form-select {
    width: auto;
    display: inline-block;
  }
}
</style>
