i.d(n, { A: () => e });
var l = i(174459),
    d = i(652215);
function e(a) {
    let {
        problem: n,
        stream: i,
        feedback: e,
        streamApplication: u,
        analyticsData: r,
        location: t,
        rating: s = null,
        category: _,
        variant: c,
    } = a;
    l.default.track(d.HAw.STREAM_REPORT_PROBLEM, {
        reason: n,
        category: _,
        reason_variant: c,
        streamer_user_id: i.ownerId,
        stream_channel_id: i.channelId,
        guild_id: i.guildId,
        application_id: null != u ? u.id : null,
        application_name: null != u ? u.name : null,
        location: t,
        rating: s,
        feedback: e,
        ...r,
    });
}
