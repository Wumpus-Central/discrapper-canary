n.d(t, {
    H: () => m,
    U: () => _
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(921801),
    o = n(3957),
    c = n(279743),
    d = n(770082),
    u = n(482444);
function m(e) {
    let { header: t, description: n, relatedId: s, disabled: a } = e;
    return (0, i.jsxs)('div', {
        className: u.header,
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, i.jsx)('label', {
                    htmlFor: s,
                    className: r()(u.title, { [u.disabled]: a }),
                    children: t
                })
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: r()(u.description, { [u.disabled]: a }),
                children: n
            })
        ]
    });
}
function h(e) {
    let { setting: t, className: n, children: s } = e;
    return (0, i.jsx)(a.F, {
        setting: t,
        children: (0, i.jsx)('div', {
            className: r()(u.container, n),
            children: s
        })
    });
}
function g(e) {
    let { setting: t, className: n, children: s, scrollPosition: l, scrollHighlightDelay: m } = e,
        h = (0, o.a)(l);
    return (0, i.jsx)(a.F, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: r()(u.container, n, { [d.settingsBackgroundFlashElement]: null != l }),
            ref: h,
            children: [
                s,
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
function _(e) {
    return null != e.scrollPosition ? (0, i.jsx)(g, { ...e }) : (0, i.jsx)(h, { ...e });
}
