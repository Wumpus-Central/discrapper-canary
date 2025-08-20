n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(657707),
    o = n(793030),
    c = n(692547),
    u = n(481060),
    d = n(885006),
    m = n(810568),
    p = n(221370),
    f = n(388032),
    g = n(226788),
    x = n(802318);
function j(e) {
    let { detectedGame: t, trackAction: n } = e,
        [l, j] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [h, v] = i.useState(!0),
        [O, b] = i.useState(!1),
        y = i.useRef(null),
        { width: I, height: P } = (0, d.Z)();
    return (i.useEffect(() => {
        let e = y.current;
        null != e && b(e.scrollHeight - e.clientHeight > 1 || !h);
    }, [y, I, P, h]),
    null == t.summary)
        ? null
        : (0, r.jsxs)("div", {
              className: a()(g.column, g.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, r.jsxs)("div", {
                          className: a()(g.row, g.gapSm),
                          children: [
                              (0, r.jsx)(s.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: "xs",
                              }),
                              (0, r.jsx)(o.xv, {
                                  variant: "text-xs/medium",
                                  color: "header-secondary",
                                  children: l
                                      ? f.intl.format(f.t.aZ2iIi, { onShowOriginal: () => j(!1) })
                                      : f.intl.format(f.t["/2ylFx"], { onShowTranslated: () => j(!0) }),
                              }),
                          ],
                      }),
                  (0, r.jsx)(o.xv, {
                      ref: y,
                      lineClamp: h ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: l ? t.summaryLocalized : t.summary,
                  }),
                  O &&
                      (0, r.jsx)(u.P3F, {
                          className: g.clickable,
                          onClick: () => {
                              n(h ? m.as.ShowMore : m.as.ShowLess), v(!h);
                          },
                          children: (0, r.jsx)(o.xv, {
                              variant: "text-sm/semibold",
                              children: h ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo6"]),
                          }),
                      }),
                  (0, r.jsx)(p.Z, {
                      className: x.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
