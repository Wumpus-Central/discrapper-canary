n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    r = n(362599),
    a = n(342494),
    s = n(976860),
    o = n(235365),
    d = n(652215),
    c = n(49999),
    u = n(188875),
    A = n(985018);
function h(e) {
    let { targetElementRef: t, dismissPopover: n, children: h } = e,
        _ = l.useCallback(() => {
            n(c.i.TAKE_ACTION), (0, s.pX)(`${d.BVt.NITRO_HOME}?section=${o.L}`);
        }, [n]),
        m = (0, i.jsx)(a.AM, {
            targetElementRef: t,
            onRequestClose: () => n(c.i.USER_DISMISS),
            graphic: { type: "rive", rive: r.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: A.intl.string(u.default["3BI7j6"]),
            body: A.intl.string(u.default.XNHr3C),
            actions: [{ text: A.intl.string(A.t.hvVgAZ), onClick: _ }],
            gradientColor: "nitro-pink",
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: h }), m] });
}
