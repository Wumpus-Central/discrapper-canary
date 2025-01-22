r.d(n, {
    K: function () {
        return p;
    }
});
var i = r(724458);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(803997),
    u = r.n(l),
    c = r(530892),
    d = r.n(c),
    f = r(943361);
let p = s.forwardRef(function (e, n) {
        let { as: r = 'div', gap: i = 8, direction: a = 'vertical', align: s = 'stretch', justify: l = 'start', padding: c = 0, style: d, className: p, children: m, ...g } = e;
        return (0, o.jsx)(r, {
            ref: n,
            'data-align': s,
            'data-justify': l,
            'data-direction': a,
            className: u()(f.stack, p),
            style: {
                ...d,
                gap: h(i),
                ..._(c)
            },
            ...g,
            children: m
        });
    }),
    h = (e) => 'var(--space-'.concat(e, ')'),
    _ = (e) =>
        'number' == typeof e || 'string' == typeof e
            ? { padding: h(e) }
            : Object.entries(e).reduce((e, n) => {
                  let [r, i] = n;
                  return (e['padding'.concat(d()(r))] = h(i)), e;
              }, {});
