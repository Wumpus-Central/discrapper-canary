n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(477782),
    a = n(367513),
    s = n(313961),
    o = n(806931),
    c = n(985018);
function u(e) {
    let { selectedParticipant: t } = (0, l.cf)([s.A], () => ({ selectedParticipant: s.A.getSelectedParticipant(e) }), [
        e,
    ]);
    return (0, r.jsx)(i.sL, {
        id: "call-grid-view",
        label: c.intl.string(c.t["3jrUBj"]),
        checked: null == t,
        action: () => {
            null != t ? a.A.selectParticipant(e, null) : a.A.selectParticipant(e, o.jd.AUTO);
        },
    });
}
