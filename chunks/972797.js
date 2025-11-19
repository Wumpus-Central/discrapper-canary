A.d(t, { Z: () => c }), A(388685);
var n = A(54381),
    r = A(473749),
    a = A(120356),
    i = A.n(a),
    l = A(159691),
    o = A(481060),
    s = A(313201),
    d = A(388032),
    u = A(478552);
function c(e) {
    let { disabled: t = !1, disabledTooltip: A, published: a, submitting: c = !1, onClick: g } = e,
        f = (0, s.Dt)(),
        [p, m] = r.useState(a);
    return (
        r.useEffect(() => {
            m((e) => e || a);
        }, [a]),
        (0, n.jsxs)("div", {
            className: i()(
                {
                    [u.publishable]: !t && !a,
                    [u.wasEverPublished]: p,
                },
                u.outerContainer,
            ),
            children: [
                (0, n.jsxs)("div", {
                    className: u.container,
                    children: [
                        (0, n.jsxs)("div", {
                            className: u.explanationColumn,
                            children: [
                                (0, n.jsx)(o.Heading, {
                                    variant: "text-sm/semibold",
                                    color: "header-primary",
                                    children: a ? d.intl.string(d.t.Vaaagc) : d.intl.string(d.t.oI8aQf),
                                }),
                                (0, n.jsx)(o.Text, {
                                    id: f,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: a ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"]),
                                }),
                            ],
                        }),
                        (0, n.jsx)(l.zxk, {
                            text: a ? d.intl.string(d.t.DlJOvl) : d.intl.string(d.t.X7YGXE),
                            icon: a ? o.kZF : o.T$Z,
                            iconPosition: "end",
                            variant: a ? "critical-primary" : "expressive",
                            "aria-describedby": f,
                            "aria-disabled": t,
                            disabled: t,
                            onClick: t ? void 0 : g,
                            loading: c,
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
