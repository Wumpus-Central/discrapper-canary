n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    s = n(346486),
    c = n(433355),
    u = n(973772);
let d = i.forwardRef(function (e, t) {
    let { message: n, subtitle: d, countdown: p, buttonText: h, buttonColor: f, buttonSubmitting: m, onButtonClick: g, imageSrc: b, animationSrc: _, secondaryButtonText: C, onSecondaryButtonClick: v, children: y, useReducedMotion: x = !1 } = e,
        j = (0, o.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (l.tq && j) return null;
    if (null == n) return (0, r.jsx)(r.Fragment, { children: i.Children.only(y) });
    let O = null;
    return (
        null != b
            ? (O = (0, r.jsx)('img', {
                  alt: '',
                  src: b,
                  className: u.image
              }))
            : null != _ &&
              (O = (0, r.jsx)(a.Fmz, {
                  importData: _,
                  shouldAnimate: !x,
                  className: u.animation
              })),
        (0, r.jsxs)('div', {
            ref: t,
            className: u.wrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: u.content,
                    children: [
                        O,
                        (0, r.jsxs)('div', {
                            className: u.text,
                            children: [
                                (0, r.jsx)(a.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: u.title,
                                    children: n
                                }),
                                null != d &&
                                    (0, r.jsx)(a.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: d
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.buttonContainer,
                    children: [
                        null != C &&
                            (0, r.jsx)(a.zxk, {
                                className: u.button,
                                size: a.zxk.Sizes.SMALL,
                                onClick: v,
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.PRIMARY,
                                submitting: m,
                                children: C
                            }),
                        null != h &&
                            (0, r.jsx)(a.zxk, {
                                className: u.button,
                                innerClassName: u.innerButton,
                                size: a.zxk.Sizes.SMALL,
                                onClick: g,
                                submitting: m,
                                color: null != f ? f : a.zxk.Colors.PRIMARY,
                                children: h
                            })
                    ]
                }),
                null != p &&
                    (0, r.jsx)(s.Z, {
                        className: u.countdown,
                        deadline: p
                    })
            ]
        })
    );
});
