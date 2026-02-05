n.d(t, { L_: () => u, gl: () => c, ms: () => d });
var i = n(627968),
    s = n(64700),
    r = n(83257),
    a = n(203982),
    l = n(115063),
    o = n(652215);
let c = s.createContext(void 0);
function d(e) {
    let { children: t } = e,
        n = s.useRef(r.n3),
        [d, u] = s.useState(!1),
        _ = s.useCallback((e) => {
            u(e?.some((e) => e.showNotice() && !e.canCloseEarly?.()) ?? !1), (n.current = r.n3);
        }, []),
        m = s.useCallback(
            (e) => {
                if (d) {
                    (0, l.fO)({ duration: 300, intensity: n.current }),
                        (n.current = Math.min(n.current + r.pe, r.OZ)),
                        a._.dispatch(o.jej.EMPHASIZE_NOTICE);
                    return;
                }
                e();
            },
            [d],
        ),
        A = s.useMemo(() => ({ navigateWithValidation: m, showNotice: d, handleStoreUpdate: _ }), [m, d, _]);
    return (0, i.jsx)(c.Provider, { value: A, children: t });
}
function u() {
    let e = s.useContext(c);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
