import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap'; 
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_JHvEIPcFi',
    userPoolWebClientId: '5a1ubeeavekrg8ejp4oqsap437',
    mandatorySignIn: true,
  },
  API: {
    endpoints: [
      {
        name: 'createProject',
        endpoint: 'https://7f7w0zcocc.execute-api.us-east-1.amazonaws.com/create2',
        region: 'us-east-1'
      }
    ]
  }
});



const app = createApp(App)

app.use(router)
app.mount('#app')
