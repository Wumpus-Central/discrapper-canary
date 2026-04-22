"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(691540),
    s = n(857250),
    r = n(97483),
    a = n(192308),
    o = n(926571),
    c = n(670455),
    u = n(985018);
function d(e, t, n) {
    let { rating: i, problem: a, feedback: c } = n;
    (0, o.A)({
        problem: a?.value ?? null,
        summary: e,
        feedback: c,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: i,
    }),
        (0, l.P0)((0, s.o)(u.intl.string(u.t["d9+vQ8"]), r.Ck.SUCCESS));
}
function h(e) {
    let { summary: t, channel: l, rating: s } = e;
    null != t &&
        (s === c.P0.BAD
            ? (0, a.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("64945")]).then(
                      n.bind(n, 447696),
                  );
                  return (n) => (0, i.jsx)(e, { ...n, onSubmit: (e) => d(t, l, e), startRating: s });
              })
            : d(t, l, { rating: s, problem: null, feedback: "", dontShowAgain: !1 }));
}
