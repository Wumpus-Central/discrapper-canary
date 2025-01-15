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
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(921801),
    o = n(3957),
    c = n(279743),
    d = n(770082),
    u = n(482444);
function m(e) {
    let { header: t, description: n, relatedId: s, disabled: l } = e;
    return (0, i.jsxs)('div', {
        className: u.header,
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, i.jsx)('label', {
                    htmlFor: s,
                    className: r()(u.title, { [u.disabled]: l }),
                    children: t
                })
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: r()(u.description, { [u.disabled]: l }),
                children: n
            })
        ]
    });
}
function g(e) {
    let { setting: t, className: n, children: s } = e;
    return (0, i.jsx)(l.F, {
        setting: t,
        children: (0, i.jsx)('div', {
            className: r()(u.container, n),
            children: s
        })
    });
}
function h(e) {
    let { setting: t, className: n, children: s, scrollPosition: a, scrollHighlightDelay: m } = e,
        g = (0, o.a)(a);
    return (0, i.jsx)(l.F, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: r()(u.container, n, { [d.settingsBackgroundFlashElement]: null != a }),
            ref: g,
            children: [
                s,
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
