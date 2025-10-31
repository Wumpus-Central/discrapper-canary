n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
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
            buttonIcon: f,
            buttonSubmitting: h,
            onButtonClick: m,
            imageSrc: g,
            animationSrc: b,
            secondaryButtonText: _,
            onSecondaryButtonClick: y,
            children: C,
            useReducedMotion: v = !1,
            buttonVariant: O,
        } = e,
        x = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (l.tq && x) return null;
    if (null == t) return (0, r.jsx)(r.Fragment, { children: i.Children.only(C) });
    let E = null;
    return (
        null != g
            ? (E = (0, r.jsx)("img", {
                  alt: "",
                  src: g,
                  className: u.image,
              }))
            : null != b &&
              (E = (0, r.jsx)(o.Fmz, {
                  importData: b,
                  shouldAnimate: !v,
                  className: u.animation,
              })),
        (0, r.jsxs)("div", {
            className: u.wrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: u.content,
                    children: [
                        E,
                        (0, r.jsxs)("div", {
                            className: u.text,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    variant: "heading-md/semibold",
                                    className: u.title,
                                    children: t,
                                }),
                                null != n &&
                                    (0, r.jsx)(o.Text, {
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: n,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: u.buttonContainer,
                    children: [
                        null != _ &&
                            (0, r.jsx)("div", {
                                className: u.button,
                                children: (0, r.jsx)(o.Avr, {
                                    textVariant: "text-sm/semibold",
                                    text: _,
                                    onClick: y,
                                }),
                            }),
                        null != p &&
                            (0, r.jsx)("div", {
                                className: u.button,
                                children: (0, r.jsx)(o.Button, {
                                    text: p,
                                    size: "sm",
                                    variant: null != O ? O : "secondary",
                                    onClick: m,
                                    loading: h,
                                    icon: f,
                                }),
                            }),
                    ],
                }),
                null != d &&
                    (0, r.jsx)(s.Z, {
                        className: u.countdown,
                        deadline: d,
                    }),
            ],
        })
    );
};
