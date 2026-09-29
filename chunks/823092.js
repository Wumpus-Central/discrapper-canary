n.d(t, { L_: () => c, ms: () => s });
var r = n(477900),
    i = n(582128),
    u = n(625494),
    o = n(115063);
n(46121);
var l = n(652215);
let a = i.createContext(void 0);
function s(e) {
    let { children: t } = e,
        n = i.useRef(1.4),
        [s, c] = i.useState(!1),
        T = i.useCallback((e) => {
            (c(e?.some((e) => e.showNotice() && !e.canCloseEarly?.()) ?? !1), (n.current = 1.4));
        }, []),
        d = i.useCallback(
            (e) => {
                if (s) {
                    ((0, o.fO)({ duration: 300, intensity: n.current }),
                        (n.current = Math.min(n.current + 2, 15)),
                        u._.dispatch(l.jej.EMPHASIZE_NOTICE));
                    return;
                }
                e();
            },
            [s],
        ),
        O = i.useMemo(() => ({ navigateWithValidation: d, showNotice: s, handleStoreUpdate: T }), [d, s, T]);
    return (0, r.jsx)(a.Provider, { value: O, children: t });
}
function c() {
    let e = i.useContext(a);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
