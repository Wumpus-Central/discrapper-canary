e.d(n, { A: () => p, L: () => k });
var i = e(627968);
e(64700);
var r = e(503698),
    c = e.n(r),
    t = e(17928),
    a = e(939249),
    l = e(780964),
    u = e(766075),
    d = e(351906),
    o = e(375708),
    h = e(584105);
function p(s) {
    let { className: n } = s;
    return (0, i.jsxs)("div", {
        className: c()(h.IG, n),
        children: [
            (0, i.jsx)("div", { className: h.TE }),
            (0, i.jsx)(a.D, {
                className: h.Ac,
                onClick: () => (0, u.openUserSettings)(l.X.STREAMER_MODE_CATEGORY),
                children: o.intl.string(o.t.Br1ls3),
            }),
        ],
    });
}
function A() {
    return (0, i.jsx)(p, { className: h.ch });
}
function k() {
    return (0, t.bG)([d.A], () => (d.A.hidePersonalInformation ? A : null));
}
