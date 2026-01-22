n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(985018),
    a = n(872430);
function c(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: c, onSecondaryColorChange: o } = e,
        d = i.useRef(null);
    return (
        (0, l.tjt)(d),
        (0, r.jsxs)("div", {
            className: a.jC,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: a.Fb,
                    children: s.intl.string(s.t.JhNpgy),
                }),
                (0, r.jsxs)("div", {
                    ref: d,
                    className: a.Kf,
                    children: [
                        (0, r.jsxs)("div", {
                            className: a.sg,
                            children: [
                                (0, r.jsx)("div", {
                                    className: a.oP,
                                    style: { backgroundColor: n.primary },
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: s.intl.string(s.t.C3KTQk),
                                }),
                                (0, r.jsx)(l.VNw, {
                                    className: a.Ei,
                                    value: n.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: "div",
                                    showEyeDropper: !0,
                                    onChange: c,
                                }),
                            ],
                        }),
                        t &&
                            (0, r.jsxs)("div", {
                                className: a.sg,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a.oP,
                                        style: { backgroundColor: n.secondary },
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-default",
                                        children: s.intl.string(s.t["8elvy6"]),
                                    }),
                                    (0, r.jsx)(l.VNw, {
                                        className: a.Ei,
                                        value: n.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: "div",
                                        showEyeDropper: !0,
                                        onChange: o,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function o(e) {
    let {
        shouldShow: t,
        showSecondaryColor: n,
        onRequestClose: i,
        children: s,
        palette: a,
        onPrimaryColorChange: o,
        onSecondaryColorChange: d,
        popoutTargetRef: u,
    } = e;
    return (0, r.jsx)(l.YNO, {
        targetElementRef: u,
        renderPopout: () =>
            (0, r.jsx)(c, {
                showSecondaryColor: n,
                palette: a,
                onPrimaryColorChange: o,
                onSecondaryColorChange: d,
            }),
        position: "top",
        shouldShow: t,
        onRequestClose: i,
        animation: l.YNO.Animation.TRANSLATE,
        animationPosition: "right",
        children: s,
    });
}
