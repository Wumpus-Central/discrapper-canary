t.d(a, {
    default: () => g,
});
var d = t(627968),
    f = t(64700),
    n = t(397927),
    r = t(444927),
    l = t(379848),
    c = t(612479),
    b = t(954571),
    i = t(34550),
    o = t(14594),
    u = t(652215),
    s = t(294589),
    p = t(985018);

function g(e) {
    let { onClose: a, transitionState: g, dismissibleContent: O } = e;
    (0, l.kn)([O]);
    let _ = (0, r.A)((0, o.ay)(O)),
        k = f.useMemo(() => _.map((e) => e.value), [_]);
    f.useEffect(() => {
        b.default.track(u.HAw.OPEN_MODAL, {
            type: "Age Verification User Feedback",
        });
    }, []);
    let m = f.useCallback(
        (e) => {
            var a;
            let { rating: f, problem: r, feedback: l } = e,
                c = null == f,
                b = (0, i.JO)(O);
            (0, i.dN)(f, "" !== l ? l : null, null != (a = null == r ? void 0 : r.value) ? a : null, c, b),
                c ||
                    (0, n.mMO)(async () => {
                        let { default: e } = await t.e("37836").then(t.bind(t, 845671));
                        return (a) =>
                            (0, d.jsx)(
                                e,
                                (function (e) {
                                    for (var a = 1; a < arguments.length; a++) {
                                        var t = null != arguments[a] ? arguments[a] : {},
                                            d = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (d = d.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                }),
                                            )),
                                            d.forEach(function (a) {
                                                var d;
                                                (d = t[a]),
                                                    a in e
                                                        ? Object.defineProperty(e, a, {
                                                              value: d,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[a] = d);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        body: p.intl.string(s.default["4djgO/"]),
                                    },
                                    a,
                                ),
                            );
                    });
        },
        [O],
    );
    return (0, d.jsx)(c.A, {
        modalType: "age_verification",
        header: p.intl.string(s.default.RqoA4v),
        body: p.intl.string(s.default.RPb8Zk),
        problemTitle: p.intl.string(s.default.KZw6kn),
        problems: _,
        freeformNeededProblems: k,
        onSubmit: m,
        onClose: a,
        transitionState: g,
        otherKey: o.VY.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e
                ? null
                : e.value === o.VY.SOMETHING_ELSE
                  ? p.intl.string(s.default.Q5cQ46)
                  : p.intl.string(s.default.zApKaR),
    });
}
