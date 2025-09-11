r.d(t, { Z: () => x }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    a = r.n(l),
    s = r(657707),
    o = r(793030),
    c = r(692547),
    u = r(481060),
    d = r(885006),
    m = r(810568),
    p = r(221370),
    f = r(388032),
    g = r(226788),
    j = r(802318);
function x(e) {
    let { detectedGame: t, trackAction: r } = e,
        [l, x] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [O, h] = i.useState(!0),
        [v, b] = i.useState(!1),
        y = i.useRef(null),
        { width: P, height: w } = (0, d.Z)();
    return (i.useEffect(() => {
        let e = y.current;
        null != e && b(e.scrollHeight - e.clientHeight > 1 || !O);
    }, [y, P, w, O]),
    null == t.summary)
        ? null
        : (0, n.jsxs)("div", {
              className: a()(g.column, g.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)("div", {
                          className: a()(g.row, g.gapSm),
                          children: [
                              (0, n.jsx)(s.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: "xs",
                              }),
                              (0, n.jsx)(o.xvT, {
                                  variant: "text-xs/medium",
                                  color: "header-secondary",
                                  children: l
                                      ? f.intl.format(f.t.aZ2iIi, { onShowOriginal: () => x(!1) })
                                      : f.intl.format(f.t["/2ylFx"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, n.jsx)(o.xvT, {
                      ref: y,
                      lineClamp: O ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: l ? t.summaryLocalized : t.summary,
                  }),
                  v &&
                      (0, n.jsx)(u.P3F, {
                          className: g.clickable,
                          onClick: () => {
                              r(O ? m.as.ShowMore : m.as.ShowLess), h(!O);
                          },
                          children: (0, n.jsx)(o.xvT, {
                              variant: "text-sm/semibold",
                              children: O ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo6"]),
                          }),
                      }),
                  (0, n.jsx)(p.Z, {
                      className: j.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
