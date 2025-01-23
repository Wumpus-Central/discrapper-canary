n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
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
    f = n(561526),
    h = n(72020);
function x(e) {
    let { detectedGame: t, trackAction: n } = e,
        [a, x] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [_, E] = i.useState(!0),
        [v, I] = i.useState(!1),
        C = i.useRef(null),
        { width: A, height: S } = (0, u.Z)();
    return (i.useEffect(() => {
        let e = C.current;
        null != e && I(e.scrollHeight - e.clientHeight > 1 || !_);
    }, [C, A, S, _]),
    null == t.summary)
        ? null
        : (0, r.jsxs)('div', {
              className: l()(f.column, f.gapMd),
              children: [
                  null != t.summaryLocalized &&
                      (0, r.jsxs)('div', {
                          className: l()(f.row, f.gapSm),
                          children: [
                              (0, r.jsx)(o.SxY, {
                                  color: c.Z.colors.HEADER_SECONDARY,
                                  size: 'xs'
                              }),
                              (0, r.jsx)(s.xv, {
                                  variant: 'text-xs/medium',
                                  color: 'header-secondary',
                                  children: a ? g.intl.format(g.t.aZ2iIi, { onShowOriginal: () => x(!1) }) : g.intl.format(g.t['/2ylFx'], { onShowTranslated: () => x(!0) })
                              })
                          ]
                      }),
                  (0, r.jsx)(s.xv, {
                      ref: C,
                      lineClamp: _ ? 8 : void 0,
                      variant: 'text-sm/normal',
                      children: a ? t.summaryLocalized : t.summary
                  }),
                  v &&
                      (0, r.jsx)(d.Clickable, {
                          className: f.clickable,
                          onClick: () => {
                              n(_ ? m.as.ShowMore : m.as.ShowLess), E(!_);
                          },
                          children: (0, r.jsx)(s.xv, {
                              variant: 'text-sm/semibold',
                              children: _ ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t['6MwJo6'])
                          })
                      }),
                  (0, r.jsx)(p.Z, {
                      className: h.platforms,
                      detectedGame: t
                  })
              ]
          });
}
