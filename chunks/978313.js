r.d(t, { Z: () => v }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(657707),
    s = r(793030),
    c = r(692547),
    u = r(481060),
    d = r(885006),
    m = r(810568),
    f = r(221370),
    g = r(388032),
    p = r(226788),
    x = r(802318);
function v(e) {
    let { detectedGame: t, trackAction: r } = e,
        [i, v] = a.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [h, j] = a.useState(!0),
        [b, O] = a.useState(!1),
        y = a.useRef(null),
        { width: _, height: I } = (0, d.Z)();
    return (a.useEffect(() => {
        let e = y.current;
        null != e && O(e.scrollHeight - e.clientHeight > 1 || !h);
    }, [y, _, I, h]),
    null == t.summary)
        ? null
        : (0, n.jsxs)("div", {
              className: l()(p.column, p.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)("div", {
                          className: l()(p.row, p.gapSm),
                          children: [
                              (0, n.jsx)(o.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: "xs",
                              }),
                              (0, n.jsx)(s.xv, {
                                  variant: "text-xs/medium",
                                  color: "header-secondary",
                                  children: i
                                      ? g.intl.format(g.t.aZ2iIi, { onShowOriginal: () => v(!1) })
                                      : g.intl.format(g.t["/2ylFx"], { onShowTranslated: () => v(!0) }),
                              }),
                          ],
                      }),
                  (0, n.jsx)(s.xv, {
                      ref: y,
                      lineClamp: h ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.summary,
                  }),
                  b &&
                      (0, n.jsx)(u.P3F, {
                          className: p.clickable,
                          onClick: () => {
                              r(h ? m.as.ShowMore : m.as.ShowLess), j(!h);
                          },
                          children: (0, n.jsx)(s.xv, {
                              variant: "text-sm/semibold",
                              children: h ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo6"]),
                          }),
                      }),
                  (0, n.jsx)(f.Z, {
                      className: x.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
