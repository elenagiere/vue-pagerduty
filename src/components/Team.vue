<template>
  <div class="team">
  	<HeaderBar v-bind:ccbuTeam="ccbuTeam">></HeaderBar>
  	<p>Welcome to the {{ ccbuTeam }} page</p>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar';

export default {
  name: 'Team',
  components: { HeaderBar },
  props: ['ccbuTeam'],
  data() {
    return {
    };
  },
  methods() {

  },
};
</script>
