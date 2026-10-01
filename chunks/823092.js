r.d(t, { L_: () => c, ms: () => u });
var n = r(477900),
    i = r(582128),
    a = r(625494),
    s = r(115063);
r(46121);
var l = r(652215);
let o = i.createContext(void 0);
function u(e) {
    let { children: t } = e,
        r = i.useRef(1.4),
        [u, c] = i.useState(!1),
        d = i.useCallback((e) => {
            (c(e?.some((e) => e.showNotice() && !e.canCloseEarly?.()) ?? !1), (r.current = 1.4));
        }, []),
        C = i.useCallback(
            (e) => {
                if (u) {
                    ((0, s.fO)({ duration: 300, intensity: r.current }),
                        (r.current = Math.min(r.current + 2, 15)),
                        a._.dispatch(l.jej.EMPHASIZE_NOTICE));
                    return;
                }
                e();
            },
            [u],
        ),
        O = i.useMemo(() => ({ navigateWithValidation: C, showNotice: u, handleStoreUpdate: d }), [C, u, d]);
    return (0, n.jsx)(o.Provider, { value: O, children: t });
}
function c() {
    let e = i.useContext(o);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
