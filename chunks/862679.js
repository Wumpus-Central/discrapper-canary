n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    o = n(873546),
    a = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(346486),
    u = n(433355),
    d = n(538767);
let f = function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: f,
            buttonText: _,
            buttonColor: p,
            buttonSubmitting: h,
            onButtonClick: m,
            imageSrc: g,
            animationSrc: E,
            secondaryButtonText: b,
            onSecondaryButtonClick: y,
            children: O,
            useReducedMotion: v = !1,
        } = e,
        I = (0, a.e7)([u.ZP], () => u.ZP.getState().isMembersOpen);
    if (o.tq && I) return null;
    if (null == t) return (0, r.jsx)(r.Fragment, { children: i.Children.only(O) });
    let T = null;
    return (
        null != g
            ? (T = (0, r.jsx)("img", {
                  alt: "",
                  src: g,
                  className: d.image,
              }))
            : null != E &&
              (T = (0, r.jsx)(l.Fmz, {
                  importData: E,
                  shouldAnimate: !v,
                  className: d.animation,
              })),
        (0, r.jsxs)("div", {
            className: d.wrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: d.content,
                    children: [
                        T,
                        (0, r.jsxs)("div", {
                            className: d.text,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: "heading-md/semibold",
                                    className: d.title,
                                    children: t,
                                }),
                                null != n &&
                                    (0, r.jsx)(l.Text, {
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: n,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: d.buttonContainer,
                    children: [
                        null != b &&
                            (0, r.jsx)(s.zx, {
                                className: d.button,
                                size: s.zx.Sizes.SMALL,
                                onClick: y,
                                look: s.zx.Looks.LINK,
                                color: s.zx.Colors.PRIMARY,
                                submitting: h,
                                children: b,
                            }),
                        null != _ &&
                            (0, r.jsx)(s.zx, {
                                className: d.button,
                                innerClassName: d.innerButton,
                                size: s.zx.Sizes.SMALL,
                                onClick: m,
                                submitting: h,
                                color: null != p ? p : s.zx.Colors.PRIMARY,
                                children: _,
                            }),
                    ],
                }),
                null != f &&
                    (0, r.jsx)(c.Z, {
                        className: d.countdown,
                        deadline: f,
                    }),
            ],
        })
    );
};
