<template>
  <div>
    <button class="button" @click="signIn" v-if="!firebaseUser">Sign in</button>
    <button class="button" @click="signOut" v-if="firebaseUser">
      Sign out
    </button>
    <div v-if="firebaseUser">
      <pre>
      {{ firebaseUser }}
    </pre
      >
    </div>
    <div v-else>User is signed out</div>
  </div>
</template>

<script setup>
const credentials = ref();
const firebaseUser = useFirebaseUser();
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
