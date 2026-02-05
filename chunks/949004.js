r.d(t, { default: () => E });
var n = r(627968),
    o = r(64700),
    i = r(397927),
    a = r(444927),
    _ = r(379848),
    l = r(612479),
    s = r(954571),
    c = r(34550),
    u = r(14594),
    d = r(652215),
    b = r(294589),
    m = r(985018);
function E(e) {
    let { onClose: t, transitionState: E, dismissibleContent: g } = e;
    (0, _.kn)([g]);
    let f = (0, a.A)((0, u.ay)(g)),
        A = o.useMemo(() => f.map((e) => e.value), [f]);
    o.useEffect(() => {
        s.default.track(d.HAw.OPEN_MODAL, { type: "Age Verification User Feedback" });
    }, []);
    let S = o.useCallback(
        (e) => {
            let { rating: t, problem: o, feedback: a } = e,
                _ = null == t,
                l = (0, c.JO)(g);
            (0, c.dN)(t, "" !== a ? a : null, o?.value ?? null, _, l),
                _ ||
                    (0, i.mMO)(async () => {
                        let { default: e } = await r.e("37836").then(r.bind(r, 845671));
                        return (t) => (0, n.jsx)(e, { body: m.intl.string(b.default["4djgO/"]), ...t });
                    });
        },
        [g],
    );
    return (0, n.jsx)(l.A, {
        modalType: "age_verification",
        header: m.intl.string(b.default.RqoA4v),
        body: m.intl.string(b.default.RPb8Zk),
        problemTitle: m.intl.string(b.default.KZw6kn),
        problems: f,
        freeformNeededProblems: A,
        onSubmit: S,
        onClose: t,
        transitionState: E,
        otherKey: u.VY.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e
                ? null
                : e.value === u.VY.SOMETHING_ELSE
                  ? m.intl.string(b.default.Q5cQ46)
                  : m.intl.string(b.default.zApKaR),
    });
}
