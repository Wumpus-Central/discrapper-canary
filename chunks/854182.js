n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(367513),
    r = n(313961),
    o = n(985018);
function c(e) {
    let t = (0, l.bG)([r.A], () => r.A.getVoiceParticipantsHidden(e));
    return (0, i.jsx)(s.sLh, {
        id: "no-video-hide",
        label: o.intl.string(o.t.BL8ss6),
        checked: !t,
        action: () => a.A.toggleVoiceParticipantsHidden(e, !t),
    });
}
