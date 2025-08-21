n.d(t, { Z: () => E });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(137920),
    c = n(925329),
    u = n(131951),
    d = n(765504),
    f = n(865066),
    _ = n(981631),
    p = n(388032),
    h = n(685383);
function m(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, r.jsx)("div", {
              className: h.iconContainer,
              children: (0, r.jsx)(s.aNP, {
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
                      size: c.Z.Sizes.MEDIUM,
                  }),
                  (0, r.jsx)(s.aNP, {
                      className: h.warningCorner,
                      size: "refresh_sm",
                      color: s.TVs.colors.TEXT_FEEDBACK_WARNING,
                  }),
              ],
          });
}
function g(e, t) {
    return "voice" === e
        ? p.intl.string(p.t.vxfv7u)
        : null != t
          ? p.intl.string(p.t.fAYU2N)
          : p.intl.string(p.t["9V4X/f"]);
}
function E(e) {
    let { className: t, sourcePage: n } = e,
        { enabled: i } = d.Z.useConfig({ location: "settings-upsell" }),
        c = (0, o.e7)([u.Z], () => u.Z.getMode()),
        { runningGame: E, runningGameApplication: b } = (0, l.Z)();
    if (
        (null == E || E.elevated || ((E = void 0), (b = void 0)),
        !i || !(0, f.nZ)() || ("voice" === n && (null == E || c !== _.pM4.PUSH_TO_TALK)))
    )
        return null;
    function y() {
        (0, f.sU)();
    }
    return (0, r.jsxs)("div", {
        className: a()(h.container, t),
        children: [
            (0, r.jsx)(m, {
                game: E,
                application: b,
            }),
            (0, r.jsxs)("div", {
                className: h.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        children: g(n, E),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: p.intl.string(p.t["5q00+P"]),
                    }),
                ],
            }),
            (0, r.jsx)(s.zxk, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(p.t["1iI46O"]),
                onClick: y,
            }),
        ],
    });
}
