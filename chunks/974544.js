n.d(t, { A: () => E, L: () => g });
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    r = n(17928),
    o = n(939249),
    a = n(780964),
    d = n(858897),
    c = n(351906),
    u = n(985018),
    h = n(584105);
function E(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        className: i()(h.IG, t),
        children: [
            (0, l.jsx)("div", { className: h.TE }),
            (0, l.jsx)(o.D, {
                className: h.Ac,
                onClick: () => (0, d.openUserSettings)(a.X.STREAMER_MODE_CATEGORY),
                children: u.intl.string(u.t.Br1ls3),
            }),
        ],
    });
}
function p() {
    return (0, l.jsx)(E, { className: h.ch });
}
function g() {
    return (0, r.bG)([c.A], () => (c.A.hidePersonalInformation ? p : null));
}
