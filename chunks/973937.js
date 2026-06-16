t.d(n, { A: () => u });
var l = t(627968);
t(64700);
var i = t(17928),
    s = t(477782),
    a = t(367513),
    r = t(313961),
    o = t(806931),
    c = t(375708);
function u(e) {
    let { selectedParticipant: n } = (0, i.cf)([r.A], () => ({ selectedParticipant: r.A.getSelectedParticipant(e) }), [
        e,
    ]);
    return (0, l.jsx)(s.sL, {
        id: "call-grid-view",
        label: c.intl.string(c.t["3jrUBj"]),
        checked: null == n,
        action: () => {
            null != n ? a.A.selectParticipant(e, null) : a.A.selectParticipant(e, o.jd.AUTO);
        },
    });
}
