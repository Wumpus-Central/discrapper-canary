n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(717976),
    s = n(399606),
    l = n(481060),
    c = n(511010),
    u = n(446183),
    d = n(677281),
    f = n(765104),
    _ = n(477291),
    p = n(531578),
    h = n(959517),
    m = n(388032),
    g = n(363350);
function E(e) {
    let { summary: t, channel: n } = e,
        i = null == (0, s.e7)([f.Z], () => f.Z.summaryFeedback(t)),
        o = (e, r) => {
            e.stopPropagation(),
                (0, _.Z)({
                    summary: t,
                    channel: n,
                    rating: r,
                });
        },
        c = (0, l.Yzy)(
            i,
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
                      className: g.summaryFeedbackWrapper,
                      children: (0, r.jsxs)(a.animated.div, {
                          style: e,
                          className: g.summaryFeedback,
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-normal",
                                  children: m.intl.string(m.t["5ZsiEx"]),
                              }),
                              (0, r.jsx)(l.P3F, {
                                  onClick: (e) => o(e, p.aZ.GOOD),
                                  children: (0, r.jsx)(d.Z, {
                                      className: g.thumbIcon,
                                      width: 12,
                                      height: 12,
                                  }),
                              }),
                              (0, r.jsx)(l.P3F, {
                                  onClick: (e) => o(e, p.aZ.BAD),
                                  children: (0, r.jsx)(u.Z, {
                                      className: g.thumbIcon,
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
function b(e) {
    var t, n;
    let i,
        { item: a, channel: u, index: d } = e,
        _ = (0, s.e7)([f.Z], () => f.Z.selectedSummary(u.id));
    if (null == _) return null;
    let p = null != a.unreadId,
        m = null != a.content;
    return (
        (i = m
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.sVe, {
                          size: "xs",
                          color: "currentColor",
                          className: g.summaryStartIcon,
                      }),
                      a.content,
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(E, {
                          summary: _,
                          channel: u,
                      }),
                      (0, r.jsx)(l.sVe, {
                          size: "xs",
                          color: "currentColor",
                          className: g.summaryEndIcon,
                      }),
                  ],
              })),
        (0, r.jsx)(
            c.Z,
            {
                className: o()(g.summaryDivider, m ? g.summaryDividerStart : g.summaryDividerEnd),
                contentClassName: m ? g.summaryStartContent : g.summaryEndContent,
                isUnread: p,
                id: p ? h.j1 : void 0,
                children: i,
            },
            "divider-".concat(null != (n = null != (t = a.contentKey) ? t : a.unreadId) ? n : d),
        )
    );
}
