r.d(t, { Z: () => E }), r(388685);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    s = r(657707),
    o = r(793030),
    c = r(692547),
    u = r(481060),
    d = r(885006),
    m = r(810568),
    g = r(221370),
    f = r(388032),
    p = r(263930),
    O = r(430871);
function E(e) {
    let { detectedGame: t, trackAction: r } = e,
        [a, E] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [h, x] = i.useState(!0),
        [v, j] = i.useState(!1),
        b = i.useRef(null),
        { width: I, height: y } = (0, d.Z)();
    return (i.useEffect(() => {
        let e = b.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !h);
    }, [b, I, y, h]),
    null == t.summary)
        ? null
        : (0, n.jsxs)('div', {
              className: l()(p.column, p.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)('div', {
                          className: l()(p.row, p.gapSm),
                          children: [
                              (0, n.jsx)(s.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, n.jsx)(o.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: a ? f.intl.format(f.t.aZ2iIi, { onShowOriginal: () => E(!1) }) : f.intl.format(f.t['/2ylFx'], { onShowTranslated: () => E(!0) })
                              })
                          ]
                      }),
                  (0, n.jsx)(o.xv, {
                      ref: b,
                      lineClamp: h ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: a ? t.summaryLocalized : t.summary
                  }),
                  v &&
                      (0, n.jsx)(u.P3F, {
                          className: p.clickable,
                          onClick: () => {
                              r(h ? m.as.ShowMore : m.as.ShowLess), x(!h);
                          },
                          children: (0, n.jsx)(o.xv, {
                              variant: 'text-sm/semibold',
                              children: h ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t['6MwJo6'])
                          })
                      }),
                  (0, n.jsx)(g.Z, {
                      className: O.platforms,
                      detectedGame: t
                  })
              ]
          });
}
