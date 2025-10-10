n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(657707),
    o = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(885006),
    m = n(810568),
    f = n(221370),
    p = n(388032),
    x = n(226788),
    g = n(802318);
function h(e) {
    let { detectedGame: t, trackAction: n } = e,
        [l, h] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [v, j] = i.useState(!0),
        [O, y] = i.useState(!1),
        I = i.useRef(null),
        { width: b, height: E } = (0, u.Z)();
    return (i.useEffect(() => {
        let e = I.current;
        null != e && y(e.scrollHeight - e.clientHeight > 1 || !v);
    }, [I, b, E, v]),
    null == t.summary)
        ? null
        : (0, r.jsxs)("div", {
              className: a()(x.column, x.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, r.jsxs)("div", {
                          className: a()(x.row, x.gapSm),
                          children: [
                              (0, r.jsx)(s.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: "xs",
                              }),
                              (0, r.jsx)(o.xvT, {
                                  variant: "text-xs/medium",
                                  color: "header-secondary",
                                  children: l
                                      ? p.intl.format(p.t.aZ2iIi, { onShowOriginal: () => h(!1) })
                                      : p.intl.format(p.t["/2ylFx"], { onShowTranslated: () => h(!0) }),
                              }),
                          ],
                      }),
                  (0, r.jsx)(o.xvT, {
                      ref: I,
                      lineClamp: v ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: l ? t.summaryLocalized : t.summary,
                  }),
                  O &&
                      (0, r.jsx)(d.P3F, {
                          className: x.clickable,
                          onClick: () => {
                              n(v ? m.as.ShowMore : m.as.ShowLess), j(!v);
                          },
                          children: (0, r.jsx)(o.xvT, {
                              variant: "text-sm/semibold",
                              children: v ? p.intl.string(p.t.lBeKY2) : p.intl.string(p.t["6MwJo6"]),
                          }),
                      }),
                  (0, r.jsx)(f.Z, {
                      className: g.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
