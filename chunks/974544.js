r.d(s, { A: () => p, L: () => f });
var e = r(627968);
r(64700);
var i = r(503698),
    t = r.n(i),
    c = r(17928),
    a = r(939249),
    l = r(780964),
    u = r(766075),
    o = r(351906),
    d = r(375708),
    h = r(584105);
function p(n) {
    let { className: s } = n;
    return (0, e.jsxs)("div", {
        className: t()(h.IG, s),
        children: [
            (0, e.jsx)("div", { className: h.TE }),
            (0, e.jsx)(a.D, {
                className: h.Ac,
                onClick: function () {
                    return (0, u.openUserSettings)(l.X.STREAMER_MODE_CATEGORY);
                },
                children: d.intl.string(d.t.Br1ls3),
            }),
        ],
    });
}
function A() {
    return (0, e.jsx)(p, { className: h.ch });
}
function f() {
    return (0, c.bG)([o.A], () => (o.A.hidePersonalInformation ? A : null));
}
