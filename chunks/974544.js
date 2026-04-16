n.d(t, { A: () => m, L: () => S });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(311907),
    o = n(397927),
    a = n(780964),
    c = n(858897),
    d = n(351906),
    u = n(985018),
    h = n(584105);
function m(e) {
    let { className: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(h.IG, t),
        children: [
            (0, i.jsx)("div", { className: h.TE }),
            (0, i.jsx)(o.DUT, {
                className: h.Ac,
                onClick: () => (0, c.openUserSettings)(a.X.STREAMER_MODE_CATEGORY),
                children: u.intl.string(u.t.Br1ls3),
            }),
        ],
    });
}
function p() {
    return (0, i.jsx)(m, { className: h.ch });
}
function S() {
    return (0, l.bG)([d.A], () => (d.A.hidePersonalInformation ? p : null));
}
