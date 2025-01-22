r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(780384),
    s = r(481060),
    l = r(410030),
    u = r(607070),
    c = r(921944),
    d = r(388032),
    f = r(633656);
function p(e) {
    let { onComplete: n, onCheckItOutClick: r, config: c } = e,
        p = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        h = (0, l.ZP)();
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)('img', {
                alt: d.intl.string(d.t.X4IxWF),
                src: c.getImageUrl((0, o.wj)(h), p),
                className: f.coachmark
            }),
            (0, i.jsxs)('div', {
                className: f.body,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: f.text,
                        variant: 'heading-sm/semibold',
                        children: c.title()
                    }),
                    (0, i.jsx)(s.Text, {
                        className: f.text,
                        variant: 'text-sm/normal',
                        children: c.description()
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: f.dmButtonContainer,
                children: (0, i.jsx)(s.Button, {
                    className: f.dmButton,
                    color: s.Button.Colors.BRAND_INVERTED,
                    onClick: () => r(),
                    children: c.cta()
                })
            }),
            (0, i.jsx)(s.Clickable, {
                onClick: n,
                className: f.closeButton,
                'aria-label': d.intl.string(d.t.cpT0Cg),
                children: (0, i.jsx)(s.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.closeIcon
                })
            }),
            (0, i.jsx)('div', { className: f.pointer })
        ]
    });
}
function h(e) {
    let { onComplete: n, onCheckItOutClick: r, markAsDismissed: a, config: o } = e;
    return (0, i.jsx)(s.Popout, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, i.jsx)(p, {
                ...e,
                onComplete: () => {
                    n(), a(c.L.USER_DISMISS);
                },
                onCheckItOutClick: () => {
                    r(), n(), a(c.L.TAKE_ACTION);
                },
                config: o
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, i.jsx)('div', { className: f.popoutTarget })
    });
}
