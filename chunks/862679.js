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
            buttonIcon: h,
            buttonSubmitting: f,
            onButtonClick: m,
            imageSrc: g,
            animationSrc: b,
            secondaryButtonText: y,
            onSecondaryButtonClick: C,
            children: _,
            useReducedMotion: v = !1,
            buttonVariant: x,
        } = e,
        O = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (l.tq && O) return null;
    if (null == t) return (0, r.jsx)(r.Fragment, { children: i.Children.only(_) });
    let j = null;
    return (
        null != g
            ? (j = (0, r.jsx)("img", {
                  alt: "",
                  src: g,
                  className: u.image,
              }))
            : null != b &&
              (j = (0, r.jsx)(o.Fmz, {
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
                        j,
                        (0, r.jsxs)("div", {
                            className: u.text,
                            children: [
                                (0, r.jsx)(o.X6q, {
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
                        null != y &&
                            (0, r.jsx)("div", {
                                className: u.button,
                                children: (0, r.jsx)(o.Avr, {
                                    textVariant: "text-sm/semibold",
                                    text: y,
                                    onClick: C,
                                }),
                            }),
                        null != p &&
                            (0, r.jsx)("div", {
                                className: u.button,
                                children: (0, r.jsx)(o.zxk, {
                                    text: p,
                                    size: "sm",
                                    variant: null != x ? x : "secondary",
                                    onClick: m,
                                    loading: f,
                                    icon: h,
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
