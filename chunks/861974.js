n.d(t, {
    Q: () => c,
    W: () => f
});
var r = n(200651);
n(192379);
var i = n(803997),
    o = n.n(i),
    a = n(657707),
    s = n(777207),
    l = n(172204),
    c = (function (e) {
        return (e.WARNING = 'warn'), (e.INFO = 'info'), (e.ERROR = 'danger'), (e.POSITIVE = 'positive'), (e.PREVIEW = 'preview'), e;
    })({});
function u(e) {
    switch (e) {
        case 'warn':
            return a.P4T;
        case 'info':
            return a.d3s;
        case 'danger':
            return a.k$p;
        case 'positive':
            return a.dz2;
        case 'preview':
            return a.Che;
    }
}
function d(e) {
    switch (e) {
        case 'warn':
            return l.warning;
        case 'info':
            return l.info;
        case 'danger':
            return l.error;
        case 'positive':
        case 'preview':
            return l.positive;
    }
}
function f(e) {
    let { children: t, messageType: n, className: i, textColor: a = 'text-normal', textVariant: c = 'text-sm/medium' } = e,
        f = u(n),
        _ = d(n);
    return (0, r.jsxs)('div', {
        className: o()(l.container, _, i),
        children: [
            (0, r.jsx)('div', {
                className: l.iconDiv,
                children:
                    f &&
                    (0, r.jsx)(f, {
                        className: l.icon,
                        color: 'currentColor'
                    })
            }),
            (0, r.jsx)(s.x, {
                className: l.text,
                color: a,
                variant: c,
                children: t
            })
        ]
    });
}
