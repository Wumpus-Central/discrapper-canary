r.d(t, { J: () => l }), r(47120), r(192379);
var n = r(374470),
    o = r(730606),
    i = r(312097),
    a = r(52824),
    s = r(854600);
function l(e, t, r) {
    let l = {},
        c = {};
    for (let [d, u] of e.entries()) {
        let p = (0, a.q)({
            proxyURL: u.proxyUrl,
            url: u.url
        });
        (l[p] = (o) =>
            (function (e, t, r) {
                var o, a;
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    c = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, i.K)(
                        ((o = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, l)),
                        (a = a =
                            {
                                className: s.forcedTransparency,
                                items: t,
                                startingIndex: r,
                                location: null != c ? c : 'zoomedMediaModalHelper'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        o)
                    );
            })(o, e, d, t, r)),
            (c[p] = () => (0, o.WG)(u, e.length > 1));
    }
    return {
        srcToOnClickOverride: l,
        srcToHandlePreloadImage: c
    };
}
