"use strict";
n.d(t, { default: () => _ });
var i = n(627968);
n(64700);
var r = n(562708),
    s = n(189213),
    a = n(976860),
    o = n(975571),
    l = n(612200),
    u = n(652215),
    c = n(375708);
function d() {
    return (0, l.IO)(), (0, a.pX)(u.BVt.LOGIN, { source: "existing_user_age_gate_underage" }), Promise.resolve();
}
function _(e) {
    let { underageMessage: t, transitionState: n } = e;
    return (0, i.jsx)(s.Modal, {
        transitionState: n,
        onClose: d,
        title: c.intl.string(c.t["NR/zrG"]),
        subtitle: c.intl.format(c.t.ukclM1, { underageMessage: t ?? c.intl.string(c.t.WqEH4D), days: 30 }),
        actions: [
            {
                text: c.intl.string(c.t.hvVgAZ),
                onClick: () => {
                    window.open(o.A.getArticleURL(u.MVz.AGE_GATE), "_blank");
                },
                variant: "secondary",
            },
            { text: c.intl.string(c.t.szzQ6H), onClick: d },
        ],
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.USER_AGE_GATE_UNDERAGE,
                impressionProperties: { existing_user: !0 },
            },
        },
    });
}
