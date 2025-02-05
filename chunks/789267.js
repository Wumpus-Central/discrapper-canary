n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(739566),
    a = n(834129),
    r = n(388032);
function s(e) {
    let { message: t, compact: s, missed: o, joinable: c, usernameHook: d, onClickJoinCall: u } = e,
        m = (0, l.ZP)(t),
        _ = m.nick,
        h = d(m),
        p = (function (e) {
            let t = null != e.call ? e.call.duration : null;
            return null != t ? t.humanize() : null;
        })(t);
    return o
        ? (0, i.jsx)(a.Z, {
              icon: n(154239),
              timestamp: t.timestamp,
              compact: s,
              children:
                  null != p
                      ? r.intl.format(r.t.AcqBmJ, {
                            username: _,
                            usernameHook: h,
                            callDuration: p
                        })
                      : r.intl.format(r.t['43phHx'], {
                            username: _,
                            usernameHook: h
                        })
          })
        : (0, i.jsxs)(a.Z, {
              icon: n(344163),
              timestamp: t.timestamp,
              compact: s,
              children: [
                  null != p
                      ? r.intl.format(r.t['7TeC1N'], {
                            username: _,
                            usernameHook: h,
                            callDuration: p
                        })
                      : r.intl.format(r.t.LuB5RE, {
                            username: _,
                            usernameHook: h
                        }),
                  c
                      ? (0, i.jsx)(a.Z.Action, {
                            onClick: u,
                            children: r.intl.string(r.t.oa9mvb)
                        })
                      : null
              ]
          });
}
