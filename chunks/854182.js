n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(367513),
    a = n(313961),
    c = n(985018);

function s(e) {
    let t = (0, l.bG)([a.A], () => a.A.getVoiceParticipantsHidden(e));
    return (0, r.jsx)(i.sLh, {
        id: "no-video-hide",
        label: c.intl.string(c.t.BL8ss6),
        checked: !t,
        action: () => o.A.toggleVoiceParticipantsHidden(e, !t),
    });
}
