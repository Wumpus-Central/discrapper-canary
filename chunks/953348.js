n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(315710),
    r = n(834730),
    a = n(508274),
    o = n(265872),
    d = n(985018),
    c = n(796969);
function u(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: o, onSecondaryColorChange: u } = e,
        m = l.useRef(null);
    return (
        (0, s.t)(m),
        (0, i.jsxs)("div", {
            className: c.jC,
            children: [
                (0, i.jsx)(r.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: c.Fb,
                    children: d.intl.string(d.t.JhNpgy),
                }),
                (0, i.jsxs)("div", {
                    ref: m,
                    className: c.Kf,
                    children: [
                        (0, i.jsxs)("div", {
                            className: c.sg,
                            children: [
                                (0, i.jsx)("div", { className: c.oP, style: { backgroundColor: n.primary } }),
                                (0, i.jsx)(r.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: d.intl.string(d.t.C3KTQk),
                                }),
                                (0, i.jsx)(a.VN, {
                                    className: c.Ei,
                                    value: n.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: "div",
                                    showEyeDropper: !0,
                                    onChange: o,
                                }),
                            ],
                        }),
                        t &&
                            (0, i.jsxs)("div", {
                                className: c.sg,
                                children: [
                                    (0, i.jsx)("div", { className: c.oP, style: { backgroundColor: n.secondary } }),
                                    (0, i.jsx)(r.E, {
                                        variant: "text-xs/medium",
                                        color: "text-default",
                                        children: d.intl.string(d.t["8elvy6"]),
                                    }),
                                    (0, i.jsx)(a.VN, {
                                        className: c.Ei,
                                        value: n.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: "div",
                                        showEyeDropper: !0,
                                        onChange: u,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function m(e) {
    let {
        shouldShow: t,
        showSecondaryColor: n,
        onRequestClose: l,
        children: s,
        palette: r,
        onPrimaryColorChange: a,
        onSecondaryColorChange: d,
        popoutTargetRef: c,
    } = e;
    return (0, i.jsx)(o.Y, {
        targetElementRef: c,
        renderPopout: () =>
            (0, i.jsx)(u, { showSecondaryColor: n, palette: r, onPrimaryColorChange: a, onSecondaryColorChange: d }),
        position: "top",
        shouldShow: t,
        onRequestClose: l,
        animation: o.Y.Animation.TRANSLATE,
        animationPosition: "right",
        children: s,
    });
}
