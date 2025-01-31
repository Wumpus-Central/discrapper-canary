n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(325767);
function a(e) {
    let { width: t = 12, height: n = 12, color: a = 'currentColor', foreground: s, ...o } = e;
    return (0, i.jsx)('svg', {
        ...(0, r.Z)(o),
        width: t,
        height: n,
        viewBox: '0 0 12 12',
        children: (0, i.jsx)('rect', {
            className: s,
            fill: a,
            width: '10',
            height: '1',
            x: '1',
            y: '6'
        })
    });
}
