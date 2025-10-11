A.d(t, { Z: () => u }), A(388685);
var n = A(951288),
    r = A(647438),
    a = A(120356),
    l = A.n(a),
    i = A(159691),
    o = A(481060),
    s = A(313201),
    d = A(388032),
    c = A(750404);
function u(e) {
    let { disabled: t = !1, disabledTooltip: A, published: a, submitting: u = !1, onClick: g } = e,
        f = (0, s.Dt)(),
        [p, m] = r.useState(a);
    return (
        r.useEffect(() => {
            m((e) => e || a);
        }, [a]),
        (0, n.jsxs)("div", {
            className: l()(
                {
                    [c.publishable]: !t && !a,
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
                                (0, n.jsx)(o.Heading, {
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
                        (0, n.jsx)(i.zxk, {
                            text: a ? d.intl.string(d.t.DlJOvr) : d.intl.string(d.t.X7YGXF),
                            icon: a ? o.kZF : o.T$Z,
                            iconPosition: "end",
                            variant: a ? "critical-primary" : "expressive",
                            "aria-describedby": f,
                            "aria-disabled": t,
                            disabled: t,
                            onClick: t ? void 0 : g,
                            loading: u,
                        }),
                    ],
                }),
                t &&
                    (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A,
                    }),
            ],
        })
    );
}
