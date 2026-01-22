n.d(t, { A: () => s });
var r = n(954571),
    i = n(863922),
    a = n(652215);
function s(e) {
    let {
        summary: t,
        guildId: n,
        channelId: s,
        rating: o = null,
        problem: l = null,
        feedback: c = "",
        location: u,
    } = e;
    (0, i.C7)(t, o),
        r.default.track(a.HAw.SUMMARIES_REPORT_PROBLEM, {
            reason: l,
            location: u,
            rating: o,
            feedback: c,
            participant_count: t.people.length,
            message_count: t.count,
            start_message_id: t.startId,
            guild_id: n,
            channel_id: s,
            summary_id: t.id,
            summary_source: t.source,
            summary_type: t.type,
        });
}
