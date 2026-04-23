n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(607399),
    s = n(311907),
    r = n(604121),
    o = n(534514),
    c = n(834730),
    d = n(123292),
    u = n(821609),
    h = n(576470),
    m = n(761640),
    A = n(991680);
let g = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: g,
            buttonText: _,
            buttonIcon: p,
            buttonSubmitting: f,
            onButtonClick: E,
            imageSrc: C,
            animationSrc: x,
            secondaryButtonText: S,
            onSecondaryButtonClick: I,
            children: v,
            useReducedMotion: N = !1,
            buttonVariant: T,
        } = e,
        y = (0, s.bG)([m.Ay], () => m.Ay.getState().isMembersOpen);
    if (a.Fr && y) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: l.Children.only(v) });
    let b = null;
    return (
        null != C
            ? (b = (0, i.jsx)("img", { alt: "", src: C, className: A.Sl }))
            : null != x && (b = (0, i.jsx)(r.a, { importData: x, shouldAnimate: !N, className: A.lY })),
        (0, i.jsxs)("div", {
            className: A.iE,
            children: [
                (0, i.jsxs)("div", {
                    className: A.Qs,
                    children: [
                        b,
                        (0, i.jsxs)("div", {
                            className: A.Qq,
                            children: [
                                (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: A.DD, children: t }),
                                null != n &&
                                    (0, i.jsx)(c.E, { color: "text-muted", variant: "text-xs/normal", children: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: A.UD,
                    children: [
                        null != S &&
                            (0, i.jsx)("div", {
                                className: A.x6,
                                children: (0, i.jsx)(d.Q, { textVariant: "text-sm/semibold", text: S, onClick: I }),
                            }),
                        null != _ &&
                            (0, i.jsx)("div", {
                                className: A.x6,
                                children: (0, i.jsx)(u.$, {
                                    text: _,
                                    size: "sm",
                                    variant: T ?? "secondary",
                                    onClick: E,
                                    loading: f,
                                    icon: p,
                                }),
                            }),
                    ],
                }),
                null != g && (0, i.jsx)(h.A, { className: A.qW, deadline: g }),
            ],
        })
    );
};
