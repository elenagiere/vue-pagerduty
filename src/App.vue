<template>
  <div id="app">
  	<PagerDutyHeader/>
    <router-view/>
  </div>
</template>

<script>
import PagerDutyHeader from './components/PagerDutyHeader';

export default {
  name: 'app',
  components: { PagerDutyHeader },
};
</script>

<style lang="scss">
@import 'src/assets/scss/styles.scss';
</style>
