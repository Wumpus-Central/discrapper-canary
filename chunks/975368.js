n.d(t, { Z: () => u }), n(789020);
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(378409),
    s = n(630388),
    r = n(49012),
    o = n(694859),
    d = n(981631),
    c = n(388032);
function u(e) {
    let t = (0, o.X)('use-save-voice-message-audio');
    return (0, s.yE)(e.flags, d.iLy.IS_VOICE_MESSAGE) && t
        ? (0, i.jsx)(l.sNh, {
              id: 'save-voice-message-audio',
              label: c.intl.string(c.t.vbAEaG),
              icon: l._8t,
              action: () => {
                  let t = (0, a.s$)(e.attachments[0].url);
                  (0, r.q)({ href: t });
              }
          })
        : null;
}
