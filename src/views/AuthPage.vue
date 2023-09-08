<template>
  <div class="auth-page">
    <form @submit.prevent="authenticate" class="auth-form">
      <input
        type="text"
        id="username"
        v-model="username"
        required
        class="auth-input"
        :placeholder="placeholderText('Username')"
      />

      <input
        type="password"
        id="password"
        v-model="password"
        required
        class="auth-input"
        :placeholder="placeholderText('Password')"
      />

      <button type="submit" class="auth-button">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/auth';

const username = ref('');
const password = ref('');
const router = useRouter();
const { setAuth } = useAuth();

const authenticate = () => {
  if (username.value === 'agri' && password.value === '2023') {
    setAuth('authenticated');
    router.push({ name: 'home' });
  } else {
    console.log('Authentication failed');
  }
};

const placeholderText = (inputName: string) => {
  return `${inputName}`;
};
</script>

<style scoped>
.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
}

.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-input {
  padding: 10px;
  color: #000;
  border-radius: 5px;
  border: 1px solid #000;
  margin-bottom: 0.5rem;
}

.auth-button {
  margin-top: 10px;
  width: 100%;
}

button {
  background-color: black;
  padding: 10px;
  color: white;
  width: 100%;
  border: none;
  border-radius: 5px;
}
</style>
