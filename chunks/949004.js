r.d(t, { default: () => m });
var o = r(627968),
    a = r(64700),
    l = r(192308),
    n = r(444927),
    i = r(932001),
    s = r(612479),
    u = r(954571),
    d = r(34550),
    c = r(14594),
    _ = r(652215),
    b = r(425548),
    g = r(985018);
function m(e) {
    let { onClose: t, transitionState: m, dismissibleContent: f } = e;
    (0, i.kn)([f]);
    let p = (0, n.A)((0, c.ay)(f)),
        h = a.useMemo(() => p.map((e) => e.value), [p]);
    a.useEffect(() => {
        u.default.track(_.HAw.OPEN_MODAL, { type: "Age Verification User Feedback" });
    }, []);
    let E = a.useCallback(
        (e) => {
            let { rating: t, problem: a, feedback: n } = e,
                i = null == t,
                s = (0, d.JO)(f);
            (0, d.dN)(t, "" !== n ? n : null, a?.value ?? null, i, s),
                i ||
                    (0, l.openModalLazy)(async () => {
                        let { default: e } = await r.e("37836").then(r.bind(r, 845671));
                        return (t) => (0, o.jsx)(e, { body: g.intl.string(b.default["4djgO/"]), ...t });
                    });
        },
        [f],
    );
    return (0, o.jsx)(s.A, {
        modalType: "age_verification",
        header: g.intl.string(b.default.RqoA4v),
        body: g.intl.string(b.default.RPb8Zk),
        problemTitle: g.intl.string(b.default.KZw6kn),
        problems: p,
        freeformNeededProblems: h,
        onSubmit: E,
        onClose: t,
        transitionState: m,
        otherKey: c.VY.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e
                ? null
                : e.value === c.VY.SOMETHING_ELSE
                  ? g.intl.string(b.default.Q5cQ46)
                  : g.intl.string(b.default.zApKaR),
    });
}
