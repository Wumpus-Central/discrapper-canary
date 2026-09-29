n.d(t, { A: () => p });
var l = n(477900),
    i = n(582128),
    s = n(607399),
    a = n(17928),
    r = n(604121),
    o = n(297264),
    c = n(834730),
    d = n(123292),
    u = n(821609),
    h = n(576470),
    m = n(761640),
    g = n(473745);
let p = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: p,
            buttonText: A,
            buttonIcon: f,
            buttonSubmitting: C,
            onButtonClick: x,
            imageSrc: E,
            animationSrc: S,
            secondaryButtonText: I,
            onSecondaryButtonClick: j,
            children: y,
            useReducedMotion: _ = !1,
            buttonVariant: v,
        } = e,
        b = (0, a.bG)([m.Ay], () => m.Ay.getState().isMembersOpen);
    if (s.Fr && b) return null;
    if (null == t) return (0, l.jsx)(l.Fragment, { children: i.Children.only(y) });
    let N = null;
    return (
        null != E
            ? (N = (0, l.jsx)("img", { alt: "", src: E, className: g.Sl }))
            : null != S && (N = (0, l.jsx)(r.a, { importData: S, shouldAnimate: !_, className: g.lY })),
        (0, l.jsxs)("div", {
            className: g.iE,
            children: [
                (0, l.jsxs)("div", {
                    className: g.Qs,
                    children: [
                        N,
                        (0, l.jsxs)("div", {
                            className: g.Qq,
                            children: [
                                (0, l.jsx)(o.D, { variant: "heading-md/semibold", className: g.DD, children: t }),
                                null != n &&
                                    (0, l.jsx)(c.E, { color: "text-muted", variant: "text-xs/normal", children: n }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: g.UD,
                    children: [
                        null != I &&
                            (0, l.jsx)("div", {
                                className: g.x6,
                                children: (0, l.jsx)(d.Q, { textVariant: "text-sm/semibold", text: I, onClick: j }),
                            }),
                        null != A &&
                            (0, l.jsx)("div", {
                                className: g.x6,
                                children: (0, l.jsx)(u.$, {
                                    text: A,
                                    size: "sm",
                                    variant: v ?? "secondary",
                                    onClick: x,
                                    loading: C,
                                    icon: f,
                                }),
                            }),
                    ],
                }),
                null != p && (0, l.jsx)(h.A, { className: g.qW, deadline: p }),
            ],
        })
    );
};
