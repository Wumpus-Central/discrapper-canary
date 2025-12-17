n.d(t, { Z: () => d }), n(997841);
var r = n(54381);
n(473749);
var i = n(95015),
    l = n(481060),
    o = n(296182),
    a = n(49012),
    c = n(694859),
    s = n(981631),
    u = n(388032);
function d(e) {
    let t = (0, c.X)("use-save-voice-message-audio");
    return (0, i.yE)(e.flags, s.iLy.IS_VOICE_MESSAGE) && t
        ? (0, r.jsx)(l.sNh, {
              id: "save-voice-message-audio",
              label: u.intl.string(u.t.vbAEaA),
              icon: l._8t,
              action: () => {
                  let t = (0, o.s$)(e.attachments[0].url);
                  (0, a.q)({ href: t });
              },
          })
        : null;
}
