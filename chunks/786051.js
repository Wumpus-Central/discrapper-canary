var l = n(477900),
    i = n(582128),
    s = n(607399),
    a = n(855986),
    r = n(604121),
    o = n(534514),
    c = n(834730),
    d = n(123292),
    u = n(821609),
    h = n(576470),
    m = n(799704),
    g = n(473745);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    message: t,
                    subtitle: n,
                    countdown: p,
                    buttonText: A,
                    buttonIcon: f,
                    buttonSubmitting: C,
                    onButtonClick: E,
                    imageSrc: x,
                    animationSrc: I,
                    secondaryButtonText: S,
                    onSecondaryButtonClick: y,
                    children: b,
                    useReducedMotion: _ = !1,
                    buttonVariant: j,
                } = e,
                v = (0, a.bG)([m.Ay], () => m.Ay.getState().isMembersOpen);
            if (s.Fr && v) return null;
            if (null == t) return (0, l.jsx)(l.Fragment, { children: i.Children.only(b) });
            let N = null;
            return (
                null != x
                    ? (N = (0, l.jsx)("img", { alt: "", src: x, className: g.Sl }))
                    : null != I && (N = (0, l.jsx)(r.a, { importData: I, shouldAnimate: !_, className: g.lY })),
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
                                        (0, l.jsx)(o.D, {
                                            variant: "heading-sm/semibold",
                                            className: g.DD,
                                            children: t,
                                        }),
                                        null != n &&
                                            (0, l.jsx)(c.E, {
                                                color: "text-muted",
                                                variant: "body-xs/normal",
                                                children: n,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: g.UD,
                            children: [
                                null != S &&
                                    (0, l.jsx)("div", {
                                        className: g.x6,
                                        children: (0, l.jsx)(d.Q, {
                                            textVariant: "body-sm/semibold",
                                            text: S,
                                            onClick: y,
                                        }),
                                    }),
                                null != A &&
                                    (0, l.jsx)("div", {
                                        className: g.x6,
                                        children: (0, l.jsx)(u.$, {
                                            text: A,
                                            size: "sm",
                                            variant: j ?? "secondary",
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
        },
    },
);
