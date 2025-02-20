n.d(t, { Z: () => d }), n(789020);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(378409),
    a = n(630388),
    o = n(49012),
    s = n(694859),
    c = n(981631),
    u = n(388032);
function d(e) {
    let t = (0, s.X)('use-save-voice-message-audio');
    return (0, a.yE)(e.flags, c.iLy.IS_VOICE_MESSAGE) && t
        ? (0, r.jsx)(i.sNh, {
              id: 'save-voice-message-audio',
              label: u.NW.string(u.t.vbAEaG),
              icon: i._8t,
              action: () => {
                  let t = (0, l.s$)(e.attachments[0].url);
                  (0, o.q)({ href: t });
              }
          })
        : null;
}
