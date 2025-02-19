n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    c = n(666657),
    l = n(533244),
    u = n(487419),
    a = n(430824),
    f = n(981631),
    s = n(388032);
function b(e, t) {
    let b = t === f.IlC.POPOUT,
        d = (0, o.e7)([a.Z], () => a.Z.getGuild(e), [e]),
        O = (0, o.e7)([u.Z], () => (null != d ? u.Z.getGuildIncident(d.id) : null));
    return b
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'nav-security-actions',
              label: s.NW.string(s.t.UgXhdn),
              action: () => {
                  let t = {
                      source: c.Zu.MESSAGE,
                      alertType: (0, l.T1)(O)
                  };
                  (0, i.ZDy)(async () => {
                      let { default: o } = await n.e('61536').then(n.bind(n, 664452));
                      return (n) => {
                          var i, c;
                          return (0, r.jsx)(
                              o,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (c = c =
                                  {
                                      guildId: e,
                                      analyticsData: t
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(c)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e));
                                    }),
                              i)
                          );
                      };
                  });
              }
          });
}
