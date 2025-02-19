n.d(t, { J: () => c }), n(47120), n(192379);
var o = n(374470),
    i = n(730606),
    r = n(312097),
    a = n(52824),
    l = n(478664);
function c(e, t, n) {
    let c = {},
        s = {};
    for (let [_, u] of e.entries()) {
        let d = (0, a.q)({
            proxyURL: u.proxyUrl,
            url: u.url
        });
        (c[d] = (i) =>
            (function (e, t, n) {
                var i, a;
                let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, o.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, r.K)(
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    o = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (o = o.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    o.forEach(function (t) {
                                        var o;
                                        (o = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: o,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = o);
                                    });
                            }
                            return e;
                        })({}, c)),
                        (a = a =
                            {
                                className: l.forcedTransparency,
                                items: t,
                                startingIndex: n,
                                location: null != s ? s : 'zoomedMediaModalHelper'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var o = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, o);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        i)
                    );
            })(i, e, _, t, n)),
            (s[d] = () => (0, i.WG)(u, e.length > 1));
    }
    return {
        srcToOnClickOverride: c,
        srcToHandlePreloadImage: s
    };
}
