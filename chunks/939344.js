"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(480012),
    s = n(763754),
    l = n(888675),
    a = n(985018);
function c(e) {
    let { message: t, compact: c, missed: o, joinable: u, usernameHook: d, onClickJoinCall: _ } = e,
        E = (0, s.Ay)(t),
        A = E.nick,
        m = d(E),
        I = (0, r.A)(t);
    return o
        ? (0, i.jsx)(l.A, {
              icon: n(130158),
              timestamp: t.timestamp,
              compact: c,
              children:
                  null != I
                      ? a.intl.format(a.t.AcqBmO, { username: A, usernameHook: m, callDuration: I })
                      : a.intl.format(a.t["43phHx"], { username: A, usernameHook: m }),
          })
        : (0, i.jsxs)(l.A, {
              icon: n(175476),
              timestamp: t.timestamp,
              compact: c,
              children: [
                  null != I
                      ? a.intl.format(a.t["7TeC1P"], { username: A, usernameHook: m, callDuration: I })
                      : a.intl.format(a.t.LuB5RD, { username: A, usernameHook: m }),
                  u ? (0, i.jsx)(l.A.Action, { onClick: _, children: a.intl.string(a.t.oa9mvZ) }) : null,
              ],
          });
}
