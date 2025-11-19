n.d(t, { Z: () => h }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    s = n(657707),
    o = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(885006),
    m = n(810568),
    f = n(221370),
    g = n(388032),
    p = n(456486),
    x = n(593146);
function h(e) {
    let { detectedGame: t, trackAction: n } = e,
        [r, h] = l.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [v, j] = l.useState(!0),
        [O, y] = l.useState(!1),
        I = l.useRef(null),
        { width: b, height: E } = (0, u.Z)();
    return (l.useEffect(() => {
        let e = I.current;
        null != e && y(e.scrollHeight - e.clientHeight > 1 || !v);
    }, [I, b, E, v]),
    null == t.summary)
        ? null
        : (0, i.jsxs)("div", {
              className: a()(p.column, p.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)("div", {
                          className: a()(p.row, p.gapSm),
                          children: [
                              (0, i.jsx)(s.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: "xs",
                              }),
                              (0, i.jsx)(o.xvT, {
                                  variant: "text-xs/medium",
                                  color: "header-secondary",
                                  children: r
                                      ? g.intl.format(g.t.aZ2iIp, { onShowOriginal: () => h(!1) })
                                      : g.intl.format(g.t["/2ylF4"], { onShowTranslated: () => h(!0) }),
                              }),
                          ],
                      }),
                  (0, i.jsx)(o.xvT, {
                      ref: I,
                      lineClamp: v ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: r ? t.summaryLocalized : t.summary,
                  }),
                  O &&
                      (0, i.jsx)(d.P3F, {
                          className: p.clickable,
                          onClick: () => {
                              n(v ? m.as.ShowMore : m.as.ShowLess), j(!v);
                          },
                          children: (0, i.jsx)(o.xvT, {
                              variant: "text-sm/semibold",
                              children: v ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"]),
                          }),
                      }),
                  (0, i.jsx)(f.Z, {
                      className: x.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
