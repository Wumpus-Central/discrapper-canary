n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(477782),
    a = n(367513),
    r = n(313961),
    o = n(806931),
    c = n(985018);
function d(e) {
    let { selectedParticipant: t } = (0, l.cf)([r.A], () => ({ selectedParticipant: r.A.getSelectedParticipant(e) }), [
        e,
    ]);
    return (0, i.jsx)(s.sL, {
        id: "call-grid-view",
        label: c.intl.string(c.t["3jrUBj"]),
        checked: null == t,
        action: () => {
            null != t ? a.A.selectParticipant(e, null) : a.A.selectParticipant(e, o.jd.AUTO);
        },
    });
}
