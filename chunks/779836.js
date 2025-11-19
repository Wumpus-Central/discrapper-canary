n.d(t, { Z: () => C });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(636606),
    o = n(399606),
    s = n(481060),
    c = n(511010),
    u = n(446183),
    d = n(677281),
    p = n(765104),
    h = n(477291),
    f = n(531578),
    m = n(959517),
    g = n(388032),
    b = n(339060);
function y(e) {
    let { summary: t, channel: n } = e,
        r = (0, o.e7)([p.Z], () => p.Z.summaryFeedback(t)),
        l = (e, i) => {
            e.stopPropagation(),
                (0, h.Z)({
                    summary: t,
                    channel: n,
                    rating: i,
                });
        },
        c = (0, s.Yzy)(
            null == r,
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
    return (0, i.jsx)(i.Fragment, {
        children: c((e, t) =>
            t
                ? (0, i.jsx)("div", {
                      className: b.summaryFeedbackWrapper,
                      children: (0, i.jsxs)(a.animated.div, {
                          style: e,
                          className: b.summaryFeedback,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-normal",
                                  children: g.intl.string(g.t["5ZsiE9"]),
                              }),
                              (0, i.jsx)(s.P3F, {
                                  onClick: (e) => l(e, f.aZ.GOOD),
                                  children: (0, i.jsx)(d.Z, {
                                      className: b.thumbIcon,
                                      width: 12,
                                      height: 12,
                                  }),
                              }),
                              (0, i.jsx)(s.P3F, {
                                  onClick: (e) => l(e, f.aZ.BAD),
                                  children: (0, i.jsx)(u.Z, {
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
function C(e) {
    var t, n;
    let r,
        { item: a, channel: u, index: d } = e,
        h = (0, o.e7)([p.Z], () => p.Z.selectedSummary(u.id));
    if (null == h) return null;
    let f = null != a.unreadId,
        g = null != a.content;
    return (
        (r = g
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(s.sVe, {
                          size: "xs",
                          color: "currentColor",
                          className: b.summaryStartIcon,
                      }),
                      a.content,
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(y, {
                          summary: h,
                          channel: u,
                      }),
                      (0, i.jsx)(s.sVe, {
                          size: "xs",
                          color: "currentColor",
                          className: b.summaryEndIcon,
                      }),
                  ],
              })),
        (0, i.jsx)(
            c.Z,
            {
                className: l()(b.summaryDivider, g ? b.summaryDividerStart : b.summaryDividerEnd),
                contentClassName: g ? b.summaryStartContent : b.summaryEndContent,
                isUnread: f,
                id: f ? m.j1 : void 0,
                children: r,
            },
            "divider-".concat(null != (n = null != (t = a.contentKey) ? t : a.unreadId) ? n : d),
        )
    );
}
