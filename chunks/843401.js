n.d(t, { A: () => p, I: () => h });
var i = n(627968),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    l = n(397927),
    o = n(286237),
    c = n(769015),
    d = n(430452),
    u = n(975571),
    _ = n(942405),
    m = n(652215),
    A = n(985018),
    g = n(726097);
function E(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, i.jsx)("div", {
              className: g.zc,
              children: (0, i.jsx)(l.EpV, { size: "sm", color: l.LU0.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, i.jsxs)("div", {
              className: g.nt,
              children: [
                  (0, i.jsx)(c.A, { game: n, pid: t.pid, size: c.M.MEDIUM }),
                  (0, i.jsx)("div", {
                      className: g.Am,
                      children: (0, i.jsx)(l.EpV, { size: "sm", color: l.LU0.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function h(e) {
    let t = (0, a.bG)([d.A], () => d.A.getMode()),
        { runningGame: n, runningGameApplication: i } = (0, o.A)();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, _.NP)(),
        r = s && null != n && t === m.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? r : s, runningGame: n, runningGameApplication: i };
}
function p(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: s, runningGame: a, runningGameApplication: o } = h(n);
    return s
        ? (0, i.jsxs)("div", {
              className: r()(g.kL, t),
              children: [
                  (0, i.jsx)(E, { game: a, application: o }),
                  (0, i.jsxs)("div", {
                      className: g.FS,
                      children: [
                          (0, i.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? A.intl.string(A.t.vxfv7v)
                                      : null != a
                                        ? A.intl.string(A.t.fAYU2G)
                                        : A.intl.string(A.t["9V4X/c"]),
                          }),
                          (0, i.jsx)(l.Text, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: A.intl.format(A.t["/y6htt"], {
                                  helpCenterLink: u.A.getArticleURL(m.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(l.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: A.intl.string(A.t["1iI46O"]),
                      onClick: function () {
                          (0, _.sL)(n + (null != a ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
