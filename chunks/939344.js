n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(763754),
    a = n(888675),
    r = n(502197),
    s = n(985018);
function o(e) {
    let { message: t, compact: o, missed: d, joinable: c, usernameHook: u, onClickJoinCall: m } = e,
        _ = (0, l.Ay)(t),
        h = _.nick,
        p = u(_),
        g = (0, r.K)(t);
    return d
        ? (0, i.jsx)(a.A, {
              icon: n(130158),
              timestamp: t.timestamp,
              compact: o,
              children:
                  null != g
                      ? s.intl.format(s.t.AcqBmO, { username: h, usernameHook: p, callDuration: g })
                      : s.intl.format(s.t["43phHx"], { username: h, usernameHook: p }),
          })
        : (0, i.jsxs)(a.A, {
              icon: n(175476),
              timestamp: t.timestamp,
              compact: o,
              children: [
                  null != g
                      ? s.intl.format(s.t["7TeC1P"], { username: h, usernameHook: p, callDuration: g })
                      : s.intl.format(s.t.LuB5RD, { username: h, usernameHook: p }),
                  c ? (0, i.jsx)(a.A.Action, { onClick: m, children: s.intl.string(s.t.oa9mvZ) }) : null,
              ],
          });
}
