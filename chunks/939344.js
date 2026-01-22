n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(763754),
    a = n(888675),
    s = n(985018);
function o(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null;
}
function l(e) {
    let { message: t, compact: l, missed: c, joinable: u, usernameHook: d, onClickJoinCall: f } = e,
        p = (0, i.Ay)(t),
        _ = p.nick,
        h = d(p),
        m = o(t);
    return c
        ? (0, r.jsx)(a.A, {
              icon: n(130158),
              timestamp: t.timestamp,
              compact: l,
              children:
                  null != m
                      ? s.intl.format(s.t.AcqBmO, {
                            username: _,
                            usernameHook: h,
                            callDuration: m,
                        })
                      : s.intl.format(s.t["43phHx"], {
                            username: _,
                            usernameHook: h,
                        }),
          })
        : (0, r.jsxs)(a.A, {
              icon: n(175476),
              timestamp: t.timestamp,
              compact: l,
              children: [
                  null != m
                      ? s.intl.format(s.t["7TeC1P"], {
                            username: _,
                            usernameHook: h,
                            callDuration: m,
                        })
                      : s.intl.format(s.t.LuB5RD, {
                            username: _,
                            usernameHook: h,
                        }),
                  u
                      ? (0, r.jsx)(a.A.Action, {
                            onClick: f,
                            children: s.intl.string(s.t.oa9mvZ),
                        })
                      : null,
              ],
          });
}
