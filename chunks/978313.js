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
    g = n(221370),
    f = n(388032),
    p = n(226788),
    x = n(802318);
function v(e) {
    let { detectedGame: t, trackAction: n } = e,
        [r, v] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [h, j] = i.useState(!0),
        [b, _] = i.useState(!1),
        y = i.useRef(null),
        { width: I, height: O } = (0, u.Z)();
    return (i.useEffect(() => {
        let e = y.current;
        null != e && _(e.scrollHeight - e.clientHeight > 1 || !h);
    }, [y, I, O, h]),
    null == t.summary)
        ? null
        : (0, a.jsxs)("div", {
              className: l()(p.column, p.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: l()(p.row, p.gapSm),
                          children: [
                              (0, a.jsx)(o.SxY, {
                                  color: c.Z.colors.TEXT_DEFAULT,
                                  size: "xs",
                              }),
                              (0, a.jsx)(s.xvT, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: r
                                      ? f.intl.format(f.t.aZ2iIp, { onShowOriginal: () => v(!1) })
                                      : f.intl.format(f.t["/2ylF4"], { onShowTranslated: () => v(!0) }),
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
                              children: h ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(g.Z, {
                      className: x.platforms,
                      detectedGame: t,
                  }),
              ],
          });
}
