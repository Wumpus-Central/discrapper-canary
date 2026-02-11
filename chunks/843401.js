n.d(t, { A: () => p, I: () => x });
var i = n(627968),
    s = n(503698),
    a = n.n(s),
    l = n(311907),
    r = n(397927),
    o = n(286237),
    c = n(769015),
    d = n(430452),
    u = n(975571),
    _ = n(942405),
    m = n(652215),
    A = n(985018),
    g = n(726097);
function h(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, i.jsx)("div", {
              className: g.zc,
              children: (0, i.jsx)(r.EpV, { size: "sm", color: r.LU0.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, i.jsxs)("div", {
              className: g.nt,
              children: [
                  (0, i.jsx)(c.A, { game: n, pid: t.pid, size: c.M.MEDIUM }),
                  (0, i.jsx)("div", {
                      className: g.Am,
                      children: (0, i.jsx)(r.EpV, { size: "sm", color: r.LU0.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function x(e) {
    let t = (0, l.bG)([d.Ay], () => d.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = (0, o.A)();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, _.NP)(),
        a = s && null != n && t === m.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? a : s, runningGame: n, runningGameApplication: i };
}
function p(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: s, runningGame: l, runningGameApplication: o } = x(n);
    return s
        ? (0, i.jsxs)("div", {
              className: a()(g.kL, t),
              children: [
                  (0, i.jsx)(h, { game: l, application: o }),
                  (0, i.jsxs)("div", {
                      className: g.FS,
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? A.intl.string(A.t.vxfv7v)
                                      : null != l
                                        ? A.intl.string(A.t.fAYU2G)
                                        : A.intl.string(A.t["9V4X/c"]),
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: A.intl.format(A.t["/y6htt"], {
                                  helpCenterLink: u.A.getArticleURL(m.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(r.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: A.intl.string(A.t["1iI46O"]),
                      onClick: function () {
                          (0, _.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
