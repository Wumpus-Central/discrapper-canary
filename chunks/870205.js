n.d(t, { Z: () => c });
var l = n(951288),
    i = n(647438),
    r = n(481060),
    a = n(984168),
    o = n(314734),
    s = n(388032);
function c(e) {
    let t,
        { sortOrder: n, onSortOptionClick: c } = e,
        u = i.useRef(null);
    switch (n) {
        case o.bS.POPULAR:
            t = s.intl.string(s.t.SzxiqK);
            break;
        case o.bS.ALPHABETICAL:
            t = s.intl.string(s.t.m8xstr);
    }
    return (0, l.jsx)(r.yRy, {
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(a.Z, {
                sortOrder: n,
                onSortOptionClick: c,
                closePopout: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e) => {
            var n, i;
            return (0, l.jsx)(
                r.zxk,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        buttonRef: u,
                        size: "sm",
                        variant: "secondary",
                        "aria-label": s.intl.string(s.t.yeYaHR),
                        icon: r.uVW,
                        text: t,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n),
            );
        },
    });
}
