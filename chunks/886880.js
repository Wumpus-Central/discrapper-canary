n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(264418),
    l = n(493773),
    a = n(921944);
function c(e) {
    let { dismissibleContentType: t, targetElementRef: n, visibleContent: c, markAsDismissed: s, props: u } = e,
        [d, f] = o.useState(!1),
        b = o.useRef(null);
    (0, l.ZP)(
        () => (
            (b.current = setTimeout(() => f(!0), 250)),
            () => {
                clearTimeout(b.current), s(a.L.AUTO_DISMISS);
            }
        ),
    );
    let y = o.useCallback(
        (e) => {
            s("user:explicit" === e ? a.L.USER_DISMISS : a.L.AUTO_DISMISS);
        },
        [s],
    );
    return (0, r.jsx)(
        i.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                targetElementRef: n,
                shouldShow: d && c === t,
                onRequestClose: y,
            },
            u,
        ),
    );
}
