n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    c = n(346486),
    u = n(433355),
    d = n(423163);
let p = function (e) {
    let { message: t, subtitle: n, countdown: p, buttonText: h, buttonColor: f, buttonSubmitting: m, onButtonClick: g, imageSrc: b, animationSrc: _, secondaryButtonText: y, onSecondaryButtonClick: C, children: x, useReducedMotion: v = !1 } = e,
        j = (0, a.e7)([u.ZP], () => u.ZP.getState().isMembersOpen);
    if (l.tq && j) return null;
    if (null == t) return (0, r.jsx)(r.Fragment, { children: i.Children.only(x) });
    let O = null;
    return (
        null != b
            ? (O = (0, r.jsx)('img', {
                  alt: '',
                  src: b,
                  className: d.image
              }))
            : null != _ &&
              (O = (0, r.jsx)(s.Fmz, {
                  importData: _,
                  shouldAnimate: !v,
                  className: d.animation
              })),
        (0, r.jsxs)('div', {
            className: d.wrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: d.content,
                    children: [
                        O,
                        (0, r.jsxs)('div', {
                            className: d.text,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: d.title,
                                    children: t
                                }),
                                null != n &&
                                    (0, r.jsx)(s.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: n
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: d.buttonContainer,
                    children: [
                        null != y &&
                            (0, r.jsx)(o.zx, {
                                className: d.button,
                                size: o.zx.Sizes.SMALL,
                                onClick: C,
                                look: o.zx.Looks.LINK,
                                color: o.zx.Colors.PRIMARY,
                                submitting: m,
                                children: y
                            }),
                        null != h &&
                            (0, r.jsx)(o.zx, {
                                className: d.button,
                                innerClassName: d.innerButton,
                                size: o.zx.Sizes.SMALL,
                                onClick: g,
                                submitting: m,
                                color: null != f ? f : o.zx.Colors.PRIMARY,
                                children: h
                            })
                    ]
                }),
                null != p &&
                    (0, r.jsx)(c.Z, {
                        className: d.countdown,
                        deadline: p
                    })
            ]
        })
    );
};
