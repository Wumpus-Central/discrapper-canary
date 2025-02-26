n.d(t, {
    D: () => u,
    F: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(793030),
    a = n(481060),
    s = n(61506);
let c = {
        SMALL: {
            style: s.small,
            text: 'text-xs/normal'
        },
        MEDIUM: {
            style: s.normal,
            text: 'text-sm/normal'
        }
    },
    u = (e) => {
        let { assets: t, assetCount: n, size: i } = e;
        return (0, r.jsxs)('div', {
            className: s.iconRow,
            children: [
                t.map((e, t) => {
                    let { src: n, alt: o } = e;
                    return (0, r.jsx)(
                        a.ua7,
                        {
                            text: o,
                            children: (e) => {
                                var t, a;
                                return (0, r.jsx)(
                                    'img',
                                    ((t = (function (e) {
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
                                    })({}, e)),
                                    (a = a =
                                        {
                                            src: n,
                                            alt: o,
                                            className: l()(s.icon, i.style)
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(a)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                                          }),
                                    t)
                                );
                            }
                        },
                        t
                    );
                }),
                n > 4 &&
                    (0, r.jsx)('div', {
                        className: l()(s.overflow, i.style),
                        children: (0, r.jsx)(o.xv, {
                            variant: i.text,
                            children: '+'.concat(n - 3)
                        })
                    })
            ]
        });
    };
