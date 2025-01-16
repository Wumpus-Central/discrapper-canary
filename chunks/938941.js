r.d(n, {
    Dw: function () {
        return d;
    },
    RM: function () {
        return _;
    },
    SC: function () {
        return f;
    },
    iA: function () {
        return p;
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
    s = r(150438),
    o = r(993365),
    l = r(481060),
    u = r(207792);
function c(e) {
    return (0, i.jsx)(s.bL, {
        ...e,
        className: u.cell
    });
}
function d(e) {
    let { children: n, ...r } = e;
    return (0, i.jsx)(s.sg, {
        ...r,
        className: u.column,
        children: (0, i.jsx)(o.x, {
            variant: 'eyebrow',
            className: u.columnText,
            children: n
        })
    });
}
function f(e) {
    return (0, i.jsx)(s.X2, {
        ...e,
        className: u.row
    });
}
function _(e) {
    return (0, i.jsx)(s.RM, {
        ...e,
        className: u.body
    });
}
function h(e) {
    return (0, i.jsx)(s.xD, {
        ...e,
        className: u.header
    });
}
function p(e) {
    let { title: n, header: r, footer: o, ...c } = e,
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
            (0, i.jsx)(s.iA, {
                ...c,
                'aria-labelledby': d,
                className: u.table
            }),
            null != o &&
                (0, i.jsx)('div', {
                    className: u.footer,
                    children: o
                })
        ]
    });
}
