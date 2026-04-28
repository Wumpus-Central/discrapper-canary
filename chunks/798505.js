"use strict";
n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(691540),
    s = n(857250),
    a = n(97483),
    r = n(192308),
    o = n(926571),
    c = n(670455),
    u = n(985018);
function d(e, t, n) {
    let { rating: l, problem: r, feedback: c } = n;
    (0, o.A)({
        problem: r?.value ?? null,
        summary: e,
        feedback: c,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: l,
    }),
        (0, i.P0)((0, s.o)(u.intl.string(u.t["d9+vQ8"]), a.Ck.SUCCESS));
}
function h(e) {
    let { summary: t, channel: i, rating: s } = e;
    null != t &&
        (s === c.P0.BAD
            ? (0, r.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("48486"),
                      n.e("56030"),
                      n.e("8891"),
                      n.e("18413"),
                      n.e("22255"),
                      n.e("55925"),
                      n.e("85033"),
                      n.e("26484"),
                      n.e("352"),
                  ]).then(n.bind(n, 447696));
                  return (n) => (0, l.jsx)(e, { ...n, onSubmit: (e) => d(t, i, e), startRating: s });
              })
            : d(t, i, { rating: s, problem: null, feedback: "", dontShowAgain: !1 }));
}
