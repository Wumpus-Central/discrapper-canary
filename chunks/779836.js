n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(666912),
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
    C = n(173324);
function x(e) {
    let { summary: t, channel: n } = e,
        l = (0, s.e7)([h.Z], () => h.Z.summaryFeedback(t)),
        r = (e, i) => {
            e.stopPropagation(),
                (0, p.Z)({
                    summary: t,
                    channel: n,
                    rating: i
                });
        },
        c = (0, o.useTransition)(
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
                      className: C.summaryFeedbackWrapper,
                      children: (0, i.jsxs)(a.animated.div, {
                          style: e,
                          className: C.summaryFeedback,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'interactive-normal',
                                  children: g.intl.string(g.t['5ZsiEx'])
                              }),
                              (0, i.jsx)(o.Clickable, {
                                  onClick: (e) => r(e, m.aZ.GOOD),
                                  children: (0, i.jsx)(u.Z, {
                                      className: C.thumbIcon,
                                      width: 12,
                                      height: 12
                                  })
                              }),
                              (0, i.jsx)(o.Clickable, {
                                  onClick: (e) => r(e, m.aZ.BAD),
                                  children: (0, i.jsx)(d.Z, {
                                      className: C.thumbIcon,
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
function v(e) {
    var t, n;
    let l,
        { item: a, channel: d, index: u } = e,
        p = (0, s.e7)([h.Z], () => h.Z.selectedSummary(d.id));
    if (null == p) return null;
    let m = null != a.unreadId,
        g = null != a.content;
    return (
        (l = g
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.TopicsIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: C.summaryStartIcon
                      }),
                      a.content
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x, {
                          summary: p,
                          channel: d
                      }),
                      (0, i.jsx)(o.TopicsIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: C.summaryEndIcon
                      })
                  ]
              })),
        (0, i.jsx)(
            c.Z,
            {
                className: r()(C.summaryDivider, g ? C.summaryDividerStart : C.summaryDividerEnd),
                contentClassName: g ? C.summaryStartContent : C.summaryEndContent,
                isUnread: m,
                id: m ? f.j1 : void 0,
                children: l
            },
            'divider-'.concat(null !== (n = null !== (t = a.contentKey) && void 0 !== t ? t : a.unreadId) && void 0 !== n ? n : u)
        )
    );
}
