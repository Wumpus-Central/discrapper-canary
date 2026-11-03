t.d(n, { A: () => c });
var l = t(582128),
    u = t(811587),
    r = t(79733),
    a = t(477900),
    i = t(192308);
let o = "conjure-publish";
function s(e) {
    let n = (0, i.getInteractingModalContext)(),
        l = { current: !1 };
    (0, i.openModalLazy)(
        async () => {
            let { default: n } = await Promise.all([
                t.e("445150"),
                t.e("880475"),
                t.e("460773"),
                t.e("208018"),
                t.e("850140"),
                t.e("801342"),
                t.e("924150"),
            ]).then(t.bind(t, 372501));
            return (t) => (0, a.jsx)(n, { ...t, ...e, savingRef: l });
        },
        {
            modalKey: o,
            contextKey: n,
            onCloseRequest: () => {
                l.current || (0, i.closeModal)(o, n);
            },
        },
    );
}
function c(e, n, t) {
    let a, i;
    return (
        (a = l.useContext(r.bI)),
        (i = t ?? a),
        l.useCallback(
            (t) => {
                if (null == e || null == n || null == i || n.disabled) return;
                let l = n.status?.publishState;
                n.awaitingApproval || (null != l && (0, u.lE)(l))
                    ? n.run(t)
                    : s({ projectId: e, publishOptions: i, entryPoint: t });
            },
            [e, n, i, s],
        )
    );
}
