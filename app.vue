<template>
  <div>
    <button class="button" @click="signIn">Sign in</button>
    <button class="button" @click="signOut">Sign out</button>
    <pre>
      {{ credentials }}
    </pre>
  </div>
</template>

<script setup>
const credentials = ref();

const signIn = async () => {
  const email = "email@email.com";
  const password = "password";
  credentials.value = await signInUser(email, password);
};

const signOut = async () => {
  credentials.value = await signOutUser();
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
