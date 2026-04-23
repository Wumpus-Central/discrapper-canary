a.d(l, { A: () => g });
var t = a(627968),
    s = a(64700),
    i = a(362599),
    n = a(265486),
    c = a(976860),
    h = a(235365),
    r = a(652215),
    o = a(49999),
    d = a(490285),
    v = a(985018);
function g(e) {
    let { targetElementRef: l, dismissPopover: a, children: g } = e,
        p = s.useCallback(() => {
            a(o.i.TAKE_ACTION), (0, c.pX)(`${r.BVt.NITRO_HOME}?section=${h.L}`);
        }, [a]),
        m = (0, t.jsx)(n.A, {
            targetElementRef: l,
            onRequestClose: () => a(o.i.USER_DISMISS),
            graphic: { type: "rive", rive: i.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: v.intl.string(d.default["3BI7j6"]),
            body: v.intl.string(d.default.XNHr3C),
            actions: [{ text: v.intl.string(v.t.hvVgAZ), onClick: p }],
            gradientColor: "nitro-pink",
        });
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("div", { children: g }), m] });
}
