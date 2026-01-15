n.d(t, { Z: () => v }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    o = n(657707),
    s = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(885006),
    m = n(810568),
    f = n(221370),
    g = n(388032),
    p = n(452379),
    x = n(772770);
function v(e) {
    let { detectedGame: t, trackAction: n } = e,
        [r, v] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [h, j] = i.useState(!0),
        [b, I] = i.useState(!1),
        y = i.useRef(null),
        { width: O, height: w } = (0, u.Z)();
    return (i.useEffect(() => {
        let e = y.current;
        null != e && I(e.scrollHeight - e.clientHeight > 1 || !h);
    }, [y, O, w, h]),
    null == t.summary)
        ? null
        : (0, a.jsxs)("div", {
              className: l()(p.column, p.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: l()(p.row, p.gapSm),
                          children: [
                              (0, a.jsx)(o.PencilSparkleIcon, {
                                  color: c.Z.colors.TEXT_DEFAULT,
                                  size: "xs",
                              }),
                              (0, a.jsx)(s.xvT, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: r
                                      ? g.intl.format(g.t.aZ2iIp, { onShowOriginal: () => v(!1) })
                                      : g.intl.format(g.t["/2ylF4"], { onShowTranslated: () => v(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(s.xvT, {
                      ref: y,
                      lineClamp: h ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: r ? t.summaryLocalized : t.summary,
                  }),
                  b &&
                      (0, a.jsx)(d.P3F, {
                          className: p.clickable,
                          onClick: () => {
                              n(h ? m.as.ShowMore : m.as.ShowLess), j(!h);
                          },
                          children: (0, a.jsx)(s.xvT, {
                              variant: "text-sm/semibold",
                              children: h ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(f.Z, {
                      className: x.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
