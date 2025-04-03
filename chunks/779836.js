n.d(t, { Z: () => C });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(642128),
    a = n(399606),
    s = n(481060),
    c = n(511010),
    u = n(446183),
    d = n(677281),
    p = n(765104),
    h = n(477291),
    f = n(531578),
    m = n(959517),
    g = n(388032),
    b = n(613873);
function _(e) {
    let { summary: t, channel: n } = e,
        i = (0, a.e7)([p.Z], () => p.Z.summaryFeedback(t)),
        l = (e, r) => {
            e.stopPropagation(),
                (0, h.Z)({
                    summary: t,
                    channel: n,
                    rating: r
                });
        },
        c = (0, s.Yzy)(
            null == i,
            {
                enter: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                },
                leave: { opacity: 0 },
                config: {
                    mass: 1,
                    tension: 500,
                    friction: 18,
                    clamp: !0
                }
            },
            'animate-always'
        );
    return (0, r.jsx)(r.Fragment, {
        children: c((e, t) =>
            t
                ? (0, r.jsx)('div', {
                      className: b.summaryFeedbackWrapper,
                      children: (0, r.jsxs)(o.animated.div, {
                          style: e,
                          className: b.summaryFeedback,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'interactive-normal',
                                  children: g.NW.string(g.t['5ZsiEx'])
                              }),
                              (0, r.jsx)(s.P3F, {
                                  onClick: (e) => l(e, f.aZ.GOOD),
                                  children: (0, r.jsx)(d.Z, {
                                      className: b.thumbIcon,
                                      width: 12,
                                      height: 12
                                  })
                              }),
                              (0, r.jsx)(s.P3F, {
                                  onClick: (e) => l(e, f.aZ.BAD),
                                  children: (0, r.jsx)(u.Z, {
                                      className: b.thumbIcon,
                                      width: 12,
                                      height: 12
                                  })
                              })
                          ]
                      })
                  })
                : null
        )
    });
}
function C(e) {
    var t, n;
    let i,
        { item: o, channel: u, index: d } = e,
        h = (0, a.e7)([p.Z], () => p.Z.selectedSummary(u.id));
    if (null == h) return null;
    let f = null != o.unreadId,
        g = null != o.content;
    return (
        (i = g
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.sVe, {
                          size: 'xs',
                          color: 'currentColor',
                          className: b.summaryStartIcon
                      }),
                      o.content
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(_, {
                          summary: h,
                          channel: u
                      }),
                      (0, r.jsx)(s.sVe, {
                          size: 'xs',
                          color: 'currentColor',
                          className: b.summaryEndIcon
                      })
                  ]
              })),
        (0, r.jsx)(
            c.Z,
            {
                className: l()(b.summaryDivider, g ? b.summaryDividerStart : b.summaryDividerEnd),
                contentClassName: g ? b.summaryStartContent : b.summaryEndContent,
                isUnread: f,
                id: f ? m.j1 : void 0,
                children: i
            },
            'divider-'.concat(null != (n = null != (t = o.contentKey) ? t : o.unreadId) ? n : d)
        )
    );
}
