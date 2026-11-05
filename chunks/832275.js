var n = l(582128),
    r = l(935399),
    a = l(942370);
l.d(
    t,
    {},
    {
        W: function (e) {
            let { onSetIgnoreCloseRequest: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                [l, s] = n.useState(!1),
                i = n.useRef(new Set()),
                o = n.useCallback(() => {
                    (i.current.forEach(clearTimeout), i.current.clear());
                }, []),
                c = n.useCallback(
                    function () {
                        for (var l = arguments.length, n = Array(l), r = 0; r < l; r++) n[r] = arguments[r];
                        let c = e(...n),
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
                (0, r.l0)(() => {
                    (t?.({ shouldIgnoreCloseRequest: !1 }), o());
                }),
                { startAuthorization: c, shouldShowGoToGameHint: l }
            );
        },
    },
);
