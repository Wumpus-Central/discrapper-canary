n.d(t, {
    D: () => d,
    F: () => c
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(793030),
    a = n(481060),
    o = n(612232);
let c = {
        SMALL: {
            style: o.small,
            text: 'text-xs/normal'
        },
        MEDIUM: {
            style: o.normal,
            text: 'text-sm/normal'
        }
    },
    d = (e) => {
        let { assets: t, assetCount: n, size: r } = e;
        return (0, i.jsxs)('div', {
            className: o.iconRow,
            children: [
                t.map((e, t) => {
                    let { src: n, alt: l } = e;
                    return (0, i.jsx)(
                        a.ua7,
                        {
                            text: l,
                            children: (e) => {
                                var t, a;
                                return (0, i.jsx)(
                                    'img',
                                    ((t = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({}, e)),
                                    (a = a =
                                        {
                                            src: n,
                                            alt: l,
                                            className: s()(o.icon, r.style)
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, i);
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
                    (0, i.jsx)('div', {
                        className: s()(o.overflow, r.style),
                        children: (0, i.jsx)(l.xv, {
                            variant: r.text,
                            children: '+'.concat(n - 3)
                        })
                    })
            ]
        });
    };
