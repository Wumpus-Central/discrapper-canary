n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var l = n(827734),
    i = n(990078),
    a = n(397927),
    s = n(711950),
    o = n(322387),
    c = n(912309),
    u = n(954571),
    d = n(652215),
    f = n(985018),
    p = n(824426);

function h(e) {
    let { closePopout: t } = e,
        n = (0, c.kX)();
    return (0, r.jsx)(i.m, {
        asContainer: !0,
        text: f.intl.string(f.t["lMR96+"]),
        children: (0, r.jsxs)(a.DUT, {
            "aria-label": "".concat(f.intl.string(f.t["lMR96+"]), ", ").concat(n),
            className: p.b,
            onClick: () => {
                u.default.track(d.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: o.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    s.A.transitionToSection(d.m3P.PENDING, {
                        explicit: !0,
                    }),
                    t();
            },
            children: [
                (0, r.jsx)(a.$yI, {
                    size: "xs",
                    color: "currentColor",
                }),
                (0, r.jsx)(a.hVq, {
                    count: n,
                    color: l.A.colors.BACKGROUND_MOD_STRONG.css,
                }),
            ],
        }),
    });
}
