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
    m = n(629721),
    _ = n(269032),
    A = n(652215),
    f = n(49999),
    g = n(136708),
    x = n(985018),
    v = n(612420);
function h(e) {
    let { text: t } = e;
    return (0, r.jsx)("div", {
        className: v.ac,
        children: (0, r.jsx)(i.EYj, { variant: "text-sm/medium", children: t }),
    });
}
function E(e) {
    let { guildId: t, showVideoCard: n = !1 } = e,
        E = (0, u.A)(t),
        b = (0, o.A)(t),
        I = (0, a.A)(t),
        j = n ? [l.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD] : [],
        [S, C] = (0, s.kn)(j),
        w = S === l.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        N = (0, _.A)(b.shouldShow || I.shouldShow || w);
    return E.shouldShow || b.shouldShow || I.shouldShow || N.shouldShow || w
        ? (0, r.jsxs)("div", {
              className: v.kL,
              children: [
                  (0, r.jsx)(i.EYj, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: x.intl.string(g.default["3FRirU"]),
                  }),
                  E.shouldShow && (0, r.jsx)(h, { text: E.text }),
                  b.shouldShow &&
                      (0, r.jsx)(m.A, { guildId: t, powerupNames: b.expiringPowerupNames, warnings: b.warnings }),
                  I.shouldShow &&
                      null != I.notificationConfig &&
                      (0, r.jsx)(p.A, { notificationConfig: I.notificationConfig, markAsDismissed: I.markAsDismissed }),
                  N.shouldShow && (0, r.jsx)(c.A, { markAsDismissed: N.markAsDismissed }),
                  w &&
                      (0, r.jsx)(d.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: A.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: A.ZSU.CARD,
                          },
                          onDismiss: () => C(f.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
