n.d(t, { default: () => b });
var l = n(627968),
    i = n(64700),
    r = n(192308),
    s = n(444927),
    a = n(612479),
    o = n(174459),
    u = n(988903),
    d = n(14594),
    c = n(652215),
    p = n(375708);
function b(e) {
    let { onClose: t, transitionState: b } = e,
        h = (0, s.A)(d.jZ),
        f = i.useMemo(() => h.map((e) => e.value), [h]);
    i.useEffect(() => {
        o.default.track(c.HAw.OPEN_MODAL, { type: "Ignore User Feedback" });
    }, []);
    let g = i.useCallback((e) => {
        let { rating: t, problem: i, feedback: s } = e,
            a = null == t;
        (0, u.mf)(t, s, i?.value ?? null, a),
            a ||
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("37836").then(n.bind(n, 845671));
                    return (t) => (0, l.jsx)(e, { body: p.intl.string(p.t["d9+vQ8"]), ...t });
                });
    }, []);
    return (0, l.jsx)(a.A, {
        modalType: "ignore_user",
        header: p.intl.string(p.t.Ib6bic),
        body: p.intl.string(p.t["uW0/nV"]),
        problemTitle: p.intl.string(p.t.avs5Vg),
        problems: h,
        freeformNeededProblems: f,
        onSubmit: g,
        onClose: t,
        transitionState: b,
        otherKey: d.w$.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e ? null : e.value === d.w$.SOMETHING_ELSE ? p.intl.string(p.t.h95hcn) : p.intl.string(p.t.wRGel3),
    });
}
