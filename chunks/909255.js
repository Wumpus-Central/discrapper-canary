n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(397927),
    s = n(976860),
    o = n(84483),
    c = n(652215),
    u = n(49999),
    d = n(49370),
    p = n(985018),
    f = n(880055);
function h(e) {
    let { targetElementRef: t, dismissPopover: n, children: h } = e,
        { orbsRewardAmount: A } = (0, o.uX)("PremiumOrbRewardsUpsellPopover"),
        g = i.useCallback(() => {
            n(u.i.TAKE_ACTION), (0, s.pX)(c.BVt.APPLICATION_STORE);
        }, [n]),
        m = (0, r.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(u.i.USER_DISMISS),
            graphic: {
                type: "image",
                src: f.A,
            },
            badge: {
                type: "beta",
                variant: "expressive",
            },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: p.intl.string(d.default["3BI7j6"]),
            body: p.intl.formatToPlainString(d.default.FGYM4u, { orbsCount: A }),
            actions: [
                {
                    text: p.intl.string(p.t.hvVgAZ),
                    onClick: g,
                },
            ],
            gradientColor: {
                type: "custom",
                start: a.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
                end: a.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { children: h }), m],
    });
}
