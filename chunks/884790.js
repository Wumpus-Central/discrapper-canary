r.d(t, { A: () => O });
var n = r(627968);
r(64700);
var o = r(311907),
    c = r(397927),
    i = r(834409),
    a = r(903093),
    l = r(610136),
    u = r(71393),
    b = r(652215),
    s = r(985018);
function O(e, t) {
    let O = t === b.BRT.POPOUT,
        p = (0, o.bG)([u.A], () => u.A.getGuild(e), [e]),
        f = (0, o.bG)([l.A], () => (null != p ? l.A.getGuildIncident(p.id) : null));
    return O
        ? null
        : (0, n.jsx)(c.Drp, {
              id: "nav-security-actions",
              label: s.intl.string(s.t.UgXhdn),
              action: () => {
                  let t = {
                      source: i.Eo.MESSAGE,
                      alertType: (0, a.$5)(f),
                  };
                  (0, c.mMO)(async () => {
                      let { default: o } = await r.e("43233").then(r.bind(r, 671576));
                      return (r) => {
                          var c, i;
                          return (0, n.jsx)(
                              o,
                              ((c = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              }),
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, r)),
                              (i = i =
                                  {
                                      guildId: e,
                                      analyticsData: t,
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
                              c),
                          );
                      };
                  });
              },
          });
}
