n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(362599),
    l = n(342494),
    s = n(397927),
    o = n(976860),
    d = n(652215),
    c = n(49999),
    u = n(49370),
    A = n(985018);
function h(e) {
    let { targetElementRef: t, dismissPopover: n, children: h } = e,
        _ = r.useCallback(() => {
            n(c.i.TAKE_ACTION), (0, o.pX)(`${d.BVt.NITRO_HOME}?section=orbs`);
        }, [n]),
        m = (0, i.jsx)(l.AM, {
            targetElementRef: t,
            onRequestClose: () => n(c.i.USER_DISMISS),
            graphic: { type: "rive", rive: a.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: A.intl.string(u.default["3BI7j6"]),
            body: A.intl.string(u.default.XNHr3C),
            actions: [{ text: A.intl.string(A.t.hvVgAZ), onClick: _ }],
            gradientColor: {
                type: "custom",
                start: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
                end: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
            },
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: h }), m] });
}
