n.d(t, { A: () => p, L: () => S });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(311907),
    o = n(397927),
    a = n(780964),
    c = n(358776),
    d = n(858897),
    u = n(351906),
    h = n(985018),
    m = n(598745);
function p(e) {
    let { className: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(m.IG, t),
        children: [
            (0, i.jsx)("div", { className: m.TE }),
            (0, i.jsx)(o.DUT, {
                className: m.Ac,
                onClick: () => {
                    let e = (0, c.Ci)("StreamerModeEnabled_handleClick");
                    (0, d.openUserSettings)(e ? a.X.STREAMER_MODE_CATEGORY : a.X.STREAMER_MODE_PANEL);
                },
                children: h.intl.string(h.t.Br1ls3),
            }),
        ],
    });
}
function E() {
    return (0, i.jsx)(p, { className: m.ch });
}
function S() {
    return (0, l.bG)([u.A], () => (u.A.hidePersonalInformation ? E : null));
}
