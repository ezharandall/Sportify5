import request from 'superagent'

const CALENDAR_ID = 'dr0636gslagk6nj1savab81vgs@group.calendar.google.com'
const API_KEY = 'AIzaSyAKedQtk-BL4hzuIbhWqt4maVFdJRRVO5s'
let url = `https://www.googleapis.com/calendar/v3/calendars/dr0636gslagk6nj1savab81vgs@group.calendar.google.com/events?key=AIzaSyAKedQtk-BL4hzuIbhWqt4maVFdJRRVO5s`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}
