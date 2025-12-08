e.d(t, { Z: () => Z });
var i = e(54381);
e(473749);
var l = e(442837),
    r = e(481060),
    a = e(357156),
    s = e(471253),
    c = e(924301),
    o = e(482241),
    d = e(765305),
    u = e(388032);
function Z(n, t, Z) {
    let { canManageGuildEvent: h } = (0, a.XJ)(null != Z ? Z : t),
        g = (0, l.e7)([c.ZP], () => c.ZP.isActive(n)),
        f = (0, l.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(n), [n]),
        v = h(f);
    if (null == n || !v || !g || (null == f ? void 0 : f.entity_type) === d.WX.EXTERNAL) return null;
    let j = () => {
        (null == Z ? void 0 : Z.isGuildStageVoice()) ? (0, s.NZ)(Z) : null != n && o.Z.endEvent(n, t.id), (0, r.pTH)();
    };
    return (0, i.jsx)(r.sNh, {
        id: u.intl.string(u.t.qaYzPA),
        label: u.intl.string(u.t.qaYzPA),
        action: function () {
            (0, r.ZDy)(async () => {
                let { Modal: n } = await Promise.resolve().then(e.bind(e, 793030));
                return (t) => {
                    let { onClose: e, transitionState: l } = t;
                    return (0, i.jsx)(n, {
                        transitionState: l,
                        title: u.intl.string(u.t.qaYzPA),
                        subtitle: u.intl.string(u.t.bnDQ7E),
                        onClose: e,
                        actions: [
                            {
                                onClick: e,
                                variant: "secondary",
                                text: u.intl.string(u.t["ETE/oC"]),
                            },
                            {
                                onClick: j,
                                variant: "critical-primary",
                                text: u.intl.string(u.t.mjB9pd),
                            },
                        ],
                    });
                };
            });
        },
        color: "danger",
    });
}
