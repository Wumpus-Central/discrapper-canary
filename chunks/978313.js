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
    g = n(226788),
    x = n(802318);
function h(e) {
    let { detectedGame: t, trackAction: n } = e,
        [l, h] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [j, v] = i.useState(!0),
        [O, y] = i.useState(!1),
        I = i.useRef(null),
        { width: b, height: E } = (0, u.Z)();
    return (i.useEffect(() => {
        let e = I.current;
        null != e && y(e.scrollHeight - e.clientHeight > 1 || !j);
    }, [I, b, E, j]),
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
                              (0, r.jsx)(o.xvT, {
                                  variant: "text-xs/medium",
                                  color: "header-secondary",
                                  children: l
                                      ? p.intl.format(p.t.aZ2iIp, { onShowOriginal: () => h(!1) })
                                      : p.intl.format(p.t["/2ylF4"], { onShowTranslated: () => h(!0) }),
                              }),
                          ],
                      }),
                  (0, r.jsx)(o.xvT, {
                      ref: I,
                      lineClamp: j ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: l ? t.summaryLocalized : t.summary,
                  }),
                  O &&
                      (0, r.jsx)(d.P3F, {
                          className: g.clickable,
                          onClick: () => {
                              n(j ? m.as.ShowMore : m.as.ShowLess), v(!j);
                          },
                          children: (0, r.jsx)(o.xvT, {
                              variant: "text-sm/semibold",
                              children: j ? p.intl.string(p.t.lBeKY2) : p.intl.string(p.t["6MwJo/"]),
                          }),
                      }),
                  (0, r.jsx)(f.Z, {
                      className: x.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
