n.d(t, { W: () => s });
var l = n(582128),
    r = n(935399),
    a = n(942370);
function s(e) {
    let { onSetIgnoreCloseRequest: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        [n, s] = l.useState(!1),
        i = l.useRef(new Set()),
        o = l.useCallback(() => {
            (i.current.forEach(clearTimeout), i.current.clear());
        }, []),
        c = l.useCallback(
            function () {
                for (var n = arguments.length, l = Array(n), r = 0; r < n; r++) l[r] = arguments[r];
                let c = e(...l),
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
        { startAuthorization: c, shouldShowGoToGameHint: n }
    );
}
