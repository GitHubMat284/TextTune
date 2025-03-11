<script setup>
import { ref } from "vue";

const text = ref("");
const result = ref("");

const toUpperCase = () => {
  result.value = text.value.toUpperCase();
};

const removeSpaces = () => {
  result.value = text.value.replace(/\s+/g, "");
};

const splitByDashOrComma = () => {
  result.value = text.value.split(/[-,]/).join("\n");
};

const reverseText = () => {
  result.value = text.value.split("").reverse().join("");
};

const countCharacters = () => {
  result.value = `Character count: ${text.value.length}`;
};
</script>

<template>
  <div class="container">
    <h1>Matheo's TextTune!</h1>
    <input v-model="text" placeholder="Enter text..." />
    <button @click="toUpperCase">ALL CAPS</button>
    <button @click="removeSpaces">Remove Spaces</button>
    <button @click="splitByDashOrComma">Split by - or ,</button>
    <button @click="reverseText">Reverse Text</button>
    <button @click="countCharacters">Count Characters</button>
    <p>Output:</p>
    <pre>{{ result }}</pre>
  </div>
</template>

<style>
.container {
  text-align: center;
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
button {
  margin: 5px;
  padding: 8px;
  border: none;
  background: #3498db;
  color: white;
  cursor: pointer;
}
button:hover {
  background: #2980b9;
}
pre {
  background: #f4f4f4;
  padding: 10px;
}
</style>
