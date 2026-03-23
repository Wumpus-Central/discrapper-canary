n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(397927),
    o = n(780964),
    a = n(358776),
    c = n(840065),
    d = n(985018),
    u = n(391870);
function h(e) {
    let { disableButton: t } = e;
    return (0, i.jsxs)("div", {
        className: u.IG,
        children: [
            (0, i.jsx)("div", { className: u.TE }),
            (0, i.jsx)(l.DUT, {
                className: r()(u.Ac, { [u.r9]: t }),
                onClick: () => {
                    if (!0 !== t) {
                        let e = (0, a.Ci)("StreamerModeEnabled_handleClick");
                        (0, c.openUserSettings)(e ? o.X.STREAMER_MODE_CATEGORY : o.X.STREAMER_MODE_PANEL);
                    }
                },
                children: d.intl.string(d.t.Br1ls3),
            }),
        ],
    });
}
