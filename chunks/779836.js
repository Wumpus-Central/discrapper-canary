n.d(t, { Z: () => v });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(81239),
    o = n(399606),
    s = n(481060),
    c = n(511010),
    u = n(446183),
    d = n(677281),
    p = n(765104),
    f = n(477291),
    h = n(531578),
    g = n(959517),
    m = n(388032),
    b = n(632991);
function y(e) {
    let { summary: t, channel: n } = e,
        i = (0, o.e7)([p.Z], () => p.Z.summaryFeedback(t)),
        l = (e, r) => {
            e.stopPropagation(),
                (0, f.Z)({
                    summary: t,
                    channel: n,
                    rating: r,
                });
        },
        c = (0, s.Yzy)(
            null == i,
            {
                enter: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                leave: { opacity: 0 },
                config: {
                    mass: 1,
                    tension: 500,
                    friction: 18,
                    clamp: !0,
                },
            },
            "animate-always",
        );
    return (0, r.jsx)(r.Fragment, {
        children: c((e, t) =>
            t
                ? (0, r.jsx)("div", {
                      className: b.summaryFeedbackWrapper,
                      children: (0, r.jsxs)(a.animated.div, {
                          style: e,
                          className: b.summaryFeedback,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: m.intl.string(m.t["5ZsiE9"]),
                              }),
                              (0, r.jsx)(s.P3F, {
                                  onClick: (e) => l(e, h.aZ.GOOD),
                                  children: (0, r.jsx)(d.Z, {
                                      className: b.thumbIcon,
                                      width: 12,
                                      height: 12,
                                  }),
                              }),
                              (0, r.jsx)(s.P3F, {
                                  onClick: (e) => l(e, h.aZ.BAD),
                                  children: (0, r.jsx)(u.Z, {
                                      className: b.thumbIcon,
                                      width: 12,
                                      height: 12,
                                  }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function v(e) {
    var t, n;
    let i,
        { item: a, channel: u, index: d } = e,
        f = (0, o.e7)([p.Z], () => p.Z.selectedSummary(u.id));
    if (null == f) return null;
    let h = null != a.unreadId,
        m = null != a.content;
    return (
        (i = m
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.sVe, {
                          size: "xs",
                          color: "currentColor",
                          className: b.summaryStartIcon,
                      }),
                      a.content,
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(y, {
                          summary: f,
                          channel: u,
                      }),
                      (0, r.jsx)(s.sVe, {
                          size: "xs",
                          color: "currentColor",
                          className: b.summaryEndIcon,
                      }),
                  ],
              })),
        (0, r.jsx)(
            c.Z,
            {
                className: l()(b.summaryDivider, m ? b.summaryDividerStart : b.summaryDividerEnd),
                contentClassName: m ? b.summaryStartContent : b.summaryEndContent,
                isUnread: h,
                id: h ? g.j1 : void 0,
                children: i,
            },
            "divider-".concat(null != (n = null != (t = a.contentKey) ? t : a.unreadId) ? n : d),
        )
    );
}
