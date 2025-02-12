n.d(t, {
    H: () => h,
    U: () => x
});
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    a = n(921801),
    o = n(3957),
    c = n(279743),
    d = n(816689),
    u = n(797347);
function h(e) {
    let { header: t, description: n, relatedId: s, disabled: a } = e;
    return (0, i.jsxs)('div', {
        className: u.header,
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, i.jsx)('label', {
                    htmlFor: s,
                    className: l()(u.title, { [u.disabled]: a }),
                    children: t
                })
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: l()(u.description, { [u.disabled]: a }),
                children: n
            })
        ]
    });
}
function m(e) {
    let { setting: t, className: n, children: s } = e;
    return (0, i.jsx)(a.F, {
        setting: t,
        children: (0, i.jsx)('div', {
            className: l()(u.container, n),
            children: s
        })
    });
}
function g(e) {
    let { setting: t, className: n, children: s, scrollPosition: r, scrollHighlightDelay: h } = e,
        m = (0, o.a)(r);
    return (0, i.jsx)(a.F, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: l()(u.container, n, { [d.settingsBackgroundFlashElement]: null != r }),
            ref: m,
            children: [
                s,
                null != r
                    ? (0, i.jsx)(c.Z, {
                          animationDelay: h,
                          scrollPosition: r
                      })
                    : null
            ]
        })
    });
}
function x(e) {
    return null != e.scrollPosition ? (0, i.jsx)(g, { ...e }) : (0, i.jsx)(m, { ...e });
}
