n.d(t, {
    H: () => g,
    U: () => f
}),
    n(953529);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(921801),
    o = n(3957),
    c = n(279743),
    d = n(834166),
    u = n(867768);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function g(e) {
    let { header: t, description: n, relatedId: r, disabled: a } = e;
    return (0, i.jsxs)('div', {
        className: u.header,
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, i.jsx)('label', {
                    htmlFor: r,
                    className: s()(u.title, { [u.disabled]: a }),
                    children: t
                })
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: s()(u.description, { [u.disabled]: a }),
                children: n
            })
        ]
    });
}
function p(e) {
    let { setting: t, className: n, children: r } = e;
    return (0, i.jsx)(a.F, {
        setting: t,
        children: (0, i.jsx)('div', {
            className: s()(u.container, n),
            children: r
        })
    });
}
function h(e) {
    let { setting: t, className: n, children: r, scrollPosition: l, scrollHighlightDelay: m } = e,
        g = (0, o.a)(l);
    return (0, i.jsx)(a.F, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: s()(u.container, n, { [d.settingsBackgroundFlashElement]: null != l }),
            ref: g,
            children: [
                r,
                null != l
                    ? (0, i.jsx)(c.Z, {
                          animationDelay: m,
                          scrollPosition: l
                      })
                    : null
            ]
        })
    });
}
function f(e) {
    return null != e.scrollPosition ? (0, i.jsx)(h, m({}, e)) : (0, i.jsx)(p, m({}, e));
}
