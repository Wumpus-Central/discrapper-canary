n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(834730),
    a = n(349288),
    r = n(17143),
    o = n(430452),
    d = n(975571),
    u = n(652215),
    c = n(731854),
    g = n(985018),
    m = n(644426);
let _ = `${d.A.getArticleURL(u.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`;
function A() {
    return (0, s.bG)([o.Ay], () => o.Ay.supports(c.O5.LOOPBACK))
        ? (0, i.jsx)(r.A, {
              size: "md",
              notchBackground: r.V.GRAY,
              captionVoice: g.intl.string(g.t.bp3JOV),
              captionNoVoice: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(l.E, {
                          variant: "text-xs/semibold",
                          color: "text-default",
                          children: g.intl.string(g.t.bgn75v),
                      }),
                      g.intl.string(g.t["MA+OZh"]),
                      (0, i.jsx)(a.Anchor, {
                          className: m.X,
                          href: d.A.getArticleURL(u.MVz.NO_INPUT_DETECTED),
                          children: g.intl.string(g.t.RYKKox),
                      }),
                  ],
              }),
              helpText: g.intl.format(g.t["V+B3FH"], { guideURL: _ }),
              buttonTest: g.intl.string(g.t.gyljWE),
              buttonStop: g.intl.string(g.t.I6OnJ3),
              buttonVariant: "primary",
              location: { page: u.liQ.USER_SETTINGS, section: u.JJy.SETTINGS_VOICE_AND_VIDEO },
          })
        : null;
}
