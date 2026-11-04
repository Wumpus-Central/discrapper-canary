var i = n(477900),
    a = n(582128),
    s = n(613412),
    r = n(858899),
    l = n(772707),
    c = n(331322),
    o = n(95477),
    u = n(123292),
    p = n(181658),
    y = n(792996),
    g = n(661965);
n.d(
    e,
    {},
    {
        default: function (t) {
            let {
                    transitionState: e,
                    onFormSubmit: n,
                    onResend: d,
                    onSuccess: h,
                    onClose: f,
                    headerText: x,
                    confirmButtonText: m,
                    confirmButtonVariant: k = "primary",
                    impression: b,
                } = t,
                [v, w] = a.useState(!1),
                [C, S] = a.useState(""),
                [j, A] = a.useState(!1),
                [E, M] = a.useState(null),
                P = a.useRef(null),
                T = v || j;
            return (0, i.jsx)("form", {
                onSubmit: async function (t) {
                    (t.preventDefault(), M(null), w(!0));
                    try {
                        let t = await n(C);
                        (null != h && h(t), f());
                    } catch (t) {
                        M(new p.A(t).getAnyErrorMessage());
                    } finally {
                        w(!1);
                    }
                },
                children: (0, i.jsx)(l.k, {
                    transitionState: e,
                    trackingProps: { impression: b, impressionType: s.ImpressionTypes.MODAL },
                    graphic: { src: g, type: "image" },
                    title: x,
                    subtitle: y.intl.string(y.t.SZJowy),
                    actions: [
                        { text: y.intl.string(y.t["ETE/oC"]), onClick: f, variant: "secondary", disabled: T },
                        { text: m, variant: k, loading: T, type: "submit" },
                    ],
                    onClose: f,
                    children: (0, i.jsxs)(c.B, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(o.k, {
                                label: y.intl.string(y.t["8mZX6M"]),
                                error: E,
                                value: C,
                                onChange: S,
                                inputRef: P,
                            }),
                            (0, i.jsx)(u.Q, {
                                textVariant: "body-sm/normal",
                                text: y.intl.string(y.t.K0NPQ6),
                                onClick: async function () {
                                    if (!j) {
                                        A(!0);
                                        try {
                                            (await d(),
                                                (0, r.P0)({ text: y.intl.string(y.t["84yeoz"]), variant: "success" }));
                                        } catch (e) {
                                            let t = new p.A(e).getAnyErrorMessage();
                                            null != t && (0, r.P0)({ text: t, variant: "critical" });
                                        } finally {
                                            A(!1);
                                        }
                                    }
                                },
                            }),
                        ],
                    }),
                }),
            });
        },
    },
);
