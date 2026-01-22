n.d(t, {
    L_: () => d,
    gl: () => c,
    ms: () => u,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(83257),
    s = n(203982),
    o = n(115063),
    l = n(652215);
let c = i.createContext(void 0);
function u(e) {
    let { children: t } = e,
        n = i.useRef(a.n3),
        [u, d] = i.useState(!1),
        f = i.useCallback((e) => {
            var t;
            d(
                null !=
                    (t =
                        null == e
                            ? void 0
                            : e.some((e) => {
                                  var t;
                                  return e.showNotice() && !(null == (t = e.canCloseEarly) ? void 0 : t.call(e));
                              })) && t,
            ),
                (n.current = a.n3);
        }, []),
        p = i.useCallback(
            (e) => {
                if (u) {
                    (0, o.fO)({
                        duration: 300,
                        intensity: n.current,
                    }),
                        (n.current = Math.min(n.current + a.pe, a.OZ)),
                        s._.dispatch(l.jej.EMPHASIZE_NOTICE);
                    return;
                }
                e();
            },
            [u],
        ),
        _ = i.useMemo(
            () => ({
                navigateWithValidation: p,
                showNotice: u,
                handleStoreUpdate: f,
            }),
            [p, u, f],
        );
    return (0, r.jsx)(c.Provider, {
        value: _,
        children: t,
    });
}
function d() {
    let e = i.useContext(c);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
