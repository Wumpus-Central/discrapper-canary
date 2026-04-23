n.d(t, { A: () => S, I: () => T });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(695366),
    o = n(827734),
    d = n(834730),
    u = n(821609),
    c = n(286237),
    g = n(769015),
    m = n(430452),
    _ = n(975571),
    A = n(942405),
    h = n(652215),
    p = n(985018),
    x = n(364094);
function E(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, i.jsx)("div", {
              className: x.zc,
              children: (0, i.jsx)(r.E, { size: "sm", color: o.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, i.jsxs)("div", {
              className: x.nt,
              children: [
                  (0, i.jsx)(g.A, { game: n, pid: t.pid, size: g.M.MEDIUM }),
                  (0, i.jsx)("div", {
                      className: x.Am,
                      children: (0, i.jsx)(r.E, { size: "sm", color: o.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function T(e) {
    let t = (0, a.bG)([m.Ay], () => m.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = (0, c.A)();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, A.NP)(),
        l = s && null != n && t === h.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function S(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: s, runningGame: a, runningGameApplication: r } = T(n);
    return s
        ? (0, i.jsxs)("div", {
              className: l()(x.kL, t),
              children: [
                  (0, i.jsx)(E, { game: a, application: r }),
                  (0, i.jsxs)("div", {
                      className: x.FS,
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? p.intl.string(p.t.vxfv7v)
                                      : null != a
                                        ? p.intl.string(p.t.fAYU2G)
                                        : p.intl.string(p.t["9V4X/c"]),
                          }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: p.intl.format(p.t["/y6htt"], {
                                  helpCenterLink: _.A.getArticleURL(h.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(u.$, {
                      variant: "secondary",
                      size: "sm",
                      text: p.intl.string(p.t["1iI46O"]),
                      onClick: function () {
                          (0, A.sL)(n + (null != a ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
