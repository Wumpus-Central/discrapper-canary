t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(789020);
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(378409),
    a = t(630388),
    o = t(49012),
    s = t(694859),
    u = t(981631),
    d = t(388032);
function c(e) {
    let n = (0, s.X)('use-save-voice-message-audio');
    return (0, a.yE)(e.flags, u.iLy.IS_VOICE_MESSAGE) && n
        ? (0, i.jsx)(l.MenuItem, {
              id: 'save-voice-message-audio',
              label: d.intl.string(d.t.vbAEaG),
              icon: l.DownloadIcon,
              action: () => {
                  let n = (0, r.s$)(e.attachments[0].url);
                  (0, o.q)({ href: n });
              }
          })
        : null;
}
