a.d(t, {
    A: () => l,
});
var i = a(954571),
    n = a(652215);

function l(e) {
    let {
        problem: t,
        channel: a,
        embeddedActivityLocation: l,
        feedback: d,
        activityApplication: c,
        analyticsData: r = {},
        location: o,
        rating: f = null,
    } = e;
    i.default.track(n.HAw.ACTIVITY_REPORT_PROBLEM, {
        reason: t,
        guild_id: null == a ? void 0 : a.getGuildId(),
        channel_id: null == a ? void 0 : a.id,
        application_id: null == c ? void 0 : c.id,
        application_name: null == c ? void 0 : c.name,
        location: o,
        rating: f,
        feedback: d,
        embedded_activity_location_kind: l.kind,
        rtc_connection_id: r.rtc_connection_id,
        media_session_id: r.media_session_id,
    });
}
