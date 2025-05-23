n.d(t, { Z: () => E }), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(607070),
    u = n(921944),
    d = n(388032),
    f = n(462656);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { onComplete: t, onCheckItOutClick: n, config: i } = e,
        u = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        _ = (0, l.ZP)();
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            (0, r.jsx)('img', {
                alt: d.intl.string(d.t.X4IxWF),
                src: i.getImageUrl((0, a.wj)(_), u),
                className: f.coachmark
            }),
            (0, r.jsxs)('div', {
                className: f.body,
                children: [
                    (0, r.jsx)(s.X6q, {
                        className: f.text,
                        variant: 'heading-sm/semibold',
                        children: i.title()
                    }),
                    (0, r.jsx)(s.Text, {
                        className: f.text,
                        variant: 'text-sm/normal',
                        children: i.description()
                    })
                ]
            }),
            (0, r.jsx)(s.zxk, {
                className: f.button,
                color: s.zxk.Colors.BRAND_INVERTED,
                onClick: () => n(),
                children: i.cta()
            }),
            (0, r.jsx)(s.P3F, {
                onClick: t,
                className: f.closeButton,
                'aria-label': d.intl.string(d.t.cpT0Cg),
                children: (0, r.jsx)(s.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.closeIcon
                })
            }),
            (0, r.jsx)('div', { className: f.pointer })
        ]
    });
}
function E(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: o, config: a, children: l } = e,
        c = i.useRef(null);
    return (0, r.jsx)(s.yRy, {
        targetElementRef: c,
        spacing: 16,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(
                g,
                m(p({}, e), {
                    onComplete: () => {
                        t(), o(u.L.USER_DISMISS);
                    },
                    onCheckItOutClick: () => {
                        n(), t(), o(u.L.TAKE_ACTION);
                    },
                    config: a
                })
            ),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () =>
            (0, r.jsx)('div', {
                ref: c,
                children: l
            })
    });
}
