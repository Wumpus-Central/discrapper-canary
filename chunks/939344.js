n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(763754),
    l = n(888675),
    a = n(985018);

function s(e) {
    let t,
        { message: s, compact: o, missed: c, joinable: u, usernameHook: d, onClickJoinCall: p } = e,
        m = (0, i.Ay)(s),
        f = m.nick,
        g = d(m),
        h = null != (t = null != s.call ? s.call.duration : null) ? t.humanize() : null;
    return c
        ? (0, r.jsx)(l.A, {
              icon: n(130158),
              timestamp: s.timestamp,
              compact: o,
              children:
                  null != h
                      ? a.intl.format(a.t.AcqBmO, {
                            username: f,
                            usernameHook: g,
                            callDuration: h,
                        })
                      : a.intl.format(a.t["43phHx"], {
                            username: f,
                            usernameHook: g,
                        }),
          })
        : (0, r.jsxs)(l.A, {
              icon: n(175476),
              timestamp: s.timestamp,
              compact: o,
              children: [
                  null != h
                      ? a.intl.format(a.t["7TeC1P"], {
                            username: f,
                            usernameHook: g,
                            callDuration: h,
                        })
                      : a.intl.format(a.t.LuB5RD, {
                            username: f,
                            usernameHook: g,
                        }),
                  u
                      ? (0, r.jsx)(l.A.Action, {
                            onClick: p,
                            children: a.intl.string(a.t.oa9mvZ),
                        })
                      : null,
              ],
          });
}
