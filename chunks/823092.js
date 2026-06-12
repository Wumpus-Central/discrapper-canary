i.d(t, { L_: () => c, ms: () => d });
var n = i(627968),
    s = i(64700),
    l = i(83257),
    r = i(625494),
    a = i(115063),
    o = i(652215);
let u = s.createContext(void 0);
function d(e) {
    let { children: t } = e,
        i = s.useRef(l.n3),
        [d, c] = s.useState(!1),
        g = s.useCallback((e) => {
            c(e?.some((e) => e.showNotice() && !e.canCloseEarly?.()) ?? !1), (i.current = l.n3);
        }, []),
        m = s.useCallback(
            (e) => {
                if (d) {
                    (0, a.fO)({ duration: 300, intensity: i.current }),
                        (i.current = Math.min(i.current + l.pe, l.OZ)),
                        r._.dispatch(o.jej.EMPHASIZE_NOTICE);
                    return;
                }
                e();
            },
            [d],
        ),
        A = s.useMemo(() => ({ navigateWithValidation: m, showNotice: d, handleStoreUpdate: g }), [m, d, g]);
    return (0, n.jsx)(u.Provider, { value: A, children: t });
}
function c() {
    let e = s.useContext(u);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
