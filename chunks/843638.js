n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(828214),
    a = n(475179),
    s = n(358221),
    l = n(354459),
    c = n(388032);
function u(e) {
    let { selectedParticipant: t } = (0, i.cj)([s.Z], () => ({ selectedParticipant: s.Z.getSelectedParticipant(e) }), [
            e,
        ]),
        n = () => {
            null != t ? a.Z.selectParticipant(e, null) : a.Z.selectParticipant(e, l.dF.AUTO);
        };
    return (0, r.jsx)(o.S8, {
        id: "call-grid-view",
        label: c.intl.string(c.t["3jrUBg"]),
        checked: null == t,
        action: n,
    });
}
