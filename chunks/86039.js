i.d(t, { A: () => l });
var a = i(954571),
    n = i(652215);
function l(e) {
    let {
        problem: t,
        channel: i,
        embeddedActivityLocation: l,
        feedback: r,
        activityApplication: o,
        analyticsData: d = {},
        location: c,
        rating: s = null,
    } = e;
    a.default.track(n.HAw.ACTIVITY_REPORT_PROBLEM, {
        reason: t,
        guild_id: i?.getGuildId(),
        channel_id: i?.id,
        application_id: o?.id,
        application_name: o?.name,
        location: c,
        rating: s,
        feedback: r,
        embedded_activity_location_kind: l.kind,
        rtc_connection_id: d.rtc_connection_id,
        media_session_id: d.media_session_id,
    });
}
