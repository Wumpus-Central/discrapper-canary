n.d(t, { default: () => A });
var i = n(627968);
n(64700);
var r = n(110259),
    a = n(158954),
    l = n(976860),
    s = n(975571),
    o = n(612200),
    d = n(652215),
    c = n(985018);
function u() {
    return (0, o.IO)(), (0, l.pX)(d.BVt.LOGIN, { source: "existing_user_age_gate_underage" }), Promise.resolve();
}
function A(e) {
    let { underageMessage: t, transitionState: n } = e;
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        onClose: u,
        title: c.intl.string(c.t["NR/zrG"]),
        subtitle: c.intl.format(c.t.ukclM1, { underageMessage: t ?? c.intl.string(c.t.WqEH4D), days: 30 }),
        actions: [
            {
                text: c.intl.string(c.t.hvVgAZ),
                onClick: () => {
                    window.open(s.A.getArticleURL(d.MVz.AGE_GATE), "_blank");
                },
                variant: "secondary",
            },
            { text: c.intl.string(c.t.szzQ6H), onClick: u },
        ],
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.USER_AGE_GATE_UNDERAGE,
                impressionProperties: { existing_user: !0 },
            },
        },
    });
}
