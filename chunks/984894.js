n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(367513),
    o = n(313961),
    s = n(977997),
    d = n(652215),
    c = n(985018);
function u(e, t) {
    let n = (0, i.bG)([o.A], () => e === o.A.getSelectedParticipantId(t), [t, e]);
    return (0, i.bG)([o.A, s.A], () => {
        let n = s.A.isInChannel(t, e) && s.A.hasVideo(t),
            r = o.A.getLayout(t),
            i = r === d.DUB.MINIMUM || r === d.DUB.NORMAL;
        return !n || i;
    }, [t, e])
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "focus-video",
              label: n ? c.intl.string(c.t.KJPKUT) : c.intl.string(c.t["77cRN4"]),
              action: () => a.A.selectParticipant(t, n ? null : e),
          });
}
