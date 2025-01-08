t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(200651);
t(192379);
var l = t(331595);
function a(e) {
    let { width: n = 17, height: t = 16, color: a = 'currentColor', foreground: s, ...r } = e;
    return (0, i.jsxs)('svg', {
        ...(0, l.Z)(r),
        width: n,
        height: t,
        viewBox: '0 0 17 16',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, i.jsx)('rect', {
                className: s,
                y: '5',
                width: '16',
                height: '2',
                rx: '1',
                fill: a
            }),
            (0, i.jsx)('rect', {
                className: s,
                y: '9',
                width: '8',
                height: '2',
                rx: '1',
                fill: a
            })
        ]
    });
}
