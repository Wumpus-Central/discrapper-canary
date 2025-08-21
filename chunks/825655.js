n.d(t, { Z: () => g });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(137920),
    c = n(925329),
    u = n(131951),
    d = n(865066),
    f = n(981631),
    _ = n(388032),
    p = n(685383);
function h(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, r.jsx)("div", {
              className: p.iconContainer,
              children: (0, r.jsx)(s.Mgn, {
                  size: "sm",
                  color: s.TVs.colors.TEXT_FEEDBACK_WARNING,
              }),
          })
        : (0, r.jsxs)("div", {
              className: p.gameIconContainer,
              children: [
                  (0, r.jsx)(c.Z, {
                      game: n,
                      pid: t.pid,
                      size: c.Z.Sizes.MEDIUM,
                  }),
                  (0, r.jsx)("div", {
                      className: p.warningCorner,
                      children: (0, r.jsx)(s.Mgn, {
                          size: "sm",
                          color: s.TVs.colors.TEXT_FEEDBACK_WARNING,
                      }),
                  }),
              ],
          });
}
function m(e, t) {
    return "voice" === e
        ? _.intl.string(_.t.vxfv7u)
        : null != t
          ? _.intl.string(_.t.fAYU2N)
          : _.intl.string(_.t["9V4X/f"]);
}
function g(e) {
    let { className: t, sourcePage: n } = e,
        i = (0, o.e7)([u.Z], () => u.Z.getMode()),
        { runningGame: c, runningGameApplication: g } = (0, l.Z)();
    if (
        (null == c || c.elevated || ((c = void 0), (g = void 0)),
        !(0, d.hi)() || ("voice" === n && (null == c || i !== f.pM4.PUSH_TO_TALK)))
    )
        return null;
    function E() {
        (0, d.sU)();
    }
    return (0, r.jsxs)("div", {
        className: a()(p.container, t),
        children: [
            (0, r.jsx)(h, {
                game: c,
                application: g,
            }),
            (0, r.jsxs)("div", {
                className: p.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        children: m(n, c),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: _.intl.string(_.t["5q00+P"]),
                    }),
                ],
            }),
            (0, r.jsx)(s.zxk, {
                variant: "secondary",
                size: "sm",
                text: _.intl.string(_.t["1iI46O"]),
                onClick: E,
            }),
        ],
    });
}
