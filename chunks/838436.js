n.d(t, {
    H: function () {
        return m;
    },
    U: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(921801),
    o = n(3957),
    c = n(279743),
    d = n(158044),
    u = n(559361);
function m(e) {
    let { header: t, description: n, relatedId: r, disabled: l } = e;
    return (0, i.jsxs)('div', {
        className: u.header,
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, i.jsx)('label', {
                    htmlFor: r,
                    className: s()(u.title, { [u.disabled]: l }),
                    children: t
                })
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: s()(u.description, { [u.disabled]: l }),
                children: n
            })
        ]
    });
}
function g(e) {
    let { setting: t, className: n, children: r } = e;
    return (0, i.jsx)(l.F, {
        setting: t,
        children: (0, i.jsx)('div', {
            className: s()(u.container, n),
            children: r
        })
    });
}
function h(e) {
    let { setting: t, className: n, children: r, scrollPosition: a, scrollHighlightDelay: m } = e,
        g = (0, o.a)(a);
    return (0, i.jsx)(l.F, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: s()(u.container, n, { [d.settingsBackgroundFlashElement]: null != a }),
            ref: g,
            children: [
                r,
                null != a
                    ? (0, i.jsx)(c.Z, {
                          animationDelay: m,
                          scrollPosition: a
                      })
                    : null
            ]
        })
    });
}
function p(e) {
    return null != e.scrollPosition ? (0, i.jsx)(h, { ...e }) : (0, i.jsx)(g, { ...e });
}
