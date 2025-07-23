(n.d(t, { Z: () => b }), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(780384),
    s = n(755721),
    l = n(481060),
    c = n(410030),
    u = n(607070),
    d = n(921944),
    _ = n(388032),
    f = n(671821);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { onComplete: t, onCheckItOutClick: n, config: i } = e,
        d = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        p = (0, c.ZP)();
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            (0, r.jsx)('img', {
                alt: _.intl.string(_.t.X4IxWF),
                src: i.getImageUrl((0, o.wj)(p), d),
                className: f.coachmark
            }),
            (0, r.jsxs)('div', {
                className: f.body,
                children: [
                    (0, r.jsx)(l.X6q, {
                        className: f.text,
                        variant: 'heading-md/extrabold',
                        children: i.title()
                    }),
                    (0, r.jsx)(l.Text, {
                        className: f.text,
                        variant: 'text-sm/normal',
                        children: i.description()
                    })
                ]
            }),
            (0, r.jsx)(s.zx, {
                className: f.button,
                color: s.zx.Colors.BRAND_INVERTED,
                onClick: () => n(),
                children: i.cta()
            }),
            (0, r.jsx)(l.P3F, {
                onClick: t,
                className: f.closeButton,
                'aria-label': _.intl.string(_.t.cpT0Cg),
                children: (0, r.jsx)(l.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.closeIcon
                })
            }),
            (0, r.jsx)('div', { className: f.pointer })
        ]
    });
}
function b(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: a, config: o, children: s } = e,
        c = i.useRef(null);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: c,
        spacing: 16,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(
                E,
                g(h({}, e), {
                    onComplete: () => {
                        (t(), a(d.L.USER_DISMISS));
                    },
                    onCheckItOutClick: () => {
                        (n(), t(), a(d.L.TAKE_ACTION));
                    },
                    config: o
                })
            ),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () =>
            (0, r.jsx)('div', {
                ref: c,
                children: s
            })
    });
}
