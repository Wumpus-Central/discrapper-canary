n.d(t, {
    D: () => d,
    F: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(793030),
    l = n(481060),
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
        let { assets: t, assetCount: n, size: i } = e;
        return (0, r.jsxs)('div', {
            className: o.iconRow,
            children: [
                t.map((e, t) => {
                    let { src: n, alt: a } = e;
                    return (0, r.jsx)(
                        l.ua7,
                        {
                            text: a,
                            children: (e) => {
                                var t, l;
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
                                    (l = l =
                                        {
                                            src: n,
                                            alt: a,
                                            className: s()(o.icon, i.style)
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
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
                        className: s()(o.overflow, i.style),
                        children: (0, r.jsx)(a.xv, {
                            variant: i.text,
                            children: '+'.concat(n - 3)
                        })
                    })
            ]
        });
    };
