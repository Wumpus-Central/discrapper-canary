n.d(t, { A: () => l });
var i = n(954571),
    r = n(863922),
    a = n(652215);
function l(e) {
    let {
        summary: t,
        guildId: n,
        channelId: l,
        rating: s = null,
        problem: o = null,
        feedback: u = "",
        location: _,
    } = e;
    (0, r.C7)(t, s),
        i.default.track(a.HAw.SUMMARIES_REPORT_PROBLEM, {
            reason: o,
            location: _,
            rating: s,
            feedback: u,
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
