n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(780964),
    l = n(840065),
    c = n(652215),
    u = n(985018),
    d = n(391870);

function f(e) {
    let { disableButton: t } = e,
        n = () => {
            !0 !== t &&
                (0, l.openUserSettings)(o.X.STREAMER_MODE_PANEL, {
                    section: c.nc_.STREAMER_MODE,
                });
        };
    return (0, r.jsxs)("div", {
        className: d.IG,
        children: [
            (0, r.jsx)("div", {
                className: d.TE,
            }),
            (0, r.jsx)(s.DUT, {
                className: a()(d.Ac, {
                    [d.r9]: t,
                }),
                onClick: n,
                children: u.intl.string(u.t.Br1ls3),
            }),
        ],
    });
}
