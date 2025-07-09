n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(399606),
    s = n(755721),
    a = n(481060),
    l = n(284056),
    o = n(131951),
    c = n(63063),
    d = n(981631),
    u = n(65154),
    m = n(388032),
    p = n(908406);
function g() {
    return (0, r.e7)([o.Z], () => o.Z.supports(u.AN.LOOPBACK))
        ? (0, i.jsx)('div', {
              className: p.micTest,
              children: (0, i.jsx)(l.Z, {
                  title: m.intl.string(m.t.gyljWF),
                  description: m.intl.string(m.t['8hhsCQ']),
                  notchBackground: l._.GRAY,
                  captionVoice: m.intl.string(m.t.bp3JOT),
                  captionNoVoice: (0, i.jsxs)(i.Fragment, {
                      children: [
                          m.intl.string(m.t['MA+OZm']),
                          (0, i.jsx)(a.eee, {
                              className: p.micTestHelpLink,
                              href: c.Z.getArticleURL(d.BhN.NO_INPUT_DETECTED),
                              children: m.intl.string(m.t.RYKKo6)
                          })
                      ]
                  }),
                  buttonTest: m.intl.string(m.t.c4qHt7),
                  buttonStop: m.intl.string(m.t.I6OnJy),
                  buttonClassName: p.micTestButton,
                  buttonColor: s.zx.Colors.BRAND,
                  location: {
                      page: d.ZY5.USER_SETTINGS,
                      section: d.jXE.SETTINGS_VOICE_AND_VIDEO
                  }
              })
          })
        : null;
}
