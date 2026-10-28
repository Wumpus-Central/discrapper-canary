i.d(e, { default: () => g });
var s = i(477900);
i(582128);
var n = i(562708),
    r = i(189213),
    a = i(976860),
    o = i(975571),
    l = i(612200),
    p = i(652215),
    u = i(105292);
function c() {
    return ((0, l.IO)(), (0, a.pX)(p.BVt.LOGIN, { source: "existing_user_age_gate_underage" }), Promise.resolve());
}
function g(t) {
    let { underageMessage: e, transitionState: i } = t;
    return (0, s.jsx)(r.a, {
        transitionState: i,
        onClose: c,
        title: u.intl.string(u.t["NR/zrG"]),
        subtitle: u.intl.format(u.t["3TZUIw"], { underageMessage: e ?? u.intl.string(u.t.WqEH4D), days: 30 }),
        actions: [
            {
                text: u.intl.string(u.t.hvVgAZ),
                onClick: () => {
                    window.open(o.A.getArticleURL(p.MVz.AGE_GATE), "_blank");
                },
                variant: "secondary",
            },
            { text: u.intl.string(u.t.szzQ6H), onClick: c },
        ],
        trackingProps: {
            impression: {
                impressionName: n.ImpressionNames.USER_AGE_GATE_UNDERAGE,
                impressionProperties: { existing_user: !0 },
            },
        },
    });
}
