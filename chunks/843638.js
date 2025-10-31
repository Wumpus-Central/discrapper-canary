n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(828214),
    a = n(475179),
    o = n(358221),
    s = n(354459),
    c = n(388032);
function u(e) {
    let { selectedParticipant: t } = (0, i.cj)([o.Z], () => ({ selectedParticipant: o.Z.getSelectedParticipant(e) }), [
        e,
    ]);
    return (0, r.jsx)(l.S8, {
        id: "call-grid-view",
        label: c.intl.string(c.t["3jrUBj"]),
        checked: null == t,
        action: () => {
            null != t ? a.Z.selectParticipant(e, null) : a.Z.selectParticipant(e, s.dF.AUTO);
        },
    });
}
