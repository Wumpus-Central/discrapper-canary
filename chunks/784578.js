"use strict";
n.d(t, { default: () => _ });
var i = n(627968);
n(64700);
var r = n(562708),
    a = n(189213),
    s = n(976860),
    l = n(975571),
    o = n(612200),
    d = n(652215),
    c = n(375708);
function u() {
    return (0, o.IO)(), (0, s.pX)(d.BVt.LOGIN, { source: "existing_user_age_gate_underage" }), Promise.resolve();
}
function _(e) {
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
                    window.open(l.A.getArticleURL(d.MVz.AGE_GATE), "_blank");
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
