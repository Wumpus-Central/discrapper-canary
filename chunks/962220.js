n.d(t, { Z: () => h });
var r,
    i,
    o = n(39612),
    a = n(271579),
    l = n(756647),
    s = n(625128),
    c = n(626135),
    u = n(954824),
    d = n(751189),
    p = n(981631);
let g = 'template',
    h =
        ((r = (function (e) {
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
        })({}, d.Z)),
        (i = i =
            {
                openNativeAppModal(e) {
                    s.Z.openNativeAppModal(e, p.Etm.GUILD_TEMPLATE_BROWSER);
                },
                openMobileApp(e, t) {
                    if (null != platform.ua && platform.ua.toLowerCase().indexOf('googlebot') > -1) return;
                    let n = null != e ? (0, o.Oh)(e) : (0, o.Gk)(),
                        r = (0, a.WS)(),
                        i = (0, a.ZP)(n, {
                            utmSource: g,
                            fingerprint: t,
                            attemptId: r
                        });
                    c.default.track(p.rMx.DEEP_LINK_CLICKED, {
                        fingerprint: (0, l.K)(t),
                        attempt_id: r,
                        source: g,
                        guild_template_code: e
                    }),
                        u.Z.launch(i, () => {});
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        r);
