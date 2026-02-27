n.d(t, { A: () => h });
var r = n(627968),
    i = n(158954),
    l = n(554146),
    s = n(932001),
    a = n(630117),
    o = n(613943),
    d = n(71478),
    u = n(182859),
    c = n(636086),
    m = n(180185),
    p = n(629721),
    _ = n(269032),
    x = n(49999),
    A = n(333354),
    f = n(985018),
    g = n(181978);
function v(e) {
    let { text: t } = e;
    return (0, r.jsx)("div", {
        className: g.ac,
        children: (0, r.jsx)(i.EYj, { variant: "text-sm/medium", children: t }),
    });
}
function h(e) {
    let { guildId: t, showVideoCard: n = !1 } = e,
        h = (0, d.A)(t),
        b = (0, a.A)(t),
        j = (0, o.A)(t),
        E = n ? [l.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD] : [],
        [I, C] = (0, s.kn)(E),
        S = I === l.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        w = (0, _.A)(b.shouldShow || j.shouldShow || S);
    return h.shouldShow || b.shouldShow || j.shouldShow || w.shouldShow || S
        ? (0, r.jsxs)("div", {
              className: g.kL,
              children: [
                  (0, r.jsx)(i.EYj, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: f.intl.string(A.default["3FRirU"]),
                  }),
                  h.shouldShow && (0, r.jsx)(v, { text: h.text }),
                  b.shouldShow &&
                      (0, r.jsx)(p.A, { guildId: t, powerupNames: b.expiringPowerupNames, warnings: b.warnings }),
                  j.shouldShow &&
                      null != j.notificationConfig &&
                      (0, r.jsx)(m.A, { notificationConfig: j.notificationConfig, markAsDismissed: j.markAsDismissed }),
                  w.shouldShow && (0, r.jsx)(c.A, { markAsDismissed: w.markAsDismissed }),
                  S && (0, r.jsx)(u.A, { guildId: t, onDismiss: () => C(x.i.USER_DISMISS) }),
              ],
          })
        : null;
}
