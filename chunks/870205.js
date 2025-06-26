n.d(t, { Z: () => u });
var l = n(255367),
    i = n(73800),
    r = n(481060),
    a = n(984168),
    o = n(314734),
    s = n(388032),
    c = n(556342);
function u(e) {
    let t,
        { sortOrder: n, onSortOptionClick: u } = e,
        d = i.useRef(null);
    switch (n) {
        case o.bS.POPULAR:
            t = s.intl.string(s.t.SzxiqK);
            break;
        case o.bS.ALPHABETICAL:
            t = s.intl.string(s.t.m8xstr);
    }
    return (0, l.jsx)(r.yRy, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(a.Z, {
                sortOrder: n,
                onSortOptionClick: u,
                closePopout: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            var i, a;
            let { isShown: o } = n;
            return (0, l.jsxs)(
                r.zxk,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, e)),
                (a = a =
                    {
                        buttonRef: d,
                        size: r.zxk.Sizes.MIN,
                        color: r.zxk.Colors.CUSTOM,
                        className: c.sortDropdown,
                        innerClassName: c.sortDropdownInner,
                        'aria-label': s.intl.string(s.t.yeYaHR),
                        children: [
                            (0, l.jsx)(r.uVW, {
                                size: 'xs',
                                color: 'currentColor',
                                className: c.sortIconMargin
                            }),
                            (0, l.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: t
                            }),
                            o
                                ? (0, l.jsx)(r.u04, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20
                                  })
                                : (0, l.jsx)(r.CJ0, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20
                                  })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                i)
            );
        }
    });
}
