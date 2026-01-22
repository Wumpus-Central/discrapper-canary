n.d(t, {
    A: () => d,
});
var r = n(627968),
    l = n(64700),
    i = n(607399),
    a = n(311907),
    s = n(397927),
    o = n(576470),
    c = n(761640),
    u = n(945675);
let d = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: d,
            buttonText: f,
            buttonIcon: p,
            buttonSubmitting: h,
            onButtonClick: b,
            imageSrc: g,
            animationSrc: m,
            secondaryButtonText: A,
            onSecondaryButtonClick: y,
            children: O,
            useReducedMotion: j = !1,
            buttonVariant: v,
        } = e,
        x = (0, a.bG)([c.Ay], () => c.Ay.getState().isMembersOpen);
    if (i.Fr && x) return null;
    if (null == t)
        return (0, r.jsx)(r.Fragment, {
            children: l.Children.only(O),
        });
    let E = null;
    return (
        null != g
            ? (E = (0, r.jsx)("img", {
                  alt: "",
                  src: g,
                  className: u.Sl,
              }))
            : null != m &&
              (E = (0, r.jsx)(s.akl, {
                  importData: m,
                  shouldAnimate: !j,
                  className: u.lY,
              })),
        (0, r.jsxs)("div", {
            className: u.iE,
            children: [
                (0, r.jsxs)("div", {
                    className: u.Qs,
                    children: [
                        E,
                        (0, r.jsxs)("div", {
                            className: u.Qq,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: u.DD,
                                    children: t,
                                }),
                                null != n &&
                                    (0, r.jsx)(s.Text, {
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: n,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: u.UD,
                    children: [
                        null != A &&
                            (0, r.jsx)("div", {
                                className: u.x6,
                                children: (0, r.jsx)(s.QWc, {
                                    textVariant: "text-sm/semibold",
                                    text: A,
                                    onClick: y,
                                }),
                            }),
                        null != f &&
                            (0, r.jsx)("div", {
                                className: u.x6,
                                children: (0, r.jsx)(s.Button, {
                                    text: f,
                                    size: "sm",
                                    variant: null != v ? v : "secondary",
                                    onClick: b,
                                    loading: h,
                                    icon: p,
                                }),
                            }),
                    ],
                }),
                null != d &&
                    (0, r.jsx)(o.A, {
                        className: u.qW,
                        deadline: d,
                    }),
            ],
        })
    );
};
