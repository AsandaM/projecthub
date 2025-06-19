<template>
    <SkillsModal v-if="showSkillsModal" @close="closeSkillsModal"/>
    <div class="home-page">
        <div class="container-main">
            <div class="search-bar">
                <div class="row g-2">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Search projects...">
                    </div>
                    <div class="col-md-2">
                        <select class="form-select">
                            <option>Location</option>
                            <option>Caoe Town, South Africa</option>
                            <option>Dublin, Ireland</option>
                            <option>Nairobi, Kenya</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select">
                            <option>Domain</option>
                            <option>Deployment</option>
                            <option>Linux</option>
                            <option>Windows</option>
                            <option>Databases</option>
                            <option>SCD</option>
                            <option>Networking</option>
                            <option>Big Data & AIML</option>
                            <option>Analytics</option>
                            <option>Security</option>
                            <option>DMS</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select">
                            <option>Duration</option>
                            <option>>1 Month</option>
                            <option>1 Month</option>
                            <option>2 Month</option>
                            <option>3+ Month</option>
                        </select>
                    </div>
                </div>
            </div>

            <h4 class="mt-5 fw-bold">Recommended Projects</h4>
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
                            <router-link to="/project" class="btn btn-sm btn-light border"> View More</router-link>
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

            <div class="d-flex justify-content-between align-items-center">
                <h4 class="mt-5 fw-bold">Explore More Projects</h4>
                <a href="#" class="text-orange fw-semibold">View All &gt;</a>
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
                            <router-link to="/project" class="btn btn-sm btn-light border"> View More</router-link>
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
import SkillsModal from './SkillsModal.vue';

const showSkillsModal = ref(false);

onMounted(() => {
  // Only show the modal if it hasn't been shown yet for this user/session
  if (!localStorage.getItem('skillsModalShown')) {
    showSkillsModal.value = true;
    localStorage.setItem('skillsModalShown', 'true');
  }
}); 

function closeSkillsModal() {
  showSkillsModal.value = false;
}
</script>

<style scoped>

/* Container for Main Content - Adapted from Profile5.html's container-profile */
.container-main {
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 15px;
}

.search-bar {
    background-color: #535e7b;
    padding: 20px;
    border-radius: 8px;
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
    width: 100px
}

.btn-orange:hover {
    background-color: #e68a00;
    border-color: #e68a00;
}

/* Responsive Adjustments from Profile5.html */
@media (max-width: 767px) {
    .navbar-brand {
        font-size: 1.25rem;
    }

    .nav-link {
        text-align: center;
    }

    .search-bar {
        padding: 15px;
    }

    .project-icon {
        padding: 15px;
        font-size: 2rem;
    }

    .project-body h6 {
        font-size: 1.2rem;
    }
}
</style>