n.d(t, { A: () => u });
var i = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(554146),
    s = n(189252),
    o = n(932001),
    d = n(260982),
    c = n(49999);
function u() {
    let [e, t] = (0, o.kn)([r.M.APRIL_FOOLS_2026_COACHMARK]),
        n = a.useRef(null),
        u = e === r.M.APRIL_FOOLS_2026_COACHMARK;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.A, {
                ref: n,
                icon: l.cBN,
                tooltip: "???",
                onClick: () => {
                    u && t(c.i.INDIRECT_ACTION);
                },
            }),
            u && (0, i.jsx)(d.A, { markAsDismissed: t }),
        ],
    });
}
