n.d(t, { A: () => E });
var r = n(627968),
    i = n(158954),
    l = n(554146),
    s = n(932001),
    o = n(630117),
    a = n(613943),
    u = n(71478),
    d = n(182859),
    c = n(636086),
    p = n(180185),
    _ = n(629721),
    m = n(269032),
    f = n(652215),
    A = n(49999),
    g = n(333354),
    x = n(985018),
    v = n(319733);
function h(e) {
    let { text: t } = e;
    return (0, r.jsx)("div", {
        className: v.ac,
        children: (0, r.jsx)(i.EYj, { variant: "text-sm/medium", children: t }),
    });
}
function E(e) {
    let { guildId: t } = e,
        n = (0, u.A)(t),
        E = (0, o.A)(t),
        I = (0, a.A)(t),
        b = [l.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [j, S] = (0, s.kn)(b),
        C = j === l.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        w = (0, m.A)(E.shouldShow || I.shouldShow || C);
    return n.shouldShow || E.shouldShow || I.shouldShow || w.shouldShow || C
        ? (0, r.jsxs)("div", {
              className: v.kL,
              children: [
                  (0, r.jsx)(i.EYj, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: x.intl.string(g.default["3FRirU"]),
                  }),
                  n.shouldShow && (0, r.jsx)(h, { text: n.text }),
                  E.shouldShow &&
                      (0, r.jsx)(_.A, { guildId: t, powerupNames: E.expiringPowerupNames, warnings: E.warnings }),
                  I.shouldShow &&
                      null != I.notificationConfig &&
                      (0, r.jsx)(p.A, { notificationConfig: I.notificationConfig, markAsDismissed: I.markAsDismissed }),
                  w.shouldShow && (0, r.jsx)(c.A, { markAsDismissed: w.markAsDismissed }),
                  C &&
                      (0, r.jsx)(d.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: f.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: f.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: f.ZSU.CARD,
                          },
                          onDismiss: () => S(A.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
