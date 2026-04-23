i.d(e, { A: () => c });
var n = i(627968);
i(64700);
var l = i(17928),
    a = i(477782),
    r = i(367513),
    s = i(313961),
    d = i(977997),
    o = i(652215),
    u = i(985018);
function c(t, e) {
    let i = (0, l.bG)([s.A], () => t === s.A.getSelectedParticipantId(e), [e, t]);
    return (0, l.bG)([s.A, d.A], () => {
        let i = d.A.isInChannel(e, t) && d.A.hasVideo(e),
            n = s.A.getLayout(e),
            l = n === o.DUB.MINIMUM || n === o.DUB.NORMAL;
        return !i || l;
    }, [e, t])
        ? null
        : (0, n.jsx)(a.Dr, {
              id: "focus-video",
              label: i ? u.intl.string(u.t.KJPKUT) : u.intl.string(u.t["77cRN4"]),
              action: () => r.A.selectParticipant(e, i ? null : t),
          });
}
