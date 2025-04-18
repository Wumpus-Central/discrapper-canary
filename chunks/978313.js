r.d(t, { Z: () => E }), r(388685);
var n = r(200651),
    a = r(192379),
    i = r(120356),
    l = r.n(i),
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
        [i, E] = a.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [N, h] = a.useState(!0),
        [x, v] = a.useState(!1),
        j = a.useRef(null),
        { width: b, height: I } = (0, d.Z)();
    return (a.useEffect(() => {
        let e = j.current;
        null != e && v(e.scrollHeight - e.clientHeight > 1 || !N);
    }, [j, b, I, N]),
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
                                  children: i ? f.NW.format(f.t.aZ2iIi, { onShowOriginal: () => E(!1) }) : f.NW.format(f.t['/2ylFx'], { onShowTranslated: () => E(!0) })
                              })
                          ]
                      }),
                  (0, n.jsx)(o.xv, {
                      ref: j,
                      lineClamp: N ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: i ? t.summaryLocalized : t.summary
                  }),
                  x &&
                      (0, n.jsx)(u.P3F, {
                          className: p.clickable,
                          onClick: () => {
                              r(N ? m.as.ShowMore : m.as.ShowLess), h(!N);
                          },
                          children: (0, n.jsx)(o.xv, {
                              variant: 'text-sm/semibold',
                              children: N ? f.NW.string(f.t.lBeKY2) : f.NW.string(f.t['6MwJo6'])
                          })
                      }),
                  (0, n.jsx)(g.Z, {
                      className: O.platforms,
                      detectedGame: t
                  })
              ]
          });
}
