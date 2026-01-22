n.d(t, {
    A: () => b,
    I: () => E,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(286237),
    c = n(769015),
    u = n(430452),
    d = n(975571),
    f = n(942405),
    p = n(652215),
    _ = n(985018),
    h = n(726097);
function m(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, r.jsx)("div", {
              className: h.zc,
              children: (0, r.jsx)(o.EpV, {
                  size: "sm",
                  color: o.LU0.colors.TEXT_FEEDBACK_WARNING,
              }),
          })
        : (0, r.jsxs)("div", {
              className: h.nt,
              children: [
                  (0, r.jsx)(c.A, {
                      game: n,
                      pid: t.pid,
                      size: c.M.MEDIUM,
                  }),
                  (0, r.jsx)("div", {
                      className: h.Am,
                      children: (0, r.jsx)(o.EpV, {
                          size: "sm",
                          color: o.LU0.colors.TEXT_FEEDBACK_WARNING,
                      }),
                  }),
              ],
          });
}
function g(e, t) {
    return "voice" === e
        ? _.intl.string(_.t.vxfv7v)
        : null != t
          ? _.intl.string(_.t.fAYU2G)
          : _.intl.string(_.t["9V4X/c"]);
}
function E(e) {
    let t = (0, s.bG)([u.A], () => u.A.getMode()),
        { runningGame: n, runningGameApplication: r } = (0, l.A)();
    null == n || n.elevated || ((n = void 0), (r = void 0));
    let i = (0, f.NP)(),
        a = i && null != n && t === p.TBI.PUSH_TO_TALK;
    return {
        canPrompt: "voice" === e ? a : i,
        runningGame: n,
        runningGameApplication: r,
    };
}
function b(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = E(n);
    if (!i) return null;
    function c() {
        (0, f.sL)(n + (null != s ? "-with-game" : "-no-game"));
    }
    return (0, r.jsxs)("div", {
        className: a()(h.kL, t),
        children: [
            (0, r.jsx)(m, {
                game: s,
                application: l,
            }),
            (0, r.jsxs)("div", {
                className: h.FS,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: g(n, s),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: _.intl.format(_.t["/y6htt"], {
                            helpCenterLink: d.A.getArticleURL(p.MVz.SYSTEM_SERVICE),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(o.Button, {
                variant: "secondary",
                size: "sm",
                text: _.intl.string(_.t["1iI46O"]),
                onClick: c,
            }),
        ],
    });
}
