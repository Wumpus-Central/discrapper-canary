n.d(t, {
    A: () => h,
    I: () => f,
});
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    o = n(286237),
    c = n(769015),
    d = n(430452),
    u = n(975571),
    _ = n(942405),
    p = n(652215),
    m = n(985018),
    g = n(726097);

function A(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, r.jsx)("div", {
              className: g.zc,
              children: (0, r.jsx)(a.EpV, {
                  size: "sm",
                  color: a.LU0.colors.TEXT_FEEDBACK_WARNING,
              }),
          })
        : (0, r.jsxs)("div", {
              className: g.nt,
              children: [
                  (0, r.jsx)(c.A, {
                      game: n,
                      pid: t.pid,
                      size: c.M.MEDIUM,
                  }),
                  (0, r.jsx)("div", {
                      className: g.Am,
                      children: (0, r.jsx)(a.EpV, {
                          size: "sm",
                          color: a.LU0.colors.TEXT_FEEDBACK_WARNING,
                      }),
                  }),
              ],
          });
}

function f(e) {
    let t = (0, s.bG)([d.A], () => d.A.getMode()),
        { runningGame: n, runningGameApplication: r } = (0, o.A)();
    null == n || n.elevated || ((n = void 0), (r = void 0));
    let i = (0, _.NP)(),
        l = i && null != n && t === p.TBI.PUSH_TO_TALK;
    return {
        canPrompt: "voice" === e ? l : i,
        runningGame: n,
        runningGameApplication: r,
    };
}

function h(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: o } = f(n);
    return i
        ? (0, r.jsxs)("div", {
              className: l()(g.kL, t),
              children: [
                  (0, r.jsx)(A, {
                      game: s,
                      application: o,
                  }),
                  (0, r.jsxs)("div", {
                      className: g.FS,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? m.intl.string(m.t.vxfv7v)
                                      : null != s
                                        ? m.intl.string(m.t.fAYU2G)
                                        : m.intl.string(m.t["9V4X/c"]),
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: m.intl.format(m.t["/y6htt"], {
                                  helpCenterLink: u.A.getArticleURL(p.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(a.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["1iI46O"]),
                      onClick: function () {
                          (0, _.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
