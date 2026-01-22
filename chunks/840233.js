n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(763754),
    a = n(888675),
    s = n(985018);

function o(e) {
    let { message: t, channel: o, targetUser: l, actorUsernameHook: c, targetUsernameHook: u, compact: d } = e,
        f = (0, i.Ay)(t),
        p = (0, i.d8)(l, o),
        _ = c(f),
        h = u(null != p ? p : void 0),
        m = s.intl.format(s.t.tusv2h, {
            actorName: f.nick,
            actorHook: _,
            targetName: null == p ? void 0 : p.nick,
            targetHook: h,
        });
    return (0, r.jsx)(a.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: d,
        children: m,
    });
}
