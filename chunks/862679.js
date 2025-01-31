n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(873546),
    r = n(442837),
    s = n(481060),
    o = n(346486),
    c = n(433355),
    d = n(33293);
let u = l.memo(function (e) {
    let { message: t, subtitle: n, countdown: u, buttonText: h, buttonColor: p, buttonSubmitting: m, onButtonClick: f, imageSrc: g, animationSrc: _, secondaryButtonText: C, onSecondaryButtonClick: x, children: v, useReducedMotion: E = !1 } = e,
        I = (0, r.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (a.tq && I) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: l.Children.only(v) });
    let b = null;
    return (
        null != g
            ? (b = (0, i.jsx)('img', {
                  alt: '',
                  src: g,
                  className: d.image
              }))
            : null != _ &&
              (b = (0, i.jsx)(s.Fmz, {
                  importData: _,
                  shouldAnimate: !E,
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
                                (0, i.jsx)(s.X6q, {
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
                        null != C &&
                            (0, i.jsx)(s.zxk, {
                                className: d.button,
                                size: s.zxk.Sizes.SMALL,
                                onClick: x,
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                submitting: m,
                                children: C
                            }),
                        null != h &&
                            (0, i.jsx)(s.zxk, {
                                className: d.button,
                                innerClassName: d.innerButton,
                                size: s.zxk.Sizes.SMALL,
                                onClick: f,
                                submitting: m,
                                color: null != p ? p : s.zxk.Colors.PRIMARY,
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
