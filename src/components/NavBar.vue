<template>
    <div class="navbar-container">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">ProjectHub</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <template v-if="isProjectOwnerPage">
                            <a class="nav-link me-5" href="#" @click="signOut">Logout</a>
                        </template>
                        <template v-else>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/dashboard">My Dashboard</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/profile">Profile</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="signOut" @click="signOut">Logout</a>
                        </li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>
        
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { signOutRedirect } from '../auth/oidc';

const route = useRoute();
const isProjectOwnerPage = computed(() => route.name === 'ProjectOwner');

// This function handles the sign-out process
function signOut() {
    signOutRedirect();
}
</script>
<style scoped>
.navbar {
    background-color: #232f3e;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: 60px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
}

.navbar-brand {
    color: white !important;
    font-weight: 700;
    font-size: 1.5rem;
    padding-left: 15px;
}

.nav-link {
    color: white !important;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.navbar-toggler {
    border: none;
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border-radius: 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-toggler:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}
</style>