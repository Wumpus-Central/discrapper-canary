n.d(t, { K: () => c }), n(724458), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(530892),
    l = n.n(o),
    u = n(639503);
let c = r.forwardRef(function (e, t) {
        let { as: n = 'div', gap: r = 8, direction: a = 'vertical', align: o = 'stretch', justify: l = 'start', padding: c = 0, style: _, className: p, children: h, ...m } = e;
        return (0, i.jsx)(n, {
            ref: t,
            'data-align': o,
            'data-justify': l,
            'data-direction': a,
            className: s()(u.stack, p),
            style: {
                ..._,
                gap: d(r),
                ...f(c)
            },
            ...m,
            children: h
        });
    }),
    d = (e) => 'var(--space-'.concat(e, ')'),
    f = (e) =>
        'number' == typeof e || 'string' == typeof e
            ? { padding: d(e) }
            : Object.entries(e).reduce((e, t) => {
                  let [n, i] = t;
                  return (e['padding'.concat(l()(n))] = d(i)), e;
              }, {});
