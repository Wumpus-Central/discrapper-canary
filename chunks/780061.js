n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var s = n(858899),
    a = n(192308),
    i = n(129230),
    r = n(863922),
    o = n(652215),
    c = n(670455),
    u = n(792996);
function d(e, t, n) {
    let { rating: l, problem: a, feedback: c } = n;
    (!(function (e) {
        let {
            summary: t,
            guildId: n,
            channelId: l,
            rating: s = null,
            problem: a = null,
            feedback: c = "",
            location: u,
        } = e;
        ((0, r.C7)(t, s),
            i.default.track(o.HAw.SUMMARIES_REPORT_PROBLEM, {
                reason: a,
                location: u,
                rating: s,
                feedback: c,
                participant_count: t.people.length,
                message_count: t.count,
                start_message_id: t.startId,
                guild_id: n,
                channel_id: l,
                summary_id: t.id,
                summary_source: t.source,
                summary_type: t.type,
            }));
    })({
        problem: a?.value ?? null,
        summary: e,
        feedback: c,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: l,
    }),
        (0, s.P0)({ text: u.intl.string(u.t["d9+vQ8"]), variant: "success" }));
}
function m(e) {
    let { summary: t, channel: s, rating: i } = e;
    null != t &&
        (i === c.P0.BAD
            ? (0, a.mM)(async () => {
                  let { default: e } = await Promise.all([
                      n.e(142753),
                      n.e(36781),
                      n.e(268582),
                      n.e(161379),
                      n.e(139032),
                      n.e(155925),
                      n.e(988295),
                      n.e(137381),
                      n.e(326484),
                      n.e(600352),
                  ]).then(n.bind(n, 447696));
                  return (n) => (0, l.jsx)(e, { ...n, onSubmit: (e) => d(t, s, e), startRating: i });
              })
            : d(t, s, { rating: i, problem: null, feedback: "", dontShowAgain: !1 }));
}
