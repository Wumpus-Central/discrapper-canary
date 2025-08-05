n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(828214),
    o = n(475179),
    s = n(358221),
    l = n(354459),
    c = n(388032);
function u(e) {
    let { selectedParticipant: t } = (0, i.cj)([s.Z], () => ({ selectedParticipant: s.Z.getSelectedParticipant(e) }), [e]),
        n = () => {
            null != t ? o.Z.selectParticipant(e, null) : o.Z.selectParticipant(e, l.dF.AUTO);
        };
    return (0, r.jsx)(a.S8, {
        id: 'call-grid-view',
        label: c.intl.string(c.t['3jrUBg']),
        checked: null == t,
        action: n
    });
}
