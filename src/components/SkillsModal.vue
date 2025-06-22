<template>
  <div class="modal-overlay" ref="modalOverlay">
    <div class="skills-modal">
      <span class="close-btn" @click="closeModal">&times;</span>


      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
        <input type="text" v-model="nameInput" class="form-control" id="exampleFormControlInput1"
          placeholder="John Doe">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
        <textarea class="form-control" v-model="bioInput" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>


      <h3>Add Skills</h3>
      <input type="text" v-model="skillInput" placeholder="Skill (ex: CloudFormation, Python)"
        @keyup.enter="addSkill" />
      <p class="text-muted">You can add up to 16 skills</p>
      <div>
        <span v-for="skill in skills" :key="skill" class="skill-tag" @click="removeSkill(skill)"
          style="background:#ff9900;color:white;cursor:pointer" title="Remove">{{ skill }} &times;</span>
      </div>
      <p class="fw-semibold mb-2">Suggested skills:</p>
      <div>
        <span v-for="skill in suggestedSkills" :key="skill" class="skill-tag" @click="addSuggestedSkill(skill)"
          :style="{ background: skills.includes(skill) ? '#ff9900' : '', color: skills.includes(skill) ? 'white' : '' }">{{
            skill }}</span>
      </div>
      <div class="footer-btn">
        <button class="btn btn-add" @click="uploadSkills" :disabled="skills.length === 0">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

// Use your actual OIDC storage key and API base URL
const cognitoDomain = import.meta.env.VITE_COGNITO_AUTHORITY;
const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const oidcStorageKey = `oidc.user:${cognitoDomain}:${clientId}`;
const apiBaseUrl = 'https://7f7w0zcocc.execute-api.us-east-1.amazonaws.com/dev';

const skillInput = ref('');
const skills = ref([]);
const suggestedSkills = [
  'Amazon EC2', 'AWS Lambda', 'CloudFormation', 'Amazon S3', 'Amazon RDS',
  'IAM & Security', 'Docker', 'Kubernetes', 'Linux Administration', 'Python',
  'JavaScript', 'SQL', 'Terraform', 'CI/CD', 'Monitoring & Logging', 'Networking Fundamentals'
];
const nameInput = ref('');
const bioInput = ref('');

function addSkill() {
  const skill = skillInput.value.trim();
  if (skill && skills.value.length < 16 && !skills.value.includes(skill)) {
    skills.value.push(skill);
    skillInput.value = '';
  }
}

function addSuggestedSkill(skill) {
  if (skills.value.length < 16 && !skills.value.includes(skill)) {
    skills.value.push(skill);
  }
}

function removeSkill(skill) {
  skills.value = skills.value.filter(s => s !== skill);
}

function closeModal() {
  emit('close');
}

async function uploadSkills() {
  try {
    // Get user info and token from sessionStorage (same as Home.vue)
    const oidcUserRaw = sessionStorage.getItem(oidcStorageKey);
    if (!oidcUserRaw) throw new Error('User is not authenticated');
    const oidcUser = JSON.parse(oidcUserRaw);
    const token = oidcUser && oidcUser.id_token;
    if (!token) throw new Error('User is not authenticated');

    // Use sub or username as userId, depending on your Cognito setup
    const userId = oidcUser.profile.sub || oidcUser.profile.username;
    const email = oidcUser.profile.email;

    const response = await fetch(`${apiBaseUrl}/users/${userId}/skills`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        skills: skills.value,
        name: nameInput.value,
        email: email,
        bio: bioInput.value
      }),
    });

    if (!response.ok) throw new Error('Failed to upload skills');
    emit('close');
  } catch (err) {
    console.error('Error uploading skills:', err);
    alert('Error uploading skills: ' + err.message);
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.skills-modal {
  background: white;
  max-width: 600px;
  width: 90%;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  padding: 30px;
  position: relative;
}

.skills-modal h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.skills-modal input[type='text'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.skills-modal .skill-tag {
  display: inline-block;
  background-color: #e9ecef;
  color: #495057;
  padding: 8px 15px;
  margin: 5px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.skills-modal .skill-tag:hover {
  background-color: #ff9900;
  color: white;
}

.skills-modal .footer-btn {
  margin-top: 20px;
  text-align: right;
}

.skills-modal .btn-add {
  background-color: #ff9900;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
}

.skills-modal .btn-add:hover {
  background-color: #e68a00;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.2rem;
  color: #999;
  cursor: pointer;
}

.close-btn:hover {
  color: #333;
}
</style>