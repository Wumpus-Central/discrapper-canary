n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(399606),
    s = n(481060),
    l = n(284056),
    a = n(131951),
    o = n(63063),
    c = n(981631),
    d = n(65154),
    u = n(388032),
    m = n(908406);
function p() {
    return (0, r.e7)([a.Z], () => a.Z.supports(d.AN.LOOPBACK))
        ? (0, i.jsx)('div', {
              className: m.micTest,
              children: (0, i.jsx)(l.Z, {
                  title: u.intl.string(u.t.gyljWF),
                  description: u.intl.string(u.t['8hhsCQ']),
                  notchBackground: l._.GRAY,
                  captionVoice: u.intl.string(u.t.bp3JOT),
                  captionNoVoice: (0, i.jsxs)(i.Fragment, {
                      children: [
                          u.intl.string(u.t['MA+OZm']),
                          (0, i.jsx)(s.eee, {
                              className: m.micTestHelpLink,
                              href: o.Z.getArticleURL(c.BhN.NO_INPUT_DETECTED),
                              children: u.intl.string(u.t.RYKKo6)
                          })
                      ]
                  }),
                  buttonTest: u.intl.string(u.t.c4qHt7),
                  buttonStop: u.intl.string(u.t.I6OnJy),
                  buttonClassName: m.micTestButton,
                  buttonColor: s.zxk.Colors.BRAND,
                  location: {
                      page: c.ZY5.USER_SETTINGS,
                      section: c.jXE.SETTINGS_VOICE_AND_VIDEO
                  }
              })
          })
        : null;
}
