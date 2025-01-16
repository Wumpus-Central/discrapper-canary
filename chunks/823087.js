n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    s = n(481060),
    a = n(284056),
    l = n(131951),
    o = n(63063),
    c = n(981631),
    d = n(65154),
    u = n(388032),
    m = n(332348);
function g() {
    return (0, r.e7)([l.Z], () => l.Z.supports(d.AN.LOOPBACK))
        ? (0, i.jsx)('div', {
              className: m.micTest,
              children: (0, i.jsx)(a.Z, {
                  title: u.intl.string(u.t.gyljWF),
                  description: u.intl.string(u.t['8hhsCQ']),
                  notchBackground: a._.GRAY,
                  captionVoice: u.intl.string(u.t.bp3JOT),
                  captionNoVoice: (0, i.jsxs)(i.Fragment, {
                      children: [
                          u.intl.string(u.t['MA+OZm']),
                          (0, i.jsx)(s.Anchor, {
                              className: m.micTestHelpLink,
                              href: o.Z.getArticleURL(c.BhN.NO_INPUT_DETECTED),
                              children: u.intl.string(u.t.RYKKo6)
                          })
                      ]
                  }),
                  buttonTest: u.intl.string(u.t.c4qHt7),
                  buttonStop: u.intl.string(u.t.I6OnJy),
                  buttonClassName: m.micTestButton,
                  buttonColor: s.Button.Colors.BRAND,
                  location: {
                      page: c.ZY5.USER_SETTINGS,
                      section: c.jXE.SETTINGS_VOICE_AND_VIDEO
                  }
              })
          })
        : null;
}
