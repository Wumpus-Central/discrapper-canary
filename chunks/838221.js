t.d(n, { Z: () => s });
var i = t(200651);
t(192379);
var l = t(325767);
function s(e) {
    let { width: n = 17, height: t = 16, color: s = 'currentColor', foreground: a, ...r } = e;
    return (0, i.jsxs)('svg', {
        ...(0, l.Z)(r),
        width: n,
        height: t,
        viewBox: '0 0 17 16',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, i.jsx)('rect', {
                className: a,
                y: '5',
                width: '16',
                height: '2',
                rx: '1',
                fill: s
            }),
            (0, i.jsx)('rect', {
                className: a,
                y: '9',
                width: '8',
                height: '2',
                rx: '1',
                fill: s
            })
        ]
    });
}
