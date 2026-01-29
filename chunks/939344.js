n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(763754),
    l = n(888675),
    a = n(502197),
    s = n(985018);

function o(e) {
    let { message: t, compact: o, missed: c, joinable: u, usernameHook: d, onClickJoinCall: p } = e,
        m = (0, i.Ay)(t),
        f = m.nick,
        g = d(m),
        h = (0, a.K)(t);
    return c
        ? (0, r.jsx)(l.A, {
              icon: n(130158),
              timestamp: t.timestamp,
              compact: o,
              children:
                  null != h
                      ? s.intl.format(s.t.AcqBmO, {
                            username: f,
                            usernameHook: g,
                            callDuration: h,
                        })
                      : s.intl.format(s.t["43phHx"], {
                            username: f,
                            usernameHook: g,
                        }),
          })
        : (0, r.jsxs)(l.A, {
              icon: n(175476),
              timestamp: t.timestamp,
              compact: o,
              children: [
                  null != h
                      ? s.intl.format(s.t["7TeC1P"], {
                            username: f,
                            usernameHook: g,
                            callDuration: h,
                        })
                      : s.intl.format(s.t.LuB5RD, {
                            username: f,
                            usernameHook: g,
                        }),
                  u
                      ? (0, r.jsx)(l.A.Action, {
                            onClick: p,
                            children: s.intl.string(s.t.oa9mvZ),
                        })
                      : null,
              ],
          });
}
