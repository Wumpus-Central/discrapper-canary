n.d(t, { default: () => p });
var r = n(54381);
n(473749);
var i = n(990547),
    l = n(793030),
    a = n(703656),
    s = n(63063),
    o = n(758119),
    c = n(981631),
    u = n(388032);
function d() {
    return (0, o.qV)(), (0, a.uL)(c.Z5c.LOGIN, { source: "existing_user_age_gate_underage" }), Promise.resolve();
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
                    window.open(s.Z.getArticleURL(c.BhN.AGE_GATE), "_blank");
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
