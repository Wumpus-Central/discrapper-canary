n.d(t, {
    Cu: () => d,
    Ri: () => u,
    Tx: () => c,
}),
    n(388685),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(503089),
    o = n(585483),
    s = n(88658),
    l = n(981631);
let c = i.createContext(void 0);
function u(e) {
    let { children: t } = e,
        n = i.useRef(a.$x),
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
                (n.current = a.$x);
        }, []),
        p = i.useCallback(
            (e) => {
                if (u) {
                    (0, s.Aj)({
                        duration: 300,
                        intensity: n.current,
                    }),
                        (n.current = Math.min(n.current + a.d7, a.w6)),
                        o.S.dispatch(l.CkL.EMPHASIZE_NOTICE);
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
