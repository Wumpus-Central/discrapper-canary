n.d(t, { Z: () => d });
var i = n(54381),
    r = n(473749),
    l = n(873546),
    a = n(442837),
    o = n(481060),
    s = n(346486),
    c = n(433355),
    u = n(46291);
let d = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: d,
            buttonText: p,
            buttonIcon: f,
            buttonSubmitting: h,
            onButtonClick: m,
            imageSrc: g,
            animationSrc: b,
            secondaryButtonText: C,
            onSecondaryButtonClick: y,
            children: v,
            useReducedMotion: O = !1,
            buttonVariant: x,
        } = e,
        E = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (l.tq && E) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: r.Children.only(v) });
    let j = null;
    return (
        null != g
            ? (j = (0, i.jsx)("img", {
                  alt: "",
                  src: g,
                  className: u.image,
              }))
            : null != b &&
              (j = (0, i.jsx)(o.Fmz, {
                  importData: b,
                  shouldAnimate: !O,
                  className: u.animation,
              })),
        (0, i.jsxs)("div", {
            className: u.wrapper,
            children: [
                (0, i.jsxs)("div", {
                    className: u.content,
                    children: [
                        j,
                        (0, i.jsxs)("div", {
                            className: u.text,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: "heading-md/semibold",
                                    className: u.title,
                                    children: t,
                                }),
                                null != n &&
                                    (0, i.jsx)(o.Text, {
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: n,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: u.buttonContainer,
                    children: [
                        null != C &&
                            (0, i.jsx)("div", {
                                className: u.button,
                                children: (0, i.jsx)(o.Avr, {
                                    textVariant: "text-sm/semibold",
                                    text: C,
                                    onClick: y,
                                }),
                            }),
                        null != p &&
                            (0, i.jsx)("div", {
                                className: u.button,
                                children: (0, i.jsx)(o.Button, {
                                    text: p,
                                    size: "sm",
                                    variant: null != x ? x : "secondary",
                                    onClick: m,
                                    loading: h,
                                    icon: f,
                                }),
                            }),
                    ],
                }),
                null != d &&
                    (0, i.jsx)(s.Z, {
                        className: u.countdown,
                        deadline: d,
                    }),
            ],
        })
    );
};
