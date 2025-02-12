n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(657707),
    s = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(885006),
    m = n(810568),
    _ = n(221370),
    g = n(388032),
    p = n(959559),
    f = n(445904);
function h(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, h] = a.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [x, v] = a.useState(!0),
        [I, C] = a.useState(!1),
        E = a.useRef(null),
        { width: b, height: T } = (0, u.Z)();
    return (a.useEffect(() => {
        let e = E.current;
        null != e && C(e.scrollHeight - e.clientHeight > 1 || !x);
    }, [E, b, T, x]),
    null == t.summary)
        ? null
        : (0, r.jsxs)('div', {
              className: o()(p.column, p.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, r.jsxs)('div', {
                          className: o()(p.row, p.gapSm),
                          children: [
                              (0, r.jsx)(l.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, r.jsx)(s.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: i ? g.intl.format(g.t.aZ2iIi, { onShowOriginal: () => h(!1) }) : g.intl.format(g.t['/2ylFx'], { onShowTranslated: () => h(!0) })
                              })
                          ]
                      }),
                  (0, r.jsx)(s.xv, {
                      ref: E,
                      lineClamp: x ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: i ? t.summaryLocalized : t.summary
                  }),
                  I &&
                      (0, r.jsx)(d.P3F, {
                          className: p.clickable,
                          onClick: () => {
                              n(x ? m.as.ShowMore : m.as.ShowLess), v(!x);
                          },
                          children: (0, r.jsx)(s.xv, {
                              variant: 'text-sm/semibold',
                              children: x ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t['6MwJo6'])
                          })
                      }),
                  (0, r.jsx)(_.Z, {
                      className: f.platforms,
                      detectedGame: t
                  })
              ]
          });
}
