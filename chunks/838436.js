n.d(t, {
    H: () => g,
    U: () => f
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(921801),
    o = n(3957),
    c = n(279743),
    d = n(834166),
    u = n(867768);
function m(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function g(e) {
    let { header: t, description: n, relatedId: i, disabled: l } = e;
    return (0, r.jsxs)('div', {
        className: u.header,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, r.jsx)('label', {
                    htmlFor: i,
                    className: s()(u.title, { [u.disabled]: l }),
                    children: t
                })
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: s()(u.description, { [u.disabled]: l }),
                children: n
            })
        ]
    });
}
function p(e) {
    let { setting: t, className: n, children: i } = e;
    return (0, r.jsx)(l.F, {
        setting: t,
        children: (0, r.jsx)('div', {
            className: s()(u.container, n),
            children: i
        })
    });
}
function h(e) {
    let { setting: t, className: n, children: i, scrollPosition: a, scrollHighlightDelay: m } = e,
        g = (0, o.a)(a);
    return (0, r.jsx)(l.F, {
        setting: t,
        children: (0, r.jsxs)('div', {
            className: s()(u.container, n, { [d.settingsBackgroundFlashElement]: null != a }),
            ref: g,
            children: [
                i,
                null != a
                    ? (0, r.jsx)(c.Z, {
                          animationDelay: m,
                          scrollPosition: a
                      })
                    : null
            ]
        })
    });
}
function f(e) {
    return null != e.scrollPosition ? (0, r.jsx)(h, m({}, e)) : (0, r.jsx)(p, m({}, e));
}
