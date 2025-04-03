n.d(t, { Z: () => i });
var r = n(200651);
n(192379);
let i = (e) => {
    let { id: t, startColor: n, stopColor: i, color: l, stop: a } = e;
    return (0, r.jsxs)('linearGradient', {
        id: t,
        children: [
            (0, r.jsx)('stop', {
                offset: '0',
                stopColor: n
            }),
            (0, r.jsx)('stop', {
                offset: a,
                stopColor: i
            }),
            (0, r.jsx)('stop', {
                offset: a,
                stopColor: l
            }),
            (0, r.jsx)('stop', {
                offset: '1',
                stopColor: l
            })
        ]
    });
};
