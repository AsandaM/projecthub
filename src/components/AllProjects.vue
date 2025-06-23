<template>
    <SkillsModal v-if="showSkillsModal" @close="closeSkillsModal" />
    <Spinner v-if="loading" />
    <div class="home-page">
        <div class="container-main">
            <div class="search-bar">
                <div class="row g-2">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Search projects..." v-model="searchQuery">
                    </div>
                    <div class="col-md-2">
                        <select class="form-select" v-model="selectedLocation">
                            <option value="">Location</option>
                            <option v-for="loc in locationOptions.slice(1)" :key="loc" :value="loc">{{ loc }}</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select" v-model="selectedDomain">
                            <option value="">Domain</option>
                            <option v-for="dom in domainOptions.slice(1)" :key="dom" :value="dom">{{ dom }}</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select" v-model="selectedDuration">
                            <option value="">Duration</option>
                            <option v-for="dur in durationOptions.slice(1)" :key="dur" :value="dur">{{ dur }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- <h4 class="mt-5 fw-bold">Recommended Projects</h4> -->
            <!-- No projects found message -->
            <div v-if="!recommendedProjects.length && !loading" class="text-center text-muted my-5" id="no-projects">
                <i class="fas fa-search fa-2x mb-3"></i>
                <div>No projects found matching your criteria.</div>
            </div>
            <div class="row mt-5">
                <div v-for="(project, index) in recommendedProjects" :key="project.projectId" class="col-md-4 mb-4">
                    <div class="project-card">
                        <div class="project-icon">
                            <i :class="projectIcons[index % projectIcons.length]"></i>
                        </div>
                        <div class="project-body">
                            <h6 class="fw-bold">{{ project.title }}</h6>
                            <p>{{ project.description }}</p>
                            <router-link :to="`/project/object/${project.projectId}`"
                                class="btn btn-sm btn-light border"> View More</router-link>
                            <button class="btn btn-sm btn-orange float-end"
                                :class="joinedProjects.includes(project.projectId) ? 'btn-secondary' : 'btn-orange'"
                                @click.prevent="handleJoin(project.projectId)">
                                {{ joinedProjects.includes(project.projectId) ? 'Joined' : 'Join' }}
                            </button>
                            <button class="btn btn-light border ms-2" @click.prevent="toggleBookmark(project.projectId)"
                                :title="bookmarkedProjects.includes(project.projectId) ? 'Remove Bookmark' : 'Bookmark for later'">
                                <i
                                    :class="bookmarkedProjects.includes(project.projectId) ? 'fas fa-bookmark text-warning' : 'far fa-bookmark'"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import SkillsModal from './SkillsModal.vue';
import Spinner from './Spinner.vue';

const cognitoDomain = import.meta.env.VITE_COGNITO_AUTHORITY;
const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const oidcStorageKey = `oidc.user:${cognitoDomain}:${clientId}`;

const showSkillsModal = ref(false);
const projects = ref([]);
const loading = ref(true);

const apiUrl = 'https://d19rfzvlyb1g0k.cloudfront.net/dev/items';
const PROJECTS_CACHE_KEY = 'cachedProjects';
const JOINED_PROJECTS_KEY = 'joinedProjects';
const joinedProjects = ref([]);

const BOOKMARKED_PROJECTS_KEY = 'bookmarkedProjects';
const bookmarkedProjects = ref([]);

const projectIcons = [
    'fas fa-mobile-alt',
    'fas fa-shopping-cart',
    'fas fa-edit'
];
const projectIcon = [
    'fas fa-mobile-alt',
    'fas fa-code',
    'fas fa-database',
    'fas fa-cloud-sun',
    'fas fa-list',
    'fas fa-comment'
];

const searchQuery = ref('');
const selectedLocation = ref('');
const selectedDomain = ref('');
const selectedDuration = ref('');

// Filter options
const locationOptions = [
    '', 'Cape Town, South Africa', 'Dublin, Ireland', 'Nairobi, Kenya'
];
const domainOptions = [
    '', 'Deployment', 'Linux', 'Windows', 'Databases', 'SCD', 'Networking', 'Big Data & AIML', 'Analytics', 'Security', 'DMS'
];
const durationOptions = [
    '', '>1 Month', '1 Month', '2 Month', '3+ Month'
];

// Filtered projects computed
const filteredProjects = computed(() => {
    return projects.value.filter(project => {
        // Search
        const matchesSearch = !searchQuery.value ||
            (project.title && project.title.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
            (project.description && project.description.toLowerCase().includes(searchQuery.value.toLowerCase()));
        // Location
        const matchesLocation = !selectedLocation.value || (project.location && project.location === selectedLocation.value);
        // Domain
        const matchesDomain = !selectedDomain.value || (project.domain && project.domain === selectedDomain.value);
        // Duration
        const matchesDuration = !selectedDuration.value || (project.duration && project.duration === selectedDuration.value);
        return matchesSearch && matchesLocation && matchesDomain && matchesDuration;
    });
});

// On mount: load cached projects first, then fetch from API
onMounted(() => {
    if (!localStorage.getItem('skillsModalShown')) {
        showSkillsModal.value = true;
        localStorage.setItem('skillsModalShown', 'true');
    }

    // Load cached projects from localStorage
    const cached = localStorage.getItem(PROJECTS_CACHE_KEY);
    if (cached) {
        try {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) {
                projects.value = parsed;
                loading.value = false; // Show projects instantly, no spinner
            }
        } catch (e) {
            // Ignore parse errors, fallback to fetch
        }
    }
    // If no cache, show spinner until fetch completes
    if (!projects.value.length) {
        loading.value = true;
    }
    fetchProjects();

    // Load joined projects from localStorage
    const joined = localStorage.getItem(JOINED_PROJECTS_KEY);
    if (joined) {
        try {
            joinedProjects.value = JSON.parse(joined);
        } catch (e) {
            joinedProjects.value = [];
        }
    }

    // Load bookmarked projects from localStorage
    const bookmarked = localStorage.getItem(BOOKMARKED_PROJECTS_KEY);
    if (bookmarked) {
        try {
            bookmarkedProjects.value = JSON.parse(bookmarked);
        } catch (e) {
            bookmarkedProjects.value = [];
        }
    }
});

// Fetch projects from the API
async function fetchProjects() {
    // Only show spinner if no cached projects
    if (!projects.value.length) {
        loading.value = true;
    }
    try {
        const oidcUserRaw = sessionStorage.getItem(oidcStorageKey);
        if (!oidcUserRaw) {
            throw new Error('User is not authenticated');
        }
        const oidcUser = JSON.parse(oidcUserRaw);
        const token = oidcUser && oidcUser.id_token;
        if (!token) {
            throw new Error('User is not authenticated');
        }
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        let data = [];
        if (response.status === 200) {
            data = await response.json();
            projects.value = data;
            // Update cache
            localStorage.setItem(PROJECTS_CACHE_KEY, JSON.stringify(data));
        } else if (response.status === 304) {
            // No new data, keep cached projects
            console.log('No new projects found, using cached data');
            // Do not update projects.value or cache
        }
        if (!response.ok && response.status !== 304) {
            throw new Error('Failed to fetch projects: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    } finally {
        loading.value = false;
    }
}

function closeSkillsModal() {
    showSkillsModal.value = false;
}

const recommendedProjects = computed(() => {
    return filteredProjects.value;
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
    const oldAlert = document.getElementById('home-alert');
    if (oldAlert) oldAlert.remove();
    const alertDiv = document.createElement('div');
    alertDiv.id = 'home-alert';
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

function toggleBookmark(projectId) {
    const idx = bookmarkedProjects.value.indexOf(projectId);
    if (idx === -1) {
        bookmarkedProjects.value.push(projectId);
    } else {
        bookmarkedProjects.value.splice(idx, 1);
    }
    localStorage.setItem(BOOKMARKED_PROJECTS_KEY, JSON.stringify(bookmarkedProjects.value));
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