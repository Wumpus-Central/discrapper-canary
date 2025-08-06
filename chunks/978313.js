r.d(t, { Z: () => j }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(657707),
    s = r(793030),
    c = r(692547),
    d = r(481060),
    u = r(885006),
    m = r(810568),
    g = r(221370),
    p = r(388032),
    f = r(263930),
    x = r(430871);
function j(e) {
    let { detectedGame: t, trackAction: r } = e,
        [i, j] = a.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [v, h] = a.useState(!0),
        [b, O] = a.useState(!1),
        y = a.useRef(null),
        { width: _, height: w } = (0, u.Z)();
    return (a.useEffect(() => {
        let e = y.current;
        null != e && O(e.scrollHeight - e.clientHeight > 1 || !v);
    }, [y, _, w, v]),
    null == t.summary)
        ? null
        : (0, n.jsxs)("div", {
              className: l()(f.column, f.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)("div", {
                          className: l()(f.row, f.gapSm),
                          children: [
                              (0, n.jsx)(o.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: "xs",
                              }),
                              (0, n.jsx)(s.xv, {
                                  variant: "text-xs/medium",
                                  color: "header-secondary",
                                  children: i
                                      ? p.intl.format(p.t.aZ2iIi, { onShowOriginal: () => j(!1) })
                                      : p.intl.format(p.t["/2ylFx"], { onShowTranslated: () => j(!0) }),
                              }),
                          ],
                      }),
                  (0, n.jsx)(s.xv, {
                      ref: y,
                      lineClamp: v ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.summary,
                  }),
                  b &&
                      (0, n.jsx)(d.P3F, {
                          className: f.clickable,
                          onClick: () => {
                              r(v ? m.as.ShowMore : m.as.ShowLess), h(!v);
                          },
                          children: (0, n.jsx)(s.xv, {
                              variant: "text-sm/semibold",
                              children: v ? p.intl.string(p.t.lBeKY2) : p.intl.string(p.t["6MwJo6"]),
                          }),
                      }),
                  (0, n.jsx)(g.Z, {
                      className: x.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
