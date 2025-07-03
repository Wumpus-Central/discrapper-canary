n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    c = n(666657),
    l = n(533244),
    a = n(487419),
    u = n(430824),
    s = n(981631),
    f = n(388032);
function b(e, t) {
    let b = t === s.IlC.POPOUT,
        d = (0, i.e7)([u.Z], () => u.Z.getGuild(e), [e]),
        O = (0, i.e7)([a.Z], () => (null != d ? a.Z.getGuildIncident(d.id) : null));
    return b
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'nav-security-actions',
              label: f.intl.string(f.t.UgXhdn),
              action: () => {
                  let t = {
                      source: c.Zu.MESSAGE,
                      alertType: (0, l.T1)(O)
                  };
                  (0, o.ZDy)(async () => {
                      let { default: i } = await n.e('61536').then(n.bind(n, 664452));
                      return (n) => {
                          var o, c;
                          return (0, r.jsx)(
                              i,
                              ((o = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, n)),
                              (c = c =
                                  {
                                      guildId: e,
                                      analyticsData: t
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(c)).forEach(function (e) {
                                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                                    }),
                              o)
                          );
                      };
                  });
              }
          });
}
