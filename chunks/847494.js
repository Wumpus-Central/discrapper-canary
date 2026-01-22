n.d(t, {
    A: () => u,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(435328),
    l = n(342088),
    c = n(206314);

function u(e) {
    let { description: t, className: n, guildId: a, truncate: u = !0 } = e,
        d = i.useMemo(
            () =>
                (0, o.l)(t, !0, {
                    guildId: a,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0,
                }),
            [t, a],
        );
    return (0, r.jsx)("div", {
        className: s()(l.i, n, c.PT, {
            [l.x]: u,
        }),
        children: d,
    });
}
