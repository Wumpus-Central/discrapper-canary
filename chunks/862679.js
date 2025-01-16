var i = n(200651),
    l = n(192379),
    r = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(346486),
    c = n(433355),
    d = n(33293);
t.Z = l.memo(function (e) {
    let { message: t, subtitle: n, countdown: u, buttonText: h, buttonColor: p, buttonSubmitting: m, onButtonClick: f, imageSrc: g, animationSrc: C, secondaryButtonText: x, onSecondaryButtonClick: v, children: _, useReducedMotion: I = !1 } = e,
        E = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (r.tq && E) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: l.Children.only(_) });
    let b = null;
    return (
        null != g
            ? (b = (0, i.jsx)('img', {
                  alt: '',
                  src: g,
                  className: d.image
              }))
            : null != C &&
              (b = (0, i.jsx)(s.LottieAnimation, {
                  importData: C,
                  shouldAnimate: !I,
                  className: d.animation
              })),
        (0, i.jsxs)('div', {
            className: d.wrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: d.content,
                    children: [
                        b,
                        (0, i.jsxs)('div', {
                            className: d.text,
                            children: [
                                (0, i.jsx)(s.Heading, {
                                    variant: 'heading-md/semibold',
                                    className: d.title,
                                    children: t
                                }),
                                null != n &&
                                    (0, i.jsx)(s.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: n
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: d.buttonContainer,
                    children: [
                        null != x &&
                            (0, i.jsx)(s.Button, {
                                className: d.button,
                                size: s.Button.Sizes.SMALL,
                                onClick: v,
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                submitting: m,
                                children: x
                            }),
                        null != h &&
                            (0, i.jsx)(s.Button, {
                                className: d.button,
                                innerClassName: d.innerButton,
                                size: s.Button.Sizes.SMALL,
                                onClick: f,
                                submitting: m,
                                color: null != p ? p : s.Button.Colors.PRIMARY,
                                children: h
                            })
                    ]
                }),
                null != u &&
                    (0, i.jsx)(o.Z, {
                        className: d.countdown,
                        deadline: u
                    })
            ]
        })
    );
});
