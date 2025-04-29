n.d(t, { Z: () => d }), n(997841);
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(296182),
    a = n(630388),
    o = n(49012),
    s = n(694859),
    c = n(981631),
    u = n(388032);
function d(e) {
    let t = (0, s.X)('use-save-voice-message-audio');
    return (0, a.yE)(e.flags, c.iLy.IS_VOICE_MESSAGE) && t
        ? (0, i.jsx)(r.sNh, {
              id: 'save-voice-message-audio',
              label: u.intl.string(u.t.vbAEaG),
              icon: r._8t,
              action: () => {
                  let t = (0, l.s$)(e.attachments[0].url);
                  (0, o.q)({ href: t });
              }
          })
        : null;
}
