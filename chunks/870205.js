n.d(t, { Z: () => d });
var l = n(255367),
    i = n(73800),
    r = n(755721),
    a = n(481060),
    o = n(984168),
    s = n(314734),
    c = n(388032),
    u = n(556342);
function d(e) {
    let t,
        { sortOrder: n, onSortOptionClick: d } = e,
        p = i.useRef(null);
    switch (n) {
        case s.bS.POPULAR:
            t = c.intl.string(c.t.SzxiqK);
            break;
        case s.bS.ALPHABETICAL:
            t = c.intl.string(c.t.m8xstr);
    }
    return (0, l.jsx)(a.yRy, {
        targetElementRef: p,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(o.Z, {
                sortOrder: n,
                onSortOptionClick: d,
                closePopout: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            var i, o;
            let { isShown: s } = n;
            return (0, l.jsxs)(
                r.zx,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                ((l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l));
                            }));
                    }
                    return e;
                })({}, e)),
                (o = o =
                    {
                        buttonRef: p,
                        size: r.zx.Sizes.MIN,
                        color: r.zx.Colors.CUSTOM,
                        className: u.sortDropdown,
                        innerClassName: u.sortDropdownInner,
                        'aria-label': c.intl.string(c.t.yeYaHR),
                        children: [
                            (0, l.jsx)(a.uVW, {
                                size: 'xs',
                                color: 'currentColor',
                                className: u.sortIconMargin
                            }),
                            (0, l.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: t
                            }),
                            s
                                ? (0, l.jsx)(a.u04, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20
                                  })
                                : (0, l.jsx)(a.CJ0, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20
                                  })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                i)
            );
        }
    });
}
