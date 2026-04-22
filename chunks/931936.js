n.d(t, { A: () => E });
var r = n(627968),
    i = n(834730),
    l = n(554146),
    s = n(932001),
    a = n(630117),
    o = n(613943),
    d = n(71478),
    u = n(182859),
    c = n(636086),
    _ = n(180185),
    m = n(629721),
    p = n(269032),
    A = n(652215),
    x = n(49999),
    g = n(853513),
    f = n(985018),
    h = n(472485);
function v(e) {
    let { text: t } = e;
    return (0, r.jsx)("div", {
        className: h.ac,
        children: (0, r.jsx)(i.E, { variant: "text-sm/medium", children: t }),
    });
}
function E(e) {
    let { guildId: t } = e,
        n = (0, d.A)(t),
        E = (0, a.A)(t),
        S = (0, o.A)(t),
        I = [l.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD],
        [b, j] = (0, s.kn)(I),
        C = b === l.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        w = (0, p.A)(E.shouldShow || S.shouldShow || C);
    return n.shouldShow || E.shouldShow || S.shouldShow || w.shouldShow || C
        ? (0, r.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, r.jsx)(i.E, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: f.intl.string(g.default["3FRirU"]),
                  }),
                  n.shouldShow && (0, r.jsx)(v, { text: n.text }),
                  E.shouldShow &&
                      (0, r.jsx)(m.A, { guildId: t, powerupNames: E.expiringPowerupNames, warnings: E.warnings }),
                  S.shouldShow &&
                      null != S.notificationConfig &&
                      (0, r.jsx)(_.A, { notificationConfig: S.notificationConfig, markAsDismissed: S.markAsDismissed }),
                  w.shouldShow && (0, r.jsx)(c.A, { markAsDismissed: w.markAsDismissed }),
                  C &&
                      (0, r.jsx)(u.A, {
                          guildId: t,
                          analyticsLocation: {
                              page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: A.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                              object: A.ZSU.CARD,
                          },
                          onDismiss: () => j(x.i.USER_DISMISS),
                      }),
              ],
          })
        : null;
}
