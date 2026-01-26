n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(362599),
    a = n(342494),
    s = n(397927),
    o = n(976860),
    c = n(652215),
    u = n(49999),
    d = n(49370),
    p = n(985018);

function h(e) {
    let { targetElementRef: t, dismissPopover: n, children: h } = e,
        g = i.useCallback(() => {
            n(u.i.TAKE_ACTION), (0, o.pX)("".concat(c.BVt.NITRO_HOME, "?section=orbs"));
        }, [n]),
        f = (0, r.jsx)(a.AM, {
            targetElementRef: t,
            onRequestClose: () => n(u.i.USER_DISMISS),
            graphic: {
                type: "rive",
                rive: l.Z,
            },
            badge: {
                type: "beta",
                variant: "expressive",
            },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: {
                align: "start",
            },
            size: "md",
            title: p.intl.string(d.default["3BI7j6"]),
            body: p.intl.string(d.default.XNHr3C),
            actions: [
                {
                    text: p.intl.string(p.t.hvVgAZ),
                    onClick: g,
                },
            ],
            gradientColor: {
                type: "custom",
                start: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
                end: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                children: h,
            }),
            f,
        ],
    });
}
