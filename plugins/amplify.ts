// import Vue from 'vue'

// //import awsmobile from '@/aws-exports'
// const awsmobile = {
//     "aws_project_region": "ap-northeast-1",
//     "aws_cognito_identity_pool_id": "ap-northeast-1:82e83734-c7c2-4109-95df-1dae8cc2133d",
//     "aws_cognito_region": "ap-northeast-1",
//     "aws_user_pools_id": "ap-northeast-1_LvnxYKfCa",
//     "aws_user_pools_web_client_id": "AKIAQTU6GGHCBXH2JB64",
//     "oauth": {
//         "domain": "https://singlesignon4186258e-4186258e-dev.auth.ap-northeast-1.amazoncognito.com/",
//         "scope": [
//             "phone",
//             "email",
//             "openid",
//             "profile",
//             "aws.cognito.signin.user.admin"
//         ],
//         "redirectSignIn": "http://localhost:3000/",
//         "redirectSignOut": "http://localhost:3000/",
//         "responseType": "code"
//     },
//     "federationTarget": "COGNITO_USER_POOLS"
// };
// Amplify.configure(awsmobile)
// Vue.use(Amplify)



import { defineNuxtPlugin } from "#app"
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-vue';
import config from '../src/aws-exports'

export default defineNuxtPlugin(nuxtApp => {
  Amplify.configure(config);
  })