n.d(t, { Z: () => d });
var i = n(54381),
    r = n(473749),
    l = n(873546),
    a = n(442837),
    o = n(481060),
    s = n(346486),
    c = n(433355),
    u = n(944701);
let d = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: d,
            buttonText: p,
            buttonIcon: h,
            buttonSubmitting: f,
            onButtonClick: m,
            imageSrc: g,
            animationSrc: b,
            secondaryButtonText: C,
            onSecondaryButtonClick: y,
            children: _,
            useReducedMotion: v = !1,
            buttonVariant: O,
        } = e,
        x = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (l.tq && x) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: r.Children.only(_) });
    let E = null;
    return (
        null != g
            ? (E = (0, i.jsx)("img", {
                  alt: "",
                  src: g,
                  className: u.image,
              }))
            : null != b &&
              (E = (0, i.jsx)(o.Fmz, {
                  importData: b,
                  shouldAnimate: !v,
                  className: u.animation,
              })),
        (0, i.jsxs)("div", {
            className: u.wrapper,
            children: [
                (0, i.jsxs)("div", {
                    className: u.content,
                    children: [
                        E,
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
                                    variant: null != O ? O : "secondary",
                                    onClick: m,
                                    loading: f,
                                    icon: h,
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
