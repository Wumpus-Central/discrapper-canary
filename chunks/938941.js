r.d(n, {
    Dw: function () {
        return d;
    },
    RM: function () {
        return p;
    },
    SC: function () {
        return f;
    },
    iA: function () {
        return _;
    },
    pj: function () {
        return c;
    },
    xD: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(150438),
    s = r(993365),
    l = r(481060),
    u = r(207792);
function c(e) {
    return (0, i.jsx)(o.bL, {
        ...e,
        className: u.cell
    });
}
function d(e) {
    let { children: n, ...r } = e;
    return (0, i.jsx)(o.sg, {
        ...r,
        className: u.column,
        children: (0, i.jsx)(s.x, {
            variant: 'eyebrow',
            className: u.columnText,
            children: n
        })
    });
}
function f(e) {
    return (0, i.jsx)(o.X2, {
        ...e,
        className: u.row
    });
}
function p(e) {
    return (0, i.jsx)(o.RM, {
        ...e,
        className: u.body
    });
}
function h(e) {
    return (0, i.jsx)(o.xD, {
        ...e,
        className: u.header
    });
}
function _(e) {
    let { title: n, header: r, footer: s, ...c } = e,
        d = a.useId();
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsxs)('div', {
                className: u.toolbar,
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: u.__invalid_title,
                        variant: 'heading-md/semibold',
                        id: d,
                        children: n
                    }),
                    (0, i.jsx)('div', { children: r })
                ]
            }),
            (0, i.jsx)(o.iA, {
                ...c,
                'aria-labelledby': d,
                className: u.table
            }),
            null != s &&
                (0, i.jsx)('div', {
                    className: u.footer,
                    children: s
                })
        ]
    });
}
