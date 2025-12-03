n.d(t, { Z: () => h }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    s = n(657707),
    o = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(885006),
    m = n(810568),
    g = n(221370),
    f = n(388032),
    p = n(226788),
    x = n(802318);
function h(e) {
    let { detectedGame: t, trackAction: n } = e,
        [r, h] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [v, j] = i.useState(!0),
        [_, I] = i.useState(!1),
        b = i.useRef(null),
        { width: O, height: y } = (0, u.Z)();
    return (i.useEffect(() => {
        let e = b.current;
        null != e && I(e.scrollHeight - e.clientHeight > 1 || !v);
    }, [b, O, y, v]),
    null == t.summary)
        ? null
        : (0, a.jsxs)("div", {
              className: l()(p.column, p.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: l()(p.row, p.gapSm),
                          children: [
                              (0, a.jsx)(s.SxY, {
                                  color: c.Z.colors.TEXT_DEFAULT,
                                  size: "xs",
                              }),
                              (0, a.jsx)(o.xvT, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: r
                                      ? f.intl.format(f.t.aZ2iIp, { onShowOriginal: () => h(!1) })
                                      : f.intl.format(f.t["/2ylF4"], { onShowTranslated: () => h(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(o.xvT, {
                      ref: b,
                      lineClamp: v ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: r ? t.summaryLocalized : t.summary,
                  }),
                  _ &&
                      (0, a.jsx)(d.P3F, {
                          className: p.clickable,
                          onClick: () => {
                              n(v ? m.as.ShowMore : m.as.ShowLess), j(!v);
                          },
                          children: (0, a.jsx)(o.xvT, {
                              variant: "text-sm/semibold",
                              children: v ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(g.Z, {
                      className: x.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
