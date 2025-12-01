n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(739566),
    a = n(834129),
    o = n(388032);
function s(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null;
}
function l(e) {
    let { message: t, compact: l, missed: c, joinable: u, usernameHook: d, onClickJoinCall: f } = e,
        p = (0, i.ZP)(t),
        _ = p.nick,
        m = d(p),
        h = s(t);
    return c
        ? (0, r.jsx)(a.Z, {
              icon: n(154239),
              timestamp: t.timestamp,
              compact: l,
              children:
                  null != h
                      ? o.intl.format(o.t.AcqBmO, {
                            username: _,
                            usernameHook: m,
                            callDuration: h,
                        })
                      : o.intl.format(o.t["43phHx"], {
                            username: _,
                            usernameHook: m,
                        }),
          })
        : (0, r.jsxs)(a.Z, {
              icon: n(344163),
              timestamp: t.timestamp,
              compact: l,
              children: [
                  null != h
                      ? o.intl.format(o.t["7TeC1P"], {
                            username: _,
                            usernameHook: m,
                            callDuration: h,
                        })
                      : o.intl.format(o.t.LuB5RD, {
                            username: _,
                            usernameHook: m,
                        }),
                  u
                      ? (0, r.jsx)(a.Z.Action, {
                            onClick: f,
                            children: o.intl.string(o.t.oa9mvZ),
                        })
                      : null,
              ],
          });
}
