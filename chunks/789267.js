n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(739566),
    l = n(834129),
    o = n(388032);
function a(e) {
    let { message: t, compact: a, missed: s, joinable: c, usernameHook: u, onClickJoinCall: d } = e,
        p = (0, i.ZP)(t),
        m = p.nick,
        f = u(p),
        g = (function (e) {
            let t = null != e.call ? e.call.duration : null;
            return null != t ? t.humanize() : null;
        })(t);
    return s
        ? (0, r.jsx)(l.Z, {
              icon: n(154239),
              timestamp: t.timestamp,
              compact: a,
              children:
                  null != g
                      ? o.intl.format(o.t.AcqBmJ, {
                            username: m,
                            usernameHook: f,
                            callDuration: g,
                        })
                      : o.intl.format(o.t["43phHx"], {
                            username: m,
                            usernameHook: f,
                        }),
          })
        : (0, r.jsxs)(l.Z, {
              icon: n(344163),
              timestamp: t.timestamp,
              compact: a,
              children: [
                  null != g
                      ? o.intl.format(o.t["7TeC1N"], {
                            username: m,
                            usernameHook: f,
                            callDuration: g,
                        })
                      : o.intl.format(o.t.LuB5RE, {
                            username: m,
                            usernameHook: f,
                        }),
                  c
                      ? (0, r.jsx)(l.Z.Action, {
                            onClick: d,
                            children: o.intl.string(o.t.oa9mvb),
                        })
                      : null,
              ],
          });
}
