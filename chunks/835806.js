i.d(n, { A: () => a });
var l = i(954571),
    e = i(652215);
function a(t) {
    let {
        problem: n,
        stream: i,
        feedback: a,
        streamApplication: s,
        analyticsData: r,
        location: d,
        rating: o = null,
        category: u,
        variant: p,
    } = t;
    l.default.track(e.HAw.STREAM_REPORT_PROBLEM, {
        reason: n,
        category: u,
        reason_variant: p,
        streamer_user_id: i.ownerId,
        stream_channel_id: i.channelId,
        guild_id: i.guildId,
        application_id: null != s ? s.id : null,
        application_name: null != s ? s.name : null,
        location: d,
        rating: o,
        feedback: a,
        ...r,
    });
}
