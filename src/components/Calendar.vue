<template>
  <div class="calendar">
    <full-calendar class="theCalendar" :events="events" defaultView="month"></full-calendar>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  created: function created() {
    /* eslint-disable */
    console.log('rendering...');
    return this.populateMonth();
  },
  data() {
    return {
      events: [],
    };
  },
  computed: {
    events() {
      return this.$store.state.calendarEvents;
    },
  },
  methods: {
    populateMonth: function populateMonth() {
      // const currentMonth = new Date(Date.now());
      // console.log('cMonth ' + currentMonth);
      for (let i = 1; i<31; i++) {
        const start = (i < 10) ? this.ymdFormat(this.addDay(`2017-11-0${i}`, 0)) :
        this.ymdFormat(this.addDay(`2017-11-${i}`, 0));
        const end = this.ymdFormat(this.addDay(start, 1));
        console.log('s ' + start);
        console.log('e ' + end);
        this.populateSecondary(start, end)
        .then(() => this.populatePrimary(start, end));
      }
    },
    /* eslint-disable */
    populatePrimary: function primary(start, end) {
      const team = 'PBX156Q'; // CA Primary
      const request = `https://api.pagerduty.com/schedules/${team}?time_zone=UTC&since=${start}&until=${end}/`;
      const headers = {
        'Accept': 'application/vnd.pagerduty+json;version=2',
        'Authorization': 'Token token="mMzwu1z7_qB77krQCQg9"',
      };
      return this.$http.get(request, { headers })
        .then((data) => {
        const primaryName = data.body.schedule.final_schedule.rendered_schedule_entries[0].user.summary;
        if (primaryName) {
          this.events.push({ title: primaryName, start, color: 'green' });
        }
      });
    },
    populateSecondary: function secondary(start, end) {
      const team = 'POAYXJ4'; // CA secondary
      console.log('sH ' + start);
      console.log('eH ' + end);
      const request = `https://api.pagerduty.com/schedules/${team}?time_zone=UTC&since=${start}&until=${end}/`;
      const headers = {
        'Accept': 'application/vnd.pagerduty+json;version=2',
        'Authorization': 'Token token="mMzwu1z7_qB77krQCQg9"',
      };
      return this.$http.get(request, { headers })
        .then((data) => {
        const primaryName = data.body.schedule.final_schedule.rendered_schedule_entries[0].user.summary;
        if (primaryName) {
          this.events.push({ title: primaryName, start });
        }
      });
    },
    addDay: function addDay(date, days) {
      console.log(date);
      const result = new Date(date);
      console.log('first ', result);
      result.setDate(result.getDate() + days);
      console.log('after ', result);
      return result;
    },
    ymdFormat: function format(dateObject) {
      return dateObject.toISOString().split('T')[0];
    }
  },
};
</script>
