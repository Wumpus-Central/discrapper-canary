n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(657707),
    s = n(793030),
    c = n(692547),
    d = n(481060),
    u = n(885006),
    m = n(810568),
    p = n(221370),
    g = n(388032),
    _ = n(561526),
    h = n(72020);
function f(e) {
    let { detectedGame: t, trackAction: n } = e,
        [a, f] = r.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [x, v] = r.useState(!0),
        [I, E] = r.useState(!1),
        C = r.useRef(null),
        { width: b, height: j } = (0, u.Z)();
    return (r.useEffect(() => {
        let e = C.current;
        null != e && E(e.scrollHeight - e.clientHeight > 1 || !x);
    }, [C, b, j, x]),
    null == t.summary)
        ? null
        : (0, i.jsxs)('div', {
              className: l()(_.column, _.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)('div', {
                          className: l()(_.row, _.gapSm),
                          children: [
                              (0, i.jsx)(o.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, i.jsx)(s.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: a ? g.intl.format(g.t.aZ2iIi, { onShowOriginal: () => f(!1) }) : g.intl.format(g.t['/2ylFx'], { onShowTranslated: () => f(!0) })
                              })
                          ]
                      }),
                  (0, i.jsx)(s.xv, {
                      ref: C,
                      lineClamp: x ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: a ? t.summaryLocalized : t.summary
                  }),
                  I &&
                      (0, i.jsx)(d.P3F, {
                          className: _.clickable,
                          onClick: () => {
                              n(x ? m.as.ShowMore : m.as.ShowLess), v(!x);
                          },
                          children: (0, i.jsx)(s.xv, {
                              variant: 'text-sm/semibold',
                              children: x ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t['6MwJo6'])
                          })
                      }),
                  (0, i.jsx)(p.Z, {
                      className: h.platforms,
                      detectedGame: t
                  })
              ]
          });
}
