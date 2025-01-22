r.d(n, {
    z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(692547),
    o = r(331595),
    s = r(267843);
let l = (e) => {
    var n, r;
    let { size: l = 'md', width: u, height: c, color: d = a.Z.colors.INTERACTIVE_NORMAL, colorClass: f = '', ...p } = e,
        h = (0, s.m)(l),
        _ = null !== (n = null == h ? void 0 : h.width) && void 0 !== n ? n : u,
        m = null !== (r = null == h ? void 0 : h.height) && void 0 !== r ? r : c;
    return (0, i.jsxs)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M6 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-6.64 6.64A4.66 4.66 0 0 0 4 15.35V17a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.66c0-1.76.7-3.46 1.95-4.7L10.59 4H7a1 1 0 0 1-1-1Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M18 21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l6.64-6.64A4.66 4.66 0 0 0 20 8.65V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2 5 5 0 0 1 5 5v1.66c0 1.76-.7 3.46-1.95 4.7L13.41 20H17a1 1 0 0 1 1 1Z',
                className: f
            })
        ]
    });
};
