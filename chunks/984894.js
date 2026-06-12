e.d(i, { A: () => A });
var n = e(627968);
e(64700);
var a = e(17928),
    r = e(477782),
    s = e(367513),
    c = e(313961),
    l = e(977997),
    u = e(652215),
    d = e(375708);
function A(t, i) {
    let e = (0, a.bG)([c.A], () => t === c.A.getSelectedParticipantId(i), [i, t]);
    return (0, a.bG)([c.A, l.A], () => {
        let e = l.A.isInChannel(i, t) && l.A.hasVideo(i),
            n = c.A.getLayout(i),
            a = n === u.DUB.MINIMUM || n === u.DUB.NORMAL;
        return !e || a;
    }, [i, t])
        ? null
        : (0, n.jsx)(r.Dr, {
              id: "focus-video",
              label: e ? d.intl.string(d.t.KJPKUT) : d.intl.string(d.t["77cRN4"]),
              action: () => s.A.selectParticipant(i, e ? null : t),
          });
}
