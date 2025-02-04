n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(828214),
    r = n(475179),
    s = n(358221),
    o = n(354459),
    c = n(388032);
function d(e) {
    let { selectedParticipant: t } = (0, l.cj)([s.Z], () => ({ selectedParticipant: s.Z.getSelectedParticipant(e) }), [e]);
    return (0, i.jsx)(a.S8, {
        id: 'call-grid-view',
        label: c.intl.string(c.t['3jrUBg']),
        checked: null == t,
        action: () => {
            null != t ? r.Z.selectParticipant(e, null) : r.Z.selectParticipant(e, o.dF.AUTO);
        }
    });
}
