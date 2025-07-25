n.d(t, { Z: () => Z });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(357156),
    o = n(471253),
    c = n(924301),
    s = n(482241),
    u = n(765305),
    d = n(388032);
function Z(e, t, Z) {
    let { canManageGuildEvent: f } = (0, a.XJ)(null != Z ? Z : t),
        g = (0, r.e7)([c.ZP], () => c.ZP.isActive(e)),
        h = (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(e), [e]),
        b = f(h);
    if (null == e || !b || !g || (null == h ? void 0 : h.entity_type) === u.WX.EXTERNAL) return null;
    let j = () => {
        ((null == Z ? void 0 : Z.isGuildStageVoice()) ? (0, o.NZ)(Z) : null != e && s.Z.endEvent(e, t.id), (0, l.pTH)());
    };
    return (0, i.jsx)(l.sNh, {
        id: d.intl.string(d.t.qaYzPD),
        label: d.intl.string(d.t.qaYzPD),
        action: function () {
            (0, l.ZDy)(async () => {
                let { Modal: e } = await Promise.resolve().then(n.bind(n, 82659));
                return (t) => {
                    let { onClose: n, transitionState: r } = t;
                    return (0, i.jsx)(e, {
                        transitionState: r,
                        title: d.intl.string(d.t.qaYzPD),
                        subtitle: d.intl.string(d.t.bnDQ7O),
                        onClose: n,
                        actions: [
                            {
                                onClick: n,
                                variant: 'secondary',
                                text: d.intl.string(d.t['ETE/oK'])
                            },
                            {
                                onClick: j,
                                variant: 'critical-primary',
                                text: d.intl.string(d.t.mjB9pa)
                            }
                        ]
                    });
                };
            });
        },
        color: 'danger'
    });
}
