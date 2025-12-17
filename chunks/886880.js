n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    o = n(473749),
    a = n(264418),
    i = n(493773),
    l = n(921944);
function c(e) {
    let { dismissibleContentType: t, targetElementRef: n, visibleContent: c, markAsDismissed: s, props: u } = e,
        [f, d] = o.useState(!1),
        b = o.useRef(null);
    (0, i.ZP)(
        () => (
            (b.current = setTimeout(() => d(!0), 250)),
            () => {
                clearTimeout(b.current), s(l.L.AUTO_DISMISS);
            }
        ),
    );
    let y = o.useCallback(
        (e) => {
            s("user:explicit" === e ? l.L.USER_DISMISS : l.L.AUTO_DISMISS);
        },
        [s],
    );
    return (0, r.jsx)(
        a.Z,
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
                shouldShow: f && c === t,
                onRequestClose: y,
            },
            u,
        ),
    );
}
