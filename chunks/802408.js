n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(780384),
    s = n(481060),
    o = n(410030),
    l = n(607070),
    u = n(921944),
    c = n(388032),
    d = n(110262);
function f(e) {
    let { onComplete: t, onCheckItOutClick: n, config: u } = e,
        f = (0, r.e7)([l.Z], () => l.Z.useReducedMotion),
        _ = (0, o.ZP)();
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)('img', {
                alt: c.intl.string(c.t.X4IxWF),
                src: u.getImageUrl((0, a.wj)(_), f),
                className: d.coachmark
            }),
            (0, i.jsxs)('div', {
                className: d.body,
                children: [
                    (0, i.jsx)(s.X6q, {
                        className: d.text,
                        variant: 'heading-sm/semibold',
                        children: u.title()
                    }),
                    (0, i.jsx)(s.Text, {
                        className: d.text,
                        variant: 'text-sm/normal',
                        children: u.description()
                    })
                ]
            }),
            (0, i.jsx)(s.zxk, {
                className: d.button,
                color: s.zxk.Colors.BRAND_INVERTED,
                onClick: () => n(),
                children: u.cta()
            }),
            (0, i.jsx)(s.P3F, {
                onClick: t,
                className: d.closeButton,
                'aria-label': c.intl.string(c.t.cpT0Cg),
                children: (0, i.jsx)(s.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: d.closeIcon
                })
            }),
            (0, i.jsx)('div', { className: d.pointer })
        ]
    });
}
function _(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: r, config: a, children: o } = e;
    return (0, i.jsx)(s.yRy, {
        spacing: 16,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, i.jsx)(f, {
                ...e,
                onComplete: () => {
                    t(), r(u.L.USER_DISMISS);
                },
                onCheckItOutClick: () => {
                    n(), t(), r(u.L.TAKE_ACTION);
                },
                config: a
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => o
    });
}
