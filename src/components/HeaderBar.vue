<template>
  <div class="header">
    <router-link class="title" to="/team">{{ this.ccbuTeam }}</router-link>
    <div>
      <button><router-link class="link" to="/calendar"><h3>Calendar</h3></router-link class="link" ></button>
      <button to="/swap"><h3>Swap</h3></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['ccbuTeam'],
};
</script>
