n.d(t, { Z: () => c });
var i = n(951288),
    l = n(647438),
    r = n(481060),
    a = n(984168),
    o = n(314734),
    s = n(388032);
function c(e) {
    let t,
        { sortOrder: n, onSortOptionClick: c } = e,
        u = l.useRef(null);
    switch (n) {
        case o.bS.POPULAR:
            t = s.intl.string(s.t.SzxiqK);
            break;
        case o.bS.ALPHABETICAL:
            t = s.intl.string(s.t.m8xstr);
    }
    return (0, i.jsx)(r.yRy, {
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.Z, {
                sortOrder: n,
                onSortOptionClick: c,
                closePopout: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e) => {
            var n, l;
            return (0, i.jsx)(
                r.Button,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, e)),
                (l = l =
                    {
                        buttonRef: u,
                        size: "sm",
                        variant: "secondary",
                        "aria-label": s.intl.string(s.t.yeYaHR),
                        icon: r.uVW,
                        text: t,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n),
            );
        },
    });
}
