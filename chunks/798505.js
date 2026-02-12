"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(926571),
    s = n(670455),
    o = n(985018);
function l(e, t, n) {
    let { rating: r, problem: s, feedback: l } = n;
    (0, a.A)({
        problem: s?.value ?? null,
        summary: e,
        feedback: l,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: r,
    }),
        (0, i.showToast)((0, i.createToast)(o.intl.string(o.t["d9+vQ8"]), i.ToastType.SUCCESS));
}
function u(e) {
    let { summary: t, channel: a, rating: o } = e;
    null != t &&
        (o === s.P0.BAD
            ? (0, i.mMO)(async () => {
                  let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("3489")]).then(
                      n.bind(n, 225315),
                  );
                  return (n) => (0, r.jsx)(e, { ...n, onSubmit: (e) => l(t, a, e), startRating: o });
              })
            : l(t, a, { rating: o, problem: null, feedback: "", dontShowAgain: !1 }));
}
