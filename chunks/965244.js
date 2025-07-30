r.d(t, { Z: () => f });
var n = r(255367);
r(73800);
var o = r(442837),
    c = r(481060),
    i = r(666657),
    a = r(533244),
    l = r(487419),
    u = r(430824),
    b = r(981631),
    s = r(388032);
function f(e, t) {
    let f = t === b.IlC.POPOUT,
        O = (0, o.e7)([u.Z], () => u.Z.getGuild(e), [e]),
        p = (0, o.e7)([l.Z], () => (null != O ? l.Z.getGuildIncident(O.id) : null));
    return f
        ? null
        : (0, n.jsx)(c.sNh, {
              id: 'nav-security-actions',
              label: s.intl.string(s.t.UgXhdn),
              action: () => {
                  let t = {
                      source: i.Zu.MESSAGE,
                      alertType: (0, a.T1)(p)
                  };
                  (0, c.ZDy)(async () => {
                      let { default: o } = await Promise.all([r.e('58175'), r.e('6584')]).then(r.bind(r, 664452));
                      return (r) => {
                          var c, i;
                          return (0, n.jsx)(
                              o,
                              ((c = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              ((n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = n));
                                          }));
                                  }
                                  return e;
                              })({}, r)),
                              (i = i =
                                  {
                                      guildId: e,
                                      analyticsData: t
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              c)
                          );
                      };
                  });
              }
          });
}
