import pagerDutyApi from '@/api/pagerDuty';

const state = {
  calendarEvents: [],
};

const actions = {
  addToCalendar(calendarEvent) {
    pagerDutyApi.add(calendarEvent);
  },

  populatePrimary: function primary(start, end) {
    const team = 'PBX156Q'; // CA Primary
    return pagerDutyApi.getFinalSchedule(team, start, end)
      .then((schedule) => {
        const primaryName = schedule.rendered_schedule_entries[0].user.summary;
        if (primaryName) {
          this.events.push({ title: primaryName, start, color: 'green' });
        }
      });
  },
};

const getters = {
  allEvents() {
    return state.all;
  },
};

export default {
  state,
  actions,
  getters,
};
