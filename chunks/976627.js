_.d(t, { default: () => d });
var o = _(627968),
    c = _(64700),
    n = _(397927),
    i = _(444927),
    r = _(612479),
    a = _(954571),
    l = _(34550),
    b = _(14594),
    s = _(652215),
    u = _(985018);
function d(e) {
    let { onClose: t, transitionState: d } = e,
        m = (0, i.A)(b.jZ),
        p = c.useMemo(() => m.map((e) => e.value), [m]);
    c.useEffect(() => {
        a.default.track(s.HAw.OPEN_MODAL, { type: "Ignore User Feedback" });
    }, []);
    let h = c.useCallback((e) => {
        let { rating: t, problem: c, feedback: i } = e,
            r = null == t;
        (0, l.mf)(t, i, c?.value ?? null, r),
            r ||
                (0, n.mMO)(async () => {
                    let { default: e } = await _.e("37836").then(_.bind(_, 845671));
                    return (t) => (0, o.jsx)(e, { body: u.intl.string(u.t["d9+vQ8"]), ...t });
                });
    }, []);
    return (0, o.jsx)(r.A, {
        modalType: "ignore_user",
        header: u.intl.string(u.t.Ib6bic),
        body: u.intl.string(u.t["uW0/nV"]),
        problemTitle: u.intl.string(u.t.avs5Vg),
        problems: m,
        freeformNeededProblems: p,
        onSubmit: h,
        onClose: t,
        transitionState: d,
        otherKey: b.w$.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e ? null : e.value === b.w$.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel3),
    });
}
