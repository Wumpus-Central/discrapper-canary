n.d(t, { Z: () => u });
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(984168),
    a = n(314734),
    s = n(388032),
    c = n(556342);
function u(e) {
    let t,
        { sortOrder: n, onSortOptionClick: u } = e,
        d = r.useRef(null);
    switch (n) {
        case a.bS.POPULAR:
            t = s.intl.string(s.t.SzxiqK);
            break;
        case a.bS.ALPHABETICAL:
            t = s.intl.string(s.t.m8xstr);
    }
    return (0, i.jsx)(l.yRy, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o.Z, {
                sortOrder: n,
                onSortOptionClick: u,
                closePopout: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            var r, o;
            let { isShown: a } = n;
            return (0, i.jsxs)(
                l.zxk,
                ((r = (function (e) {
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
                (o = o =
                    {
                        buttonRef: d,
                        size: l.zxk.Sizes.MIN,
                        color: l.zxk.Colors.CUSTOM,
                        className: c.sortDropdown,
                        innerClassName: c.sortDropdownInner,
                        'aria-label': s.intl.string(s.t.yeYaHR),
                        children: [
                            (0, i.jsx)(l.uVW, {
                                size: 'xs',
                                color: 'currentColor',
                                className: c.sortIconMargin
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: t
                            }),
                            a
                                ? (0, i.jsx)(l.u04, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20
                                  })
                                : (0, i.jsx)(l.CJ0, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20
                                  })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                r)
            );
        }
    });
}
