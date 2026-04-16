"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(985018),
    a = n(22057);
function o(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: o, onSecondaryColorChange: d } = e,
        c = s.useRef(null);
    return (
        (0, l.tjt)(c),
        (0, i.jsxs)("div", {
            className: a.jC,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: a.Fb,
                    children: r.intl.string(r.t.JhNpgy),
                }),
                (0, i.jsxs)("div", {
                    ref: c,
                    className: a.Kf,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a.sg,
                            children: [
                                (0, i.jsx)("div", { className: a.oP, style: { backgroundColor: n.primary } }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: r.intl.string(r.t.C3KTQk),
                                }),
                                (0, i.jsx)(l.VNw, {
                                    className: a.Ei,
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
                                className: a.sg,
                                children: [
                                    (0, i.jsx)("div", { className: a.oP, style: { backgroundColor: n.secondary } }),
                                    (0, i.jsx)(l.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-default",
                                        children: r.intl.string(r.t["8elvy6"]),
                                    }),
                                    (0, i.jsx)(l.VNw, {
                                        className: a.Ei,
                                        value: n.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: "div",
                                        showEyeDropper: !0,
                                        onChange: d,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function d(e) {
    let {
        shouldShow: t,
        showSecondaryColor: n,
        onRequestClose: s,
        children: r,
        palette: a,
        onPrimaryColorChange: d,
        onSecondaryColorChange: c,
        popoutTargetRef: u,
    } = e;
    return (0, i.jsx)(l.YNO, {
        targetElementRef: u,
        renderPopout: () =>
            (0, i.jsx)(o, { showSecondaryColor: n, palette: a, onPrimaryColorChange: d, onSecondaryColorChange: c }),
        position: "top",
        shouldShow: t,
        onRequestClose: s,
        animation: l.YNO.Animation.TRANSLATE,
        animationPosition: "right",
        children: r,
    });
}
