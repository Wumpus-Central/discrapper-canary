n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(827734),
    s = n(990078),
    a = n(397927),
    r = n(711950),
    o = n(322387),
    d = n(912309),
    c = n(954571),
    u = n(652215),
    h = n(985018),
    A = n(824426);
function g(e) {
    let { closePopout: t } = e,
        n = (0, d.kX)();
    return (0, i.jsx)(s.m, {
        asContainer: !0,
        text: h.intl.string(h.t["lMR96+"]),
        children: (0, i.jsxs)(a.DUT, {
            "aria-label": `${h.intl.string(h.t["lMR96+"])}, ${n}`,
            className: A.b,
            onClick: () => {
                c.default.track(u.HAw.NOTIFICATION_CENTER_ACTION, { action_type: o.e1.FRIEND_REQUESTS_BUTTON_CLICK }),
                    r.A.transitionToSection(u.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(a.$yI, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(a.hVq, { count: n, color: l.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
