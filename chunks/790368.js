n.d(t, { A: () => g });
var s = n(627968);
n(64700);
var a = n(827734),
    l = n(990078),
    i = n(939249),
    r = n(214947),
    o = n(777666),
    d = n(711950),
    c = n(322387),
    u = n(912309),
    h = n(954571),
    _ = n(652215),
    A = n(985018),
    m = n(911933);
function g(e) {
    let { closePopout: t } = e,
        n = (0, u.kX)();
    return (0, s.jsx)(l.m, {
        asContainer: !0,
        text: A.intl.string(A.t["lMR96+"]),
        children: (0, s.jsxs)(i.D, {
            "aria-label": `${A.intl.string(A.t["lMR96+"])}, ${n}`,
            className: m.b,
            onClick: () => {
                h.default.track(_.HAw.NOTIFICATION_CENTER_ACTION, { action_type: c.e1.FRIEND_REQUESTS_BUTTON_CLICK }),
                    d.A.transitionToSection(_.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, s.jsx)(r.$, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(o.hV, { count: n, color: a.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
