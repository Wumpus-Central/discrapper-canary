r.d(t, { J: () => c }), r(388685), r(192379);
var n = r(374470),
    l = r(730606),
    i = r(312097),
    o = r(52824),
    a = r(854600);
function c(e, t, r) {
    let c = {},
        s = {};
    for (let [u, p] of e.entries()) {
        let d = (0, o.q)({
            proxyURL: p.proxyUrl,
            url: p.url
        });
        (c[d] = (l) =>
            (function (e, t, r) {
                var l, o;
                let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, i.K)(
                        ((l = (function (e) {
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
                        })({}, c)),
                        (o = o =
                            {
                                className: a.forcedTransparency,
                                items: t,
                                startingIndex: r,
                                location: null != s ? s : 'zoomedMediaModalHelper'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        l)
                    );
            })(l, e, u, t, r)),
            (s[d] = () => (0, l.WG)(p, e.length > 1));
    }
    return {
        srcToOnClickOverride: c,
        srcToHandlePreloadImage: s
    };
}
