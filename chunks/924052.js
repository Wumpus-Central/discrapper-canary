n.d(t, {
    Cu: () => d,
    Ri: () => u,
}),
    n(388685),
    n(415506);
var r = n(951288),
    l = n(647438),
    o = n(503089),
    i = n(585483),
    a = n(88658),
    s = n(981631);
let c = l.createContext(void 0);
function u(e) {
    let { children: t } = e,
        n = l.useRef(o.$x),
        [u, d] = l.useState(!1),
        f = l.useCallback((e) => {
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
                (n.current = o.$x);
        }, []),
        m = l.useCallback(
            (e) => {
                if (u) {
                    (0, a.Aj)({
                        duration: 300,
                        intensity: n.current,
                    }),
                        (n.current = Math.min(n.current + o.d7, o.w6)),
                        i.S.dispatch(s.CkL.EMPHASIZE_NOTICE);
                    return;
                }
                e();
            },
            [u],
        ),
        b = l.useMemo(
            () => ({
                navigateWithValidation: m,
                showNotice: u,
                handleStoreUpdate: f,
            }),
            [m, u, f],
        );
    return (0, r.jsx)(c.Provider, {
        value: b,
        children: t,
    });
}
function d() {
    let e = l.useContext(c);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e;
}
