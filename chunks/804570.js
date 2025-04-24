n.d(t, { E: () => c });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(632374);
let c = r.memo(function (e) {
    let { emptyText: t, icon: n, absolute: r = !1 } = e;
    return (0, i.jsx)('div', {
        className: o()(s.emptyWidgetContainer, r && s.absolute),
        children: (0, i.jsx)(a.ua7, {
            text: t,
            children: (e) => {
                var t, r;
                return (0, i.jsx)(
                    'div',
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
                    (r = r =
                        {
                            children: (0, i.jsx)(n, {
                                size: 'md',
                                color: a.TVs.colors.WHITE,
                                className: s.emptyWidgetIcon
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                );
            }
        })
    });
});
