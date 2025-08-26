t.d(A, { Z: () => u }), t(388685);
var n = t(951288),
    r = t(647438),
    a = t(120356),
    l = t.n(a),
    i = t(159691),
    o = t(481060),
    s = t(313201),
    d = t(388032),
    c = t(750404);
function u(e) {
    let { disabled: A = !1, disabledTooltip: t, published: a, submitting: u = !1, onClick: g } = e,
        f = (0, s.Dt)(),
        [p, m] = r.useState(a);
    return (
        r.useEffect(() => {
            m((e) => e || a);
        }, [a]),
        (0, n.jsxs)("div", {
            className: l()(
                {
                    [c.publishable]: !A && !a,
                    [c.wasEverPublished]: p,
                },
                c.outerContainer,
            ),
            children: [
                (0, n.jsxs)("div", {
                    className: c.container,
                    children: [
                        (0, n.jsxs)("div", {
                            className: c.explanationColumn,
                            children: [
                                (0, n.jsx)(o.X6q, {
                                    variant: "text-sm/semibold",
                                    color: "header-primary",
                                    children: a ? d.intl.string(d.t.VaaagY) : d.intl.string(d.t.oI8aQU),
                                }),
                                (0, n.jsx)(o.Text, {
                                    id: f,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: a ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"]),
                                }),
                            ],
                        }),
                        (0, n.jsx)(i.zx, {
                            text: a ? d.intl.string(d.t.DlJOvr) : d.intl.string(d.t.X7YGXF),
                            icon: a ? o.kZF : o.T$Z,
                            iconPosition: "end",
                            variant: a ? "critical-primary" : "expressive",
                            "aria-describedby": f,
                            "aria-disabled": A,
                            disabled: A,
                            onClick: A ? void 0 : g,
                            loading: u,
                        }),
                    ],
                }),
                A &&
                    (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        })
    );
}
