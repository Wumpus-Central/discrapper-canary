n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(828214),
    a = n(475179),
    o = n(358221),
    s = n(354459),
    c = n(388032);
function u(e) {
    let { selectedParticipant: t } = (0, r.cj)([o.Z], () => ({ selectedParticipant: o.Z.getSelectedParticipant(e) }), [
        e,
    ]);
    return (0, i.jsx)(l.S8, {
        id: "call-grid-view",
        label: c.intl.string(c.t["3jrUBj"]),
        checked: null == t,
        action: () => {
            null != t ? a.Z.selectParticipant(e, null) : a.Z.selectParticipant(e, s.dF.AUTO);
        },
    });
}
