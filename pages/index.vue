<script setup>
//   import { Authenticator } from "@aws-amplify/ui-vue";
//   import "@aws-amplify/ui-vue/styles.css";

//   import { Amplify } from 'aws-amplify';
//   import awsconfig from '../src/aws-exports'

//   Amplify.configure(awsconfig);

import { Hub } from "aws-amplify/utils";
import { signInWithRedirect, getCurrentUser } from "aws-amplify/auth";

const handleSignInClick = async () => {
  try {
    await signInWithRedirect({ provider: "Google" });
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};
</script>

<template>
  <button @click="handleSignInClick">Sign in with Google</button>
  <h1>Test</h1>
</template>
