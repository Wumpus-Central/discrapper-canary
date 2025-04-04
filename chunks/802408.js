n.d(t, { Z: () => g }), n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(780384),
    a = n(481060),
    s = n(410030),
    l = n(607070),
    c = n(921944),
    u = n(388032),
    d = n(671821);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { onComplete: t, onCheckItOutClick: n, config: c } = e,
        f = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        _ = (0, s.ZP)();
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsx)('img', {
                alt: u.NW.string(u.t.X4IxWF),
                src: c.getImageUrl((0, o.wj)(_), f),
                className: d.coachmark
            }),
            (0, r.jsxs)('div', {
                className: d.body,
                children: [
                    (0, r.jsx)(a.X6q, {
                        className: d.text,
                        variant: 'heading-sm/semibold',
                        children: c.title()
                    }),
                    (0, r.jsx)(a.Text, {
                        className: d.text,
                        variant: 'text-sm/normal',
                        children: c.description()
                    })
                ]
            }),
            (0, r.jsx)(a.zxk, {
                className: d.button,
                color: a.zxk.Colors.BRAND_INVERTED,
                onClick: () => n(),
                children: c.cta()
            }),
            (0, r.jsx)(a.P3F, {
                onClick: t,
                className: d.closeButton,
                'aria-label': u.NW.string(u.t.cpT0Cg),
                children: (0, r.jsx)(a.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: d.closeIcon
                })
            }),
            (0, r.jsx)('div', { className: d.pointer })
        ]
    });
}
function g(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: i, config: o, children: s } = e;
    return (0, r.jsx)(a.yRy, {
        spacing: 16,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(
                m,
                h(_({}, e), {
                    onComplete: () => {
                        t(), i(c.L.USER_DISMISS);
                    },
                    onCheckItOutClick: () => {
                        n(), t(), i(c.L.TAKE_ACTION);
                    },
                    config: o
                })
            ),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => s
    });
}
