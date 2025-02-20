n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(739566),
    a = n(834129),
    o = n(388032);
function l(e) {
    let { message: t, compact: l, missed: s, joinable: c, usernameHook: d, onClickJoinCall: u } = e,
        p = (0, i.ZP)(t),
        m = p.nick,
        f = d(p),
        h = (function (e) {
            let t = null != e.call ? e.call.duration : null;
            return null != t ? t.humanize() : null;
        })(t);
    return s
        ? (0, r.jsx)(a.Z, {
              icon: n(154239),
              timestamp: t.timestamp,
              compact: l,
              children:
                  null != h
                      ? o.NW.format(o.t.AcqBmJ, {
                            username: m,
                            usernameHook: f,
                            callDuration: h
                        })
                      : o.NW.format(o.t['43phHx'], {
                            username: m,
                            usernameHook: f
                        })
          })
        : (0, r.jsxs)(a.Z, {
              icon: n(344163),
              timestamp: t.timestamp,
              compact: l,
              children: [
                  null != h
                      ? o.NW.format(o.t['7TeC1N'], {
                            username: m,
                            usernameHook: f,
                            callDuration: h
                        })
                      : o.NW.format(o.t.LuB5RE, {
                            username: m,
                            usernameHook: f
                        }),
                  c
                      ? (0, r.jsx)(a.Z.Action, {
                            onClick: u,
                            children: o.NW.string(o.t.oa9mvb)
                        })
                      : null
              ]
          });
}
