n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(642128),
    s = n(399606),
    o = n(481060),
    c = n(511010),
    d = n(446183),
    u = n(677281),
    h = n(765104),
    p = n(477291),
    m = n(531578),
    f = n(959517),
    g = n(388032),
    _ = n(310846);
function C(e) {
    let { summary: t, channel: n } = e,
        l = (0, s.e7)([h.Z], () => h.Z.summaryFeedback(t)),
        a = (e, i) => {
            e.stopPropagation(),
                (0, p.Z)({
                    summary: t,
                    channel: n,
                    rating: i
                });
        },
        c = (0, o.Yzy)(
            null == l,
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
    return (0, i.jsx)(i.Fragment, {
        children: c((e, t) =>
            t
                ? (0, i.jsx)('div', {
                      className: _.summaryFeedbackWrapper,
                      children: (0, i.jsxs)(r.animated.div, {
                          style: e,
                          className: _.summaryFeedback,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'interactive-normal',
                                  children: g.intl.string(g.t['5ZsiEx'])
                              }),
                              (0, i.jsx)(o.P3F, {
                                  onClick: (e) => a(e, m.aZ.GOOD),
                                  children: (0, i.jsx)(u.Z, {
                                      className: _.thumbIcon,
                                      width: 12,
                                      height: 12
                                  })
                              }),
                              (0, i.jsx)(o.P3F, {
                                  onClick: (e) => a(e, m.aZ.BAD),
                                  children: (0, i.jsx)(d.Z, {
                                      className: _.thumbIcon,
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
function x(e) {
    var t, n;
    let l,
        { item: r, channel: d, index: u } = e,
        p = (0, s.e7)([h.Z], () => h.Z.selectedSummary(d.id));
    if (null == p) return null;
    let m = null != r.unreadId,
        g = null != r.content;
    return (
        (l = g
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.sVe, {
                          size: 'xs',
                          color: 'currentColor',
                          className: _.summaryStartIcon
                      }),
                      r.content
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(C, {
                          summary: p,
                          channel: d
                      }),
                      (0, i.jsx)(o.sVe, {
                          size: 'xs',
                          color: 'currentColor',
                          className: _.summaryEndIcon
                      })
                  ]
              })),
        (0, i.jsx)(
            c.Z,
            {
                className: a()(_.summaryDivider, g ? _.summaryDividerStart : _.summaryDividerEnd),
                contentClassName: g ? _.summaryStartContent : _.summaryEndContent,
                isUnread: m,
                id: m ? f.j1 : void 0,
                children: l
            },
            'divider-'.concat(null !== (n = null !== (t = r.contentKey) && void 0 !== t ? t : r.unreadId) && void 0 !== n ? n : u)
        )
    );
}
