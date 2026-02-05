i.d(e, { A: () => l });
var n = i(954571),
    a = i(652215);
function l(t) {
    let {
        problem: e,
        channel: i,
        embeddedActivityLocation: l,
        feedback: _,
        activityApplication: c,
        analyticsData: o = {},
        location: r,
        rating: d = null,
    } = t;
    n.default.track(a.HAw.ACTIVITY_REPORT_PROBLEM, {
        reason: e,
        guild_id: i?.getGuildId(),
        channel_id: i?.id,
        application_id: c?.id,
        application_name: c?.name,
        location: r,
        rating: d,
        feedback: _,
        embedded_activity_location_kind: l.kind,
        rtc_connection_id: o.rtc_connection_id,
        media_session_id: o.media_session_id,
    });
}
