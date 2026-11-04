var r = n(582128),
    l = n(935399),
    a = n(942370);
n.d(
    t,
    {},
    {
        W: function (e) {
            let { onSetIgnoreCloseRequest: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                [n, s] = r.useState(!1),
                i = r.useRef(new Set()),
                o = r.useCallback(() => {
                    (i.current.forEach(clearTimeout), i.current.clear());
                }, []),
                c = r.useCallback(
                    function () {
                        for (var n = arguments.length, r = Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                        let c = e(...r),
                            d = c === a._.RPC;
                        return (
                            o(),
                            s(d),
                            t?.({ shouldIgnoreCloseRequest: d }),
                            d &&
                                (i.current.add(setTimeout(() => s(!1), 1e4)),
                                i.current.add(setTimeout(() => t?.({ shouldIgnoreCloseRequest: !1 }), 2e3))),
                            c
                        );
                    },
                    [o, t, e],
                );
            return (
                (0, l.l0)(() => {
                    (t?.({ shouldIgnoreCloseRequest: !1 }), o());
                }),
                { startAuthorization: c, shouldShowGoToGameHint: n }
            );
        },
    },
);
