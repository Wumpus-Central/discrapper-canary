n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    l = n(362599),
    a = n(342494),
    s = n(976860),
    o = n(652215),
    d = n(49999),
    c = n(723468),
    u = n(985018);
function A(e) {
    let { targetElementRef: t, dismissPopover: n, children: A } = e,
        h = r.useCallback(() => {
            n(d.i.TAKE_ACTION), (0, s.pX)(`${o.BVt.NITRO_HOME}?section=orbs`);
        }, [n]),
        _ = (0, i.jsx)(a.AM, {
            targetElementRef: t,
            onRequestClose: () => n(d.i.USER_DISMISS),
            graphic: { type: "rive", rive: l.Z },
            badge: { type: "beta", variant: "expressive" },
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            size: "md",
            title: u.intl.string(c.default["3BI7j6"]),
            body: u.intl.string(c.default.XNHr3C),
            actions: [{ text: u.intl.string(u.t.hvVgAZ), onClick: h }],
            gradientColor: "nitro-pink",
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: A }), _] });
}
