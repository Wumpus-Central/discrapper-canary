n.d(e, { W: () => i });
var r = n(64700),
    l = n(935399),
    a = n(942370);
function i(t) {
    let { onSetIgnoreCloseRequest: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        [n, i] = r.useState(!1),
        s = r.useRef(new Set()),
        c = r.useCallback(() => {
            s.current.forEach(clearTimeout), s.current.clear();
        }, []),
        o = r.useCallback(
            function () {
                for (var n = arguments.length, r = Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                let o = t(...r),
                    d = o === a._M.RPC;
                return (
                    c(),
                    i(d),
                    e?.({ shouldIgnoreCloseRequest: d }),
                    d &&
                        (s.current.add(setTimeout(() => i(!1), 1e4)),
                        s.current.add(setTimeout(() => e?.({ shouldIgnoreCloseRequest: !1 }), 2e3))),
                    o
                );
            },
            [c, e, t],
        );
    return (
        (0, l.l0)(() => {
            e?.({ shouldIgnoreCloseRequest: !1 }), c();
        }),
        { startAuthorization: o, shouldShowGoToGameHint: n }
    );
}
