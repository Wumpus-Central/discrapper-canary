r.d(t, { Z: () => _ }), r(47120);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    i = r.n(o),
    s = r(657707),
    l = r(793030),
    c = r(692547),
    u = r(481060),
    d = r(885006),
    p = r(810568),
    m = r(221370),
    f = r(388032),
    g = r(384370),
    b = r(837254);
function _(e) {
    let { detectedGame: t, trackAction: r } = e,
        [o, _] = a.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [h, O] = a.useState(!0),
        [y, v] = a.useState(!1),
        j = a.useRef(null),
        { width: x, height: P } = (0, d.Z)();
    return (a.useEffect(() => {
        let e = j.current;
        null != e && v(e.scrollHeight - e.clientHeight > 1 || !h);
    }, [j, x, P, h]),
    null == t.summary)
        ? null
        : (0, n.jsxs)('div', {
              className: i()(g.column, g.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)('div', {
                          className: i()(g.row, g.gapSm),
                          children: [
                              (0, n.jsx)(s.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, n.jsx)(l.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: o ? f.NW.format(f.t.aZ2iIi, { onShowOriginal: () => _(!1) }) : f.NW.format(f.t['/2ylFx'], { onShowTranslated: () => _(!0) })
                              })
                          ]
                      }),
                  (0, n.jsx)(l.xv, {
                      ref: j,
                      lineClamp: h ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: o ? t.summaryLocalized : t.summary
                  }),
                  y &&
                      (0, n.jsx)(u.P3F, {
                          className: g.clickable,
                          onClick: () => {
                              r(h ? p.as.ShowMore : p.as.ShowLess), O(!h);
                          },
                          children: (0, n.jsx)(l.xv, {
                              variant: 'text-sm/semibold',
                              children: h ? f.NW.string(f.t.lBeKY2) : f.NW.string(f.t['6MwJo6'])
                          })
                      }),
                  (0, n.jsx)(m.Z, {
                      className: b.platforms,
                      detectedGame: t
                  })
              ]
          });
}
