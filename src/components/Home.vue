<template>
  <div class="home">
  	<h2>Please select a CCBU team</h2>
  	<select has-link v-on:change="changeRoute" v-model="ccbuTeam">
      <option disabled value="">Select a Team</option>
      <option>Care Assistant</option>
      <option>Context Service</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      ccbuTeam: '',
    };
  },
  methods: {
    changeRoute: function changeTeam() {
      this.$router.push({ path: `/team/${this.ccbuTeam}` });
    },
  },
};
</script>
