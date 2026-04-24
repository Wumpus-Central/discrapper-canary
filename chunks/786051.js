n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(607399),
    a = n(17928),
    r = n(604121),
    o = n(534514),
    c = n(834730),
    d = n(123292),
    u = n(821609),
    h = n(576470),
    m = n(761640),
    p = n(991680);
let g = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: g,
            buttonText: A,
            buttonIcon: f,
            buttonSubmitting: _,
            onButtonClick: E,
            imageSrc: C,
            animationSrc: x,
            secondaryButtonText: b,
            onSecondaryButtonClick: S,
            children: I,
            useReducedMotion: y = !1,
            buttonVariant: T,
        } = e,
        v = (0, a.bG)([m.Ay], () => m.Ay.getState().isMembersOpen);
    if (s.Fr && v) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: l.Children.only(I) });
    let N = null;
    return (
        null != C
            ? (N = (0, i.jsx)("img", { alt: "", src: C, className: p.Sl }))
            : null != x && (N = (0, i.jsx)(r.a, { importData: x, shouldAnimate: !y, className: p.lY })),
        (0, i.jsxs)("div", {
            className: p.iE,
            children: [
                (0, i.jsxs)("div", {
                    className: p.Qs,
                    children: [
                        N,
                        (0, i.jsxs)("div", {
                            className: p.Qq,
                            children: [
                                (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: p.DD, children: t }),
                                null != n &&
                                    (0, i.jsx)(c.E, { color: "text-muted", variant: "text-xs/normal", children: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: p.UD,
                    children: [
                        null != b &&
                            (0, i.jsx)("div", {
                                className: p.x6,
                                children: (0, i.jsx)(d.Q, { textVariant: "text-sm/semibold", text: b, onClick: S }),
                            }),
                        null != A &&
                            (0, i.jsx)("div", {
                                className: p.x6,
                                children: (0, i.jsx)(u.$, {
                                    text: A,
                                    size: "sm",
                                    variant: T ?? "secondary",
                                    onClick: E,
                                    loading: _,
                                    icon: f,
                                }),
                            }),
                    ],
                }),
                null != g && (0, i.jsx)(h.A, { className: p.qW, deadline: g }),
            ],
        })
    );
};
