n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    s = n(346486),
    c = n(433355),
    u = n(423163);
let d = function (e) {
    let { message: t, subtitle: n, countdown: d, buttonText: p, buttonColor: h, buttonSubmitting: f, onButtonClick: m, imageSrc: g, animationSrc: b, secondaryButtonText: _, onSecondaryButtonClick: C, children: y, useReducedMotion: x = !1 } = e,
        v = (0, o.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (l.tq && v) return null;
    if (null == t) return (0, r.jsx)(r.Fragment, { children: i.Children.only(y) });
    let j = null;
    return (
        null != g
            ? (j = (0, r.jsx)('img', {
                  alt: '',
                  src: g,
                  className: u.image
              }))
            : null != b &&
              (j = (0, r.jsx)(a.Fmz, {
                  importData: b,
                  shouldAnimate: !x,
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
                                (0, r.jsx)(a.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: u.title,
                                    children: t
                                }),
                                null != n &&
                                    (0, r.jsx)(a.Text, {
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
                            (0, r.jsx)(a.zxk, {
                                className: u.button,
                                size: a.zxk.Sizes.SMALL,
                                onClick: C,
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.PRIMARY,
                                submitting: f,
                                children: _
                            }),
                        null != p &&
                            (0, r.jsx)(a.zxk, {
                                className: u.button,
                                innerClassName: u.innerButton,
                                size: a.zxk.Sizes.SMALL,
                                onClick: m,
                                submitting: f,
                                color: null != h ? h : a.zxk.Colors.PRIMARY,
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
