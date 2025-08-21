n.d(e, { Z: () => g });
var l = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    u = n(471253),
    c = n(924301),
    a = n(482241),
    s = n(765305),
    d = n(388032);
function g(t, e, g) {
    let { canManageGuildEvent: f } = (0, o.XJ)(null != g ? g : e),
        b = (0, r.e7)([c.ZP], () => c.ZP.isActive(t)),
        v = (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(t), [t]),
        E = f(v);
    if (null == t || !E || !b || (null == v ? void 0 : v.entity_type) === s.WX.EXTERNAL) return null;
    let p = () => {
        (null == g ? void 0 : g.isGuildStageVoice()) ? (0, u.NZ)(g) : null != t && a.Z.endEvent(t, e.id), (0, i.pTH)();
    };
    return (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.qaYzPD),
        label: d.intl.string(d.t.qaYzPD),
        action: function () {
            (0, i.ZDy)(async () => {
                let { Modal: t } = await Promise.resolve().then(n.bind(n, 82659));
                return (e) => {
                    let { onClose: n, transitionState: r } = e;
                    return (0, l.jsx)(t, {
                        transitionState: r,
                        title: d.intl.string(d.t.qaYzPD),
                        subtitle: d.intl.string(d.t.bnDQ7O),
                        onClose: n,
                        actions: [
                            {
                                onClick: n,
                                variant: "secondary",
                                text: d.intl.string(d.t["ETE/oK"]),
                            },
                            {
                                onClick: p,
                                variant: "critical-primary",
                                text: d.intl.string(d.t.mjB9pa),
                            },
                        ],
                    });
                };
            });
        },
        color: "danger",
    });
}
