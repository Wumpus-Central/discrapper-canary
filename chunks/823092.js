n.d(t, { L_: () => d, ms: () => u });
var i = n(477900),
    s = n(582128),
    l = n(625494),
    r = n(115063);
n(46121);
var a = n(652215);
let o = s.createContext(void 0);
function u(e) {
    let { children: t } = e,
        n = s.useRef(1.4),
        [u, d] = s.useState(!1),
        c = s.useCallback((e) => {
            (d(e?.some((e) => e.showNotice() && !e.canCloseEarly?.()) ?? !1), (n.current = 1.4));
        }, []),
        g = s.useCallback(
            (e) => {
                if (u) {
                    ((0, r.fO)({ duration: 300, intensity: n.current }),
                        (n.current = Math.min(n.current + 2, 15)),
                        l._.dispatch(a.jej.EMPHASIZE_NOTICE));
                    return;
                }
                e();
            },
            [u],
        ),
        m = s.useMemo(() => ({ navigateWithValidation: g, showNotice: u, handleStoreUpdate: c }), [g, u, c]);
    return (0, i.jsx)(o.Provider, { value: m, children: t });
}
function d() {
    let e = s.useContext(o);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
