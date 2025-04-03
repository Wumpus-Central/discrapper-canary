n.d(t, { E: () => c });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(632374);
let c = i.memo(function (e) {
    let { emptyText: t, icon: n, absolute: i = !1 } = e;
    return (0, r.jsx)('div', {
        className: o()(s.emptyWidgetContainer, i && s.absolute),
        children: (0, r.jsx)(a.ua7, {
            text: t,
            children: (e) => {
                var t, i;
                return (0, r.jsx)(
                    'div',
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
                    (i = i =
                        {
                            children: (0, r.jsx)(n, {
                                size: 'md',
                                color: a.TVs.colors.WHITE,
                                className: s.emptyWidgetIcon
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    t)
                );
            }
        })
    });
});
