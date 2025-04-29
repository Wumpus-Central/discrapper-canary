n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(739566),
    l = n(834129),
    a = n(388032);
function o(e) {
    let { message: t, compact: o, missed: s, joinable: c, usernameHook: u, onClickJoinCall: d } = e,
        p = (0, i.ZP)(t),
        m = p.nick,
        f = u(p),
        h = (function (e) {
            let t = null != e.call ? e.call.duration : null;
            return null != t ? t.humanize() : null;
        })(t);
    return s
        ? (0, r.jsx)(l.Z, {
              icon: n(154239),
              timestamp: t.timestamp,
              compact: o,
              children:
                  null != h
                      ? a.intl.format(a.t.AcqBmJ, {
                            username: m,
                            usernameHook: f,
                            callDuration: h
                        })
                      : a.intl.format(a.t['43phHx'], {
                            username: m,
                            usernameHook: f
                        })
          })
        : (0, r.jsxs)(l.Z, {
              icon: n(344163),
              timestamp: t.timestamp,
              compact: o,
              children: [
                  null != h
                      ? a.intl.format(a.t['7TeC1N'], {
                            username: m,
                            usernameHook: f,
                            callDuration: h
                        })
                      : a.intl.format(a.t.LuB5RE, {
                            username: m,
                            usernameHook: f
                        }),
                  c
                      ? (0, r.jsx)(l.Z.Action, {
                            onClick: d,
                            children: a.intl.string(a.t.oa9mvb)
                        })
                      : null
              ]
          });
}
