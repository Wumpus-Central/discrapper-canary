n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(442837),
    o = n(481060),
    s = n(346486),
    c = n(433355),
    u = n(556218);
let d = function (e) {
    let { message: t, subtitle: n, countdown: d, buttonText: p, buttonColor: h, buttonSubmitting: f, onButtonClick: m, imageSrc: g, animationSrc: b, secondaryButtonText: _, onSecondaryButtonClick: C, children: x, useReducedMotion: y = !1 } = e,
        v = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (l.tq && v) return null;
    if (null == t) return (0, r.jsx)(r.Fragment, { children: i.Children.only(x) });
    let j = null;
    return (
        null != g
            ? (j = (0, r.jsx)('img', {
                  alt: '',
                  src: g,
                  className: u.image
              }))
            : null != b &&
              (j = (0, r.jsx)(o.Fmz, {
                  importData: b,
                  shouldAnimate: !y,
                  className: u.animation
              })),
        (0, r.jsxs)('div', {
            className: u.wrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: u.content,
                    children: [
                        j,
                        (0, r.jsxs)('div', {
                            className: u.text,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: u.title,
                                    children: t
                                }),
                                null != n &&
                                    (0, r.jsx)(o.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: n
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.buttonContainer,
                    children: [
                        null != _ &&
                            (0, r.jsx)(o.zxk, {
                                className: u.button,
                                size: o.zxk.Sizes.SMALL,
                                onClick: C,
                                look: o.zxk.Looks.LINK,
                                color: o.zxk.Colors.PRIMARY,
                                submitting: f,
                                children: _
                            }),
                        null != p &&
                            (0, r.jsx)(o.zxk, {
                                className: u.button,
                                innerClassName: u.innerButton,
                                size: o.zxk.Sizes.SMALL,
                                onClick: m,
                                submitting: f,
                                color: null != h ? h : o.zxk.Colors.PRIMARY,
                                children: p
                            })
                    ]
                }),
                null != d &&
                    (0, r.jsx)(s.Z, {
                        className: u.countdown,
                        deadline: d
                    })
            ]
        })
    );
};
