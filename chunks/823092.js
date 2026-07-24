i.d(t, { L_: () => d, ms: () => u });
var n = i(627968),
    s = i(64700),
    l = i(625494),
    r = i(115063);
i(46121);
var a = i(652215);
let o = s.createContext(void 0);
function u(e) {
    let { children: t } = e,
        i = s.useRef(1.4),
        [u, d] = s.useState(!1),
        c = s.useCallback((e) => {
            d(e?.some((e) => e.showNotice() && !e.canCloseEarly?.()) ?? !1), (i.current = 1.4);
        }, []),
        g = s.useCallback(
            (e) => {
                if (u) {
                    (0, r.fO)({ duration: 300, intensity: i.current }),
                        (i.current = Math.min(i.current + 2, 15)),
                        l._.dispatch(a.jej.EMPHASIZE_NOTICE);
                    return;
                }
                e();
            },
            [u],
        ),
        m = s.useMemo(() => ({ navigateWithValidation: g, showNotice: u, handleStoreUpdate: c }), [g, u, c]);
    return (0, n.jsx)(o.Provider, { value: m, children: t });
}
function d() {
    let e = s.useContext(o);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
