n.d(t, { Z: () => d }), n(997841);
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(296182),
    a = n(630388),
    s = n(49012),
    l = n(694859),
    c = n(981631),
    u = n(388032);
function d(e) {
    let t = (0, l.X)("use-save-voice-message-audio");
    return (0, a.yE)(e.flags, c.iLy.IS_VOICE_MESSAGE) && t
        ? (0, r.jsx)(i.sNh, {
              id: "save-voice-message-audio",
              label: u.intl.string(u.t.vbAEaG),
              icon: i._8t,
              action: () => {
                  let t = (0, o.s$)(e.attachments[0].url);
                  (0, s.q)({ href: t });
              },
          })
        : null;
}
