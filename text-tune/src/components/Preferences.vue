<template>
    <div class="container">
      <h1>TextTune - User Preferences</h1>
  
      <!-- Form to save preference -->
      <div>
        <input v-model="username" placeholder="Enter your username" />
        <input v-model="preference" placeholder="Enter your preference" />
        <button @click="savePreference">Save Preference</button>
      </div>
  
      <!-- Display saved preferences -->
      <div>
        <h2>Saved Preferences</h2>
        <ul>
          <li v-for="pref in preferences" :key="pref.id">
            {{ pref.username }}: {{ pref.preference }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        preference: '',
        preferences: [],
      };
    },
    mounted() {
      this.getPreferences(); // Fetch preferences when the app loads
    },
    methods: {
      async savePreference() {
        try {
          const response = await axios.post('http://localhost:3000/save-preference', {
            username: this.username,
            preference: this.preference,
          });
          console.log(response.data);
          this.getPreferences(); // Refresh the preferences list after saving
        } catch (error) {
          console.error('Error saving preference:', error);
        }
      },
      async getPreferences() {
        try {
          const response = await axios.get('http://localhost:3000/get-preferences');
          this.preferences = response.data;
        } catch (error) {
          console.error('Error fetching preferences:', error);
        }
      },
    },
  };
  </script>
  