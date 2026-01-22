n.d(t, { default: () => p });
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(158954),
    a = n(976860),
    s = n(975571),
    o = n(612200),
    c = n(652215),
    u = n(985018);
function d() {
    return (0, o.IO)(), (0, a.pX)(c.BVt.LOGIN, { source: "existing_user_age_gate_underage" }), Promise.resolve();
}
function p(e) {
    let { underageMessage: t, transitionState: n } = e;
    return (0, r.jsx)(l.Modal, {
        transitionState: n,
        onClose: d,
        title: u.intl.string(u.t["NR/zrG"]),
        subtitle: u.intl.format(u.t.ukclM1, {
            underageMessage: null != t ? t : u.intl.string(u.t.WqEH4D),
            days: 30,
        }),
        actions: [
            {
                text: u.intl.string(u.t.hvVgAZ),
                onClick: () => {
                    window.open(s.A.getArticleURL(c.MVz.AGE_GATE), "_blank");
                },
                variant: "secondary",
            },
            {
                text: u.intl.string(u.t.szzQ6H),
                onClick: d,
            },
        ],
        trackingProps: {
            impression: {
                impressionName: i.ImpressionNames.USER_AGE_GATE_UNDERAGE,
                impressionProperties: { existing_user: !0 },
            },
        },
    });
}
