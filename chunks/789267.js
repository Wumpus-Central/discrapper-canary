n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(739566),
    a = n(834129),
    l = n(388032);
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
        ? (0, r.jsx)(a.Z, {
              icon: n(154239),
              timestamp: t.timestamp,
              compact: o,
              children:
                  null != h
                      ? l.NW.format(l.t.AcqBmJ, {
                            username: m,
                            usernameHook: f,
                            callDuration: h
                        })
                      : l.NW.format(l.t['43phHx'], {
                            username: m,
                            usernameHook: f
                        })
          })
        : (0, r.jsxs)(a.Z, {
              icon: n(344163),
              timestamp: t.timestamp,
              compact: o,
              children: [
                  null != h
                      ? l.NW.format(l.t['7TeC1N'], {
                            username: m,
                            usernameHook: f,
                            callDuration: h
                        })
                      : l.NW.format(l.t.LuB5RE, {
                            username: m,
                            usernameHook: f
                        }),
                  c
                      ? (0, r.jsx)(a.Z.Action, {
                            onClick: d,
                            children: l.NW.string(l.t.oa9mvb)
                        })
                      : null
              ]
          });
}
