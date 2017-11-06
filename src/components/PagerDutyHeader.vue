<template>
  <div class="pagerDutyHeader">
    <router-link class="title" to="/">Pagerduty</router-link>
    <div class="search-section">
      <input placeholder="Search Employee"></input>
      <button>Go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      ccbuTeam: '',
    };
  },
  methods: {
    changeRoute() {
      this.$router.push({ path: `/team/${this.ccbuTeam}` });
    },
  },
};
</script>
