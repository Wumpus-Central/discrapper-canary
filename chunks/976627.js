var l = n(477900),
    i = n(582128),
    r = n(192308),
    s = n(444927),
    a = n(612479),
    u = n(129230),
    o = n(813393),
    d = n(14594),
    c = n(652215),
    b = n(792996);
n.d(
    t,
    {},
    {
        default: function (e) {
            let { onClose: t, transitionState: h } = e,
                p = (0, s.A)(d.jZ),
                f = i.useMemo(() => p.map((e) => e.value), [p]);
            i.useEffect(() => {
                u.default.track(c.HAw.OPEN_MODAL, { type: "Ignore User Feedback" });
            }, []);
            let m = i.useCallback((e) => {
                let { rating: t, problem: i, feedback: s } = e,
                    a = null == t;
                ((0, o.mf)(t, s, i?.value ?? null, a),
                    a ||
                        (0, r.mM)(async () => {
                            let { default: e } = await n.e(137836).then(n.bind(n, 845671));
                            return (t) => (0, l.jsx)(e, { body: b.intl.string(b.t["d9+vQ8"]), ...t });
                        }));
            }, []);
            return (0, l.jsx)(a.A, {
                modalType: "ignore_user",
                header: b.intl.string(b.t.Ib6bic),
                body: b.intl.string(b.t["uW0/nV"]),
                problemTitle: b.intl.string(b.t.avs5Vg),
                problems: p,
                freeformNeededProblems: f,
                onSubmit: m,
                onClose: t,
                transitionState: h,
                otherKey: d.w$.SOMETHING_ELSE,
                hideHelpDeskLink: !0,
                hideDontShowAgainCheckbox: !0,
                freeformDescription: function (e) {
                    return null == e
                        ? null
                        : e.value === d.w$.SOMETHING_ELSE
                          ? b.intl.string(b.t.h95hcn)
                          : b.intl.string(b.t.wRGel3);
                },
            });
        },
    },
);
