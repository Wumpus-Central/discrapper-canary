n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(607399),
    a = n(311907),
    r = n(397927),
    o = n(576470),
    c = n(761640),
    d = n(10794);
let u = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: u,
            buttonText: h,
            buttonIcon: m,
            buttonSubmitting: A,
            onButtonClick: g,
            imageSrc: p,
            animationSrc: f,
            secondaryButtonText: _,
            onSecondaryButtonClick: E,
            children: x,
            useReducedMotion: C = !1,
            buttonVariant: S,
        } = e,
        I = (0, a.bG)([c.Ay], () => c.Ay.getState().isMembersOpen);
    if (s.Fr && I) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: l.Children.only(x) });
    let T = null;
    return (
        null != p
            ? (T = (0, i.jsx)("img", { alt: "", src: p, className: d.Sl }))
            : null != f && (T = (0, i.jsx)(r.akl, { importData: f, shouldAnimate: !C, className: d.lY })),
        (0, i.jsxs)("div", {
            className: d.iE,
            children: [
                (0, i.jsxs)("div", {
                    className: d.Qs,
                    children: [
                        T,
                        (0, i.jsxs)("div", {
                            className: d.Qq,
                            children: [
                                (0, i.jsx)(r.Heading, { variant: "heading-md/semibold", className: d.DD, children: t }),
                                null != n &&
                                    (0, i.jsx)(r.Text, { color: "text-muted", variant: "text-xs/normal", children: n }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: d.UD,
                    children: [
                        null != _ &&
                            (0, i.jsx)("div", {
                                className: d.x6,
                                children: (0, i.jsx)(r.QWc, { textVariant: "text-sm/semibold", text: _, onClick: E }),
                            }),
                        null != h &&
                            (0, i.jsx)("div", {
                                className: d.x6,
                                children: (0, i.jsx)(r.Button, {
                                    text: h,
                                    size: "sm",
                                    variant: S ?? "secondary",
                                    onClick: g,
                                    loading: A,
                                    icon: m,
                                }),
                            }),
                    ],
                }),
                null != u && (0, i.jsx)(o.A, { className: d.qW, deadline: u }),
            ],
        })
    );
};
