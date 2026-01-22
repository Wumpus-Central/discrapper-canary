t.d(a, {
    default: () => s,
});
var n = t(627968),
    r = t(64700),
    d = t(397927),
    f = t(444927),
    c = t(612479),
    b = t(954571),
    l = t(34550),
    o = t(14594),
    i = t(652215),
    u = t(985018);

function s(e) {
    let { onClose: a, transitionState: s } = e,
        p = (0, f.A)(o.jZ),
        g = r.useMemo(() => p.map((e) => e.value), [p]);
    r.useEffect(() => {
        b.default.track(i.HAw.OPEN_MODAL, {
            type: "Ignore User Feedback",
        });
    }, []);
    let h = r.useCallback((e) => {
        var a;
        let { rating: r, problem: f, feedback: c } = e,
            b = null == r;
        (0, l.mf)(r, c, null != (a = null == f ? void 0 : f.value) ? a : null, b),
            b ||
                (0, d.mMO)(async () => {
                    let { default: e } = await t.e("37836").then(t.bind(t, 845671));
                    return (a) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
                                for (var a = 1; a < arguments.length; a++) {
                                    var t = null != arguments[a] ? arguments[a] : {},
                                        n = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (a) {
                                            var n;
                                            (n = t[a]),
                                                a in e
                                                    ? Object.defineProperty(e, a, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[a] = n);
                                        });
                                }
                                return e;
                            })(
                                {
                                    body: u.intl.string(u.t["d9+vQ8"]),
                                },
                                a,
                            ),
                        );
                });
    }, []);
    return (0, n.jsx)(c.A, {
        modalType: "ignore_user",
        header: u.intl.string(u.t.Ib6bic),
        body: u.intl.string(u.t["uW0/nV"]),
        problemTitle: u.intl.string(u.t.avs5Vg),
        problems: p,
        freeformNeededProblems: g,
        onSubmit: h,
        onClose: a,
        transitionState: s,
        otherKey: o.w$.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: (e) =>
            null == e ? null : e.value === o.w$.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel3),
    });
}
