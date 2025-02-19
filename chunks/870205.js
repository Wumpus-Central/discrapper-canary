n.d(t, { Z: () => c });
var i = n(200651),
    l = n(481060),
    r = n(984168),
    o = n(314734),
    a = n(388032),
    s = n(556238);
function c(e) {
    let t,
        { sortOrder: n, onSortOptionClick: c } = e;
    switch (n) {
        case o.bS.POPULAR:
            t = a.NW.string(a.t.SzxiqK);
            break;
        case o.bS.ALPHABETICAL:
            t = a.NW.string(a.t.m8xstr);
    }
    return (0, i.jsx)(l.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(r.Z, {
                sortOrder: n,
                onSortOptionClick: c,
                closePopout: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            var r, o;
            let { isShown: c } = n;
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
                        size: l.zxk.Sizes.MIN,
                        color: l.zxk.Colors.CUSTOM,
                        className: s.sortDropdown,
                        innerClassName: s.sortDropdownInner,
                        'aria-label': a.NW.string(a.t.yeYaHR),
                        children: [
                            (0, i.jsx)(l.uVW, {
                                size: 'xs',
                                color: 'currentColor',
                                className: s.sortIconMargin
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: t
                            }),
                            c
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
