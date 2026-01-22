l.d(t, {
    A: () => A,
});
var r = l(627968),
    n = l(158954),
    i = l(630117),
    s = l(613943),
    o = l(71478),
    a = l(636086),
    u = l(180185),
    d = l(629721),
    c = l(269032),
    f = l(333354),
    p = l(985018),
    m = l(181978);

function v(e) {
    let { text: t } = e;
    return (0, r.jsx)("div", {
        className: m.ac,
        children: (0, r.jsx)(n.EYj, {
            variant: "text-sm/medium",
            children: t,
        }),
    });
}

function A(e) {
    let { guildId: t } = e,
        l = (0, o.A)(t),
        A = (0, i.A)(t),
        g = (0, s.A)(t),
        x = (0, c.A)(A.shouldShow || g.shouldShow);
    return l.shouldShow || A.shouldShow || g.shouldShow || x.shouldShow
        ? (0, r.jsxs)("div", {
              className: m.kL,
              children: [
                  (0, r.jsx)(n.EYj, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: p.intl.string(f.default["3FRirU"]),
                  }),
                  l.shouldShow &&
                      (0, r.jsx)(v, {
                          text: l.text,
                      }),
                  A.shouldShow &&
                      (0, r.jsx)(d.A, {
                          guildId: t,
                          powerupNames: A.expiringPowerupNames,
                          warnings: A.warnings,
                      }),
                  g.shouldShow &&
                      null != g.notificationConfig &&
                      (0, r.jsx)(u.A, {
                          notificationConfig: g.notificationConfig,
                          markAsDismissed: g.markAsDismissed,
                      }),
                  x.shouldShow &&
                      (0, r.jsx)(a.A, {
                          markAsDismissed: x.markAsDismissed,
                      }),
              ],
          })
        : null;
}
