n.d(t, { A: () => l });
var r = n(954571),
    u = n(863922),
    a = n(652215);
function l(e) {
    let {
        summary: t,
        guildId: n,
        channelId: l,
        rating: o = null,
        problem: i = null,
        feedback: s = "",
        location: c,
    } = e;
    (0, u.C7)(t, o),
        r.default.track(a.HAw.SUMMARIES_REPORT_PROBLEM, {
            reason: i,
            location: c,
            rating: o,
            feedback: s,
            participant_count: t.people.length,
            message_count: t.count,
            start_message_id: t.startId,
            guild_id: n,
            channel_id: l,
            summary_id: t.id,
            summary_source: t.source,
            summary_type: t.type,
        });
}
