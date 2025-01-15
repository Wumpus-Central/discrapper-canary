r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(780384),
    u = r(481060),
    c = r(410030),
    d = r(607070),
    f = r(921944),
    _ = r(388032),
    h = r(920706);
function p(e) {
    let { onComplete: n, onCheckItOutClick: r, config: a } = e,
        f = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        p = (0, c.ZP)();
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            f &&
                (0, i.jsx)('img', {
                    alt: _.intl.string(_.t.X4IxWF),
                    src: a.getImageUrl((0, l.wj)(p), f),
                    className: s()(h.coachmark, h.staticImage)
                }),
            !f &&
                null != a.coachmarkAnimationData &&
                (0, i.jsx)(u.ChainedLottieAnimation, {
                    className: s()(h.coachmark, h.animation),
                    animationData: a.coachmarkAnimationData
                }),
            (0, i.jsxs)('div', {
                className: h.body,
                children: [
                    (0, i.jsx)(u.Heading, {
                        className: h.text,
                        variant: 'heading-sm/semibold',
                        children: a.title()
                    }),
                    (0, i.jsx)(u.Text, {
                        className: h.text,
                        variant: 'text-sm/normal',
                        children: a.description()
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: h.dmButtonContainer,
                children: (0, i.jsx)(u.Button, {
                    className: h.dmButton,
                    color: u.Button.Colors.BRAND_INVERTED,
                    onClick: () => r(),
                    children: a.cta()
                })
            }),
            (0, i.jsx)(u.Clickable, {
                onClick: n,
                className: h.closeButton,
                'aria-label': _.intl.string(_.t.cpT0Cg),
                children: (0, i.jsx)(u.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.closeIcon
                })
            }),
            (0, i.jsx)('div', { className: h.pointer })
        ]
    });
}
function m(e) {
    let { onComplete: n, onCheckItOutClick: r, markAsDismissed: a, config: s } = e;
    return (0, i.jsx)(u.Popout, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, i.jsx)(p, {
                ...e,
                onComplete: () => {
                    n(), a(f.L.USER_DISMISS);
                },
                onCheckItOutClick: () => {
                    r(), n(), a(f.L.TAKE_ACTION);
                },
                config: s
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, i.jsx)('div', { className: h.popoutTarget })
    });
}
