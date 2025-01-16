r.d(n, {
    K: function () {
        return _;
    }
});
var i = r(724458);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(803997),
    u = r.n(l),
    c = r(530892),
    d = r.n(c),
    f = r(943361);
let _ = o.forwardRef(function (e, n) {
        let { as: r = 'div', gap: i = 8, direction: a = 'vertical', align: o = 'stretch', justify: l = 'start', padding: c = 0, style: d, className: _, children: m, ...g } = e;
        return (0, s.jsx)(r, {
            ref: n,
            'data-align': o,
            'data-justify': l,
            'data-direction': a,
            className: u()(f.stack, _),
            style: {
                ...d,
                gap: h(i),
                ...p(c)
            },
            ...g,
            children: m
        });
    }),
    h = (e) => 'var(--space-'.concat(e, ')'),
    p = (e) =>
        'number' == typeof e || 'string' == typeof e
            ? { padding: h(e) }
            : Object.entries(e).reduce((e, n) => {
                  let [r, i] = n;
                  return (e['padding'.concat(d()(r))] = h(i)), e;
              }, {});
