<template>
  <div>
    <header>
      <h1>Matheo's TextTune</h1>
      <nav>
        <button>
          <router-link to="/">Start</router-link>
        </button>
        <button>
          <router-link to="/about">About</router-link>
        </button>
      </nav>
    </header>

    <main>
      <router-view></router-view> <!-- This changes with the route -->
    </main>
  </div>
</template>

<style>
header {
  background: #045f80;
  color: white;
  padding: 10px;
  text-align: center;
}
nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
</style>
