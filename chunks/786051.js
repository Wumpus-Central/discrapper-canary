n.d(t, { A: () => p });
var l = n(627968),
    i = n(64700),
    s = n(607399),
    a = n(17928),
    r = n(604121),
    o = n(534514),
    c = n(834730),
    d = n(123292),
    u = n(821609),
    h = n(576470),
    m = n(761640),
    g = n(991680);
let p = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: p,
            buttonText: A,
            buttonIcon: f,
            buttonSubmitting: C,
            onButtonClick: E,
            imageSrc: x,
            animationSrc: S,
            secondaryButtonText: _,
            onSecondaryButtonClick: I,
            children: j,
            useReducedMotion: y = !1,
            buttonVariant: b,
        } = e,
        T = (0, a.bG)([m.Ay], () => m.Ay.getState().isMembersOpen);
    if (s.Fr && T) return null;
    if (null == t) return (0, l.jsx)(l.Fragment, { children: i.Children.only(j) });
    let N = null;
    return (
        null != x
            ? (N = (0, l.jsx)("img", { alt: "", src: x, className: g.Sl }))
            : null != S && (N = (0, l.jsx)(r.a, { importData: S, shouldAnimate: !y, className: g.lY })),
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
                        null != _ &&
                            (0, l.jsx)("div", {
                                className: g.x6,
                                children: (0, l.jsx)(d.Q, { textVariant: "text-sm/semibold", text: _, onClick: I }),
                            }),
                        null != A &&
                            (0, l.jsx)("div", {
                                className: g.x6,
                                children: (0, l.jsx)(u.$, {
                                    text: A,
                                    size: "sm",
                                    variant: b ?? "secondary",
                                    onClick: E,
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
