n.d(e, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(477782),
    r = n(367513),
    s = n(313961),
    d = n(977997),
    o = n(652215),
    u = n(985018);
function c(t, e) {
    let n = (0, l.bG)([s.A], () => t === s.A.getSelectedParticipantId(e), [e, t]);
    return (0, l.bG)([s.A, d.A], () => {
        let n = d.A.isInChannel(e, t) && d.A.hasVideo(e),
            i = s.A.getLayout(e),
            l = i === o.DUB.MINIMUM || i === o.DUB.NORMAL;
        return !n || l;
    }, [e, t])
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "focus-video",
              label: n ? u.intl.string(u.t.KJPKUT) : u.intl.string(u.t["77cRN4"]),
              action: () => r.A.selectParticipant(e, n ? null : t),
          });
}
