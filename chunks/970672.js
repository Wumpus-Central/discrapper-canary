r.d(t, {
    W: () => a,
    h: () => i,
});
var n = r(129014),
    o = r(976860),
    l = r(961350),
    c = r(723702),
    u = r(652215);
let i = c.isPlatformEmbedded
        ? u.tEg
        : (e, t) => {
              if (!(0, o.MX)())
                  return n.default.request(u.e$_.DEEP_LINK, {
                      type: e,
                      params: t,
                  });
          },
    a = c.isPlatformEmbedded
        ? u.tEg
        : (e, t) => {
              if (!l.default.isAuthenticated()) {
                  var r, n;
                  return i(
                      e,
                      ((r = (function (e) {
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
                      })({}, t || {})),
                      (n = n =
                          {
                              fingerprint: l.default.getFingerprint(),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      r),
                  );
              }
          };
