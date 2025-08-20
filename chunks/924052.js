n.d(t, {
    Cu: () => c,
    Ri: () => u,
}),
    n(388685),
    n(415506);
var i = n(951288),
    l = n(647438),
    r = n(503089),
    o = n(585483),
    s = n(981631);
let a = l.createContext(void 0);
function u(e) {
    let { children: t } = e,
        n = l.useRef(r.$x),
        [u, c] = l.useState(!1),
        d = l.useCallback((e) => {
            var t;
            c(
                null !=
                    (t =
                        null == e
                            ? void 0
                            : e.some((e) => {
                                  var t;
                                  return e.showNotice() && !(null == (t = e.canCloseEarly) ? void 0 : t.call(e));
                              })) && t,
            ),
                (n.current = r.$x);
        }, []),
        f = l.useCallback(
            (e) => {
                if (u) {
                    o.S.dispatch(s.CkL.SHAKE_APP, {
                        duration: 300,
                        intensity: n.current,
                    }),
                        (n.current = Math.min(n.current + r.d7, r.w6)),
                        o.S.dispatch(s.CkL.EMPHASIZE_NOTICE);
                    return;
                }
                e();
            },
            [u],
        ),
        g = l.useMemo(
            () => ({
                navigateWithValidation: f,
                showNotice: u,
                handleStoreUpdate: d,
            }),
            [f, u, d],
        );
    return (0, i.jsx)(a.Provider, {
        value: g,
        children: t,
    });
}
function c() {
    let e = l.useContext(a);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
