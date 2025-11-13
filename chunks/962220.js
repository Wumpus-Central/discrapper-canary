r.d(t, { Z: () => E });
var n,
    o,
    l = r(39612),
    c = r(271579),
    i = r(756647),
    u = r(625128),
    a = r(626135),
    p = r(954824),
    f = r(751189),
    s = r(981631);
let O = "template",
    E =
        ((n = (function (e) {
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
        })({}, f.Z)),
        (o = o =
            {
                openNativeAppModal(e) {
                    u.Z.openNativeAppModal(e, s.Etm.GUILD_TEMPLATE_BROWSER);
                },
                openMobileApp(e, t) {
                    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
                    let r = null != e ? (0, l.Oh)(e) : (0, l.Gk)(),
                        n = (0, c.WS)(),
                        o = (0, c.ZP)(r, {
                            utmSource: O,
                            fingerprint: t,
                            attemptId: n,
                        });
                    a.default.track(s.rMx.DEEP_LINK_CLICKED, {
                        fingerprint: (0, i.K)(t),
                        attempt_id: n,
                        source: O,
                        guild_template_code: e,
                    }),
                        p.Z.launch(o, () => {});
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(o)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
              }),
        n);
