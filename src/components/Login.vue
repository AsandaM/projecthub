<template>
  <div class="vertical-hero-container">
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ProjectHub</a>
      </div>
    </nav>
    <div class="container hero">
      <div class="illustration-box">
        <img :src="cloudfrontUrl + 'images/projecthub-logo.png'" alt="Project Hub Logo" class="img-fluid">
      </div>

      <!-- <h1 class="mb-2">Welcome to ProjectHub</h1> -->
      <p class="mb-3 px-lg-4">Explore a growing list of exciting internal projects <br> designed to match your skills and
        interests.</p>

      <p>Log in and find the project that's waiting for you.</p>

      <div class="d-flex justify-content-center gap-3 mb-3 flex-wrap">
        <button @click="signIn" class="btn btn-orange">Login →</button>
      </div>

      <!--  project owner-->
      <p class="small mt-2">
        <a href="#" @click.prevent="ownerSignIn" class="owner-link">
          For approved project leads: Upload your project →
        </a>
      </p>

      <div class="d-flex align-items-center justify-content-center mt-2 flex-wrap">
        <div class="avatars me-2">
          <span>JD</span>
          <span>KL</span>
          <span>MN</span>
          <span>+5</span>
        </div>
        <div>
          <small class="text-muted ms-2">Join 1,000+ collaborators already on the platform</small>
        </div>
      </div>
    </div>
    <footer class="footer">
      <p>&copy; 2025 ProjectHub. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { userManager } from '../auth/oidc';
const cloudfrontUrl = 'https://d19rfzvlyb1g0k.cloudfront.net/';

function signIn() {
  userManager.signinRedirect();
}

function ownerSignIn() {
  userManager.signinRedirect({ state: { target: '/projectOwner' } });
}
</script>

<style scoped>
/* Navigation Styles (from Profile5.html) */
.navbar {
  background-color: #232f3e;
  /* AWS Dark Blue */
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
  /* Not used in this simplified navbar, but kept for consistency */
  color: rgb(255, 255, 255) !important;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

/* Hero Section (originally from hello.html, adapted for Profile5.html style) */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  /* Reduced top/bottom padding */
  text-align: center;
  background: white;
  /* Mimic card background */
  border-radius: 12px;
  /* Mimic card border-radius */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  /* Slightly stronger shadow for main content */
  max-width: 800px;
  /* Constrain width for better appearance */
  margin: 30px auto;
  /* Reduced top/bottom margin */
  flex-grow: 1;
  /* Allows content to push footer down */
  justify-content: center;
  /* Vertically center content if there's extra space */

  /* Removed initial state for loading animation properties */
}

/* Removed .hero.hero-loaded class */

/* Buttons (adapted from Profile5.html color scheme) */
.btn-orange {
  background-color: #FF9900;
  /* AWS Orange from Profile5.html */
  color: white;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: bold;
  border: 1px solid #FF9900;
  /* Add border for consistency */
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Subtle shadow for buttons */
}

.btn-orange:hover {
  background-color: #e68a00;
  /* Darker orange on hover */
  border-color: #e68a00;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  /* More prominent shadow on hover */
}

.btn-outline-orange {
  border: 2px solid #FF9900;
  /* AWS Orange */
  color: #FF9900;
  font-weight: bold;
  border-radius: 8px;
  padding: 10px 24px;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.btn-outline-orange:hover {
  background-color: #FF9900;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Avatars (adjusted colors to match Profile5.html palette) */
.avatars span {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background-color: #6c757d;
  /* A neutral gray from Profile5.html for general text */
  color: white;
  text-align: center;
  margin-right: -10px;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Add a subtle shadow */
  border: 2px solid white;
  /* Overlap effect */
}

.avatars span:last-child {
  background-color: #FF9900;
  /* AWS Orange */
}

/* Illustration Box (mimics a card style from Profile5.html) */
.illustration-box {
  /* background: #f8f9fa; */
  /* Light background from Profile5.html footer */
  /* border-radius: 12px; */
  /* Adopt Profile5.html border-radius */
  width: 90%;
  /* Made width more flexible */
  max-width: 300px;
  /* Reduced max-width slightly */
  height: 200px;
  /* Reduced height */
  position: relative;
  /* box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 0, 0, 0.08); */
  /* More refined inner and outer shadow */
  /* margin-bottom: 1.5rem; */
  /* Reduced margin-bottom */
  /* border: 1px solid #e9ecef; */
  /* Light border for definition */
  display: flex;
  /* Use flexbox to center content */
  justify-content: center;
  /* Center horizontally */
  align-items: center;
  /* Center vertically */
  overflow: hidden;
  /* Hide overflow if image is too big */
}

/* Style for the image within the illustration-box */
.illustration-box img {
  max-width: 100%;
  /* Give some padding within the box */
  max-height: 100%;
  /* Give some padding within the box */
  object-fit: contain;
  /* Ensure the entire image is visible within the box */
  border-radius: 8px;
  /* Slightly less rounded than the box itself */
}

/* Footer (from Profile5.html) */
.footer {
  text-align: center;
  padding: 20px;
  /* Reduced padding */
  color: #777;
  font-size: 0.9rem;
  background-color: #f8f9fa;
  /* Light background for footer */
  border-top: 1px solid #e9ecef;
  margin-top: 20px;
  /* Reduced margin-top */
}

/* Responsive Adjustments (adapted from Profile5.html) */
@media (max-width: 767px) {
  .hero {
    padding: 1.5rem 0.8rem;
    /* Further reduced padding on small screens */
    margin: 20px 10px;
    /* Further reduced margin on small screens */
  }

  .illustration-box {
    width: 95%;
    /* Make illustration box nearly full width on small screens */
    height: 150px;
    /* Further reduced height on small screens */
  }

  .illustration-box img {
    max-width: 95%;
    max-height: 95%;
  }

  /* Adjust font sizes for smaller screens if necessary to fit content */
  h1 {
    font-size: 2rem;
    /* Example adjustment */
  }

  p {
    font-size: 0.9rem;
    /* Example adjustment */
  }
}
</style>
