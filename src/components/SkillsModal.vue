<template>
  <div class="modal-overlay" ref="modalOverlay">
    <div class="skills-modal">
      <span class="close-btn" @click="closeModal">&times;</span>
      <h3>Add Skills</h3>
      <input type="text" placeholder="Skill (ex: CloudFormation, Python)" />
      <p class="text-muted">You can add up to 16 skills</p>
      <p class="fw-semibold mb-2">Suggested skills based on your profile:</p>
      <div>
        <span class="skill-tag">Amazon EC2</span>
        <span class="skill-tag">AWS Lambda</span>
        <span class="skill-tag">CloudFormation</span>
        <span class="skill-tag">Amazon S3</span>
        <span class="skill-tag">Amazon RDS</span>
        <span class="skill-tag">IAM & Security</span>
        <span class="skill-tag">Docker</span>
        <span class="skill-tag">Kubernetes</span>
        <span class="skill-tag">Linux Administration</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">Terraform</span>
        <span class="skill-tag">CI/CD</span>
        <span class="skill-tag">Monitoring & Logging</span>
        <span class="skill-tag">Networking Fundamentals</span>
      </div>
      <div class="footer-btn">
        <button class="btn btn-add">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
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