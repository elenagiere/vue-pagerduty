export default {

  getFinalSchedule(teamId, start, end) {
    const request = `https://api.pagerduty.com/schedules/${teamId}?time_zone=UTC&since=${start}&until=${end}/`;
    const headers = {
      Accept: 'application/vnd.pagerduty+json;version=2',
      Authorization: 'Token token="mMzwu1z7_qB77krQCQg9"',
    };

    return this.$http.get(request, { headers })
      .then(data => data.body.schedule.final_schedule);
  },
};
