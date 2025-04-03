n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(828214),
    o = n(475179),
    a = n(358221),
    s = n(354459),
    c = n(388032);
function u(e) {
    let { selectedParticipant: t } = (0, i.cj)([a.Z], () => ({ selectedParticipant: a.Z.getSelectedParticipant(e) }), [e]);
    return (0, r.jsx)(l.S8, {
        id: 'call-grid-view',
        label: c.NW.string(c.t['3jrUBg']),
        checked: null == t,
        action: () => {
            null != t ? o.Z.selectParticipant(e, null) : o.Z.selectParticipant(e, s.dF.AUTO);
        }
    });
}
