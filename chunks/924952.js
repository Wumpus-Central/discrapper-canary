e.d(n, { Z: () => g });
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(357156),
    a = e(471253),
    c = e(924301),
    u = e(482241),
    s = e(765305),
    d = e(388032);
function g(t, n, g) {
    let { canManageGuildEvent: f } = (0, o.XJ)(null != g ? g : n),
        b = (0, i.e7)([c.ZP], () => c.ZP.isActive(t)),
        p = (0, i.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(t), [t]),
        v = f(p);
    if (null == t || !v || !b || (null == p ? void 0 : p.entity_type) === s.WX.EXTERNAL) return null;
    let h = () => {
        ((null == g ? void 0 : g.isGuildStageVoice()) ? (0, a.NZ)(g) : null != t && u.Z.endEvent(t, n.id), (0, r.pTH)());
    };
    return (0, l.jsx)(r.sNh, {
        id: d.intl.string(d.t.qaYzPD),
        label: d.intl.string(d.t.qaYzPD),
        action: function () {
            (0, r.ZDy)(async () => {
                let { Modal: t } = await Promise.resolve().then(e.bind(e, 82659));
                return (n) => {
                    let { onClose: e, transitionState: i } = n;
                    return (0, l.jsx)(t, {
                        transitionState: i,
                        title: d.intl.string(d.t.qaYzPD),
                        subtitle: d.intl.string(d.t.bnDQ7O),
                        onClose: e,
                        actions: [
                            {
                                onClick: e,
                                variant: 'secondary',
                                text: d.intl.string(d.t['ETE/oK'])
                            },
                            {
                                onClick: h,
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
