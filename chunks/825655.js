n.d(t, {
    Z: () => b,
    o: () => E,
});
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(137920),
    c = n(925329),
    u = n(131951),
    d = n(63063),
    f = n(865066),
    _ = n(981631),
    p = n(388032),
    h = n(685383);
function m(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, r.jsx)("div", {
              className: h.iconContainer,
              children: (0, r.jsx)(s.Mgn, {
                  size: "sm",
                  color: s.TVs.colors.TEXT_FEEDBACK_WARNING,
              }),
          })
        : (0, r.jsxs)("div", {
              className: h.gameIconContainer,
              children: [
                  (0, r.jsx)(c.Z, {
                      game: n,
                      pid: t.pid,
                      size: c.A.MEDIUM,
                  }),
                  (0, r.jsx)("div", {
                      className: h.warningCorner,
                      children: (0, r.jsx)(s.Mgn, {
                          size: "sm",
                          color: s.TVs.colors.TEXT_FEEDBACK_WARNING,
                      }),
                  }),
              ],
          });
}
function g(e, t) {
    return "voice" === e
        ? p.intl.string(p.t.vxfv7v)
        : null != t
          ? p.intl.string(p.t.fAYU2G)
          : p.intl.string(p.t["9V4X/c"]);
}
function E(e) {
    let t = (0, o.e7)([u.Z], () => u.Z.getMode()),
        { runningGame: n, runningGameApplication: r } = (0, l.Z)();
    null == n || n.elevated || ((n = void 0), (r = void 0));
    let i = (0, f.hi)(),
        a = i && null != n && t === _.pM4.PUSH_TO_TALK;
    return {
        canPrompt: "voice" === e ? a : i,
        runningGame: n,
        runningGameApplication: r,
    };
}
function b(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: o, runningGameApplication: l } = E(n);
    if (!i) return null;
    function c() {
        (0, f.sU)(n + (null != o ? "-with-game" : "-no-game"));
    }
    return (0, r.jsxs)("div", {
        className: a()(h.container, t),
        children: [
            (0, r.jsx)(m, {
                game: o,
                application: l,
            }),
            (0, r.jsxs)("div", {
                className: h.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        children: g(n, o),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: p.intl.format(p.t["/y6htt"], {
                            helpCenterLink: d.Z.getArticleURL(_.BhN.SYSTEM_SERVICE),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(p.t["1iI46O"]),
                onClick: c,
            }),
        ],
    });
}
