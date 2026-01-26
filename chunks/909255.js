n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(397927),
    s = n(976860),
    o = n(652215),
    c = n(49999),
    u = n(49370),
    d = n(985018),
    p = n(880055);

function h(e) {
    let { targetElementRef: t, dismissPopover: n, children: h } = e,
        g = i.useCallback(() => {
            n(c.i.TAKE_ACTION), (0, s.pX)("".concat(o.BVt.NITRO_HOME, "?section=orbs"));
        }, [n]),
        f = (0, r.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(c.i.USER_DISMISS),
            graphic: {
                type: "image",
                src: p.A,
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
            title: d.intl.string(u.default["3BI7j6"]),
            body: d.intl.string(u.default.XNHr3C),
            actions: [
                {
                    text: d.intl.string(d.t.hvVgAZ),
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
        children: [
            (0, r.jsx)("div", {
                children: h,
            }),
            f,
        ],
    });
}
