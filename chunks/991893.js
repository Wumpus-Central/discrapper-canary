r.d(n, {
    t: function () {
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
                d: 'm7.7 16.95 3.68-6.76a1 1 0 0 0-.5-1.4A3 3 0 1 1 15 6a1 1 0 1 0 2 0 5 5 0 1 0-7.85 4.1L5.95 16a2 2 0 1 0 1.78 3h8.54a2 2 0 1 0 0-2H7.73l-.02-.05Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M13.8 6.86A2 2 0 1 0 12.16 8l4.53 6.58a1 1 0 0 0 .82.43h.5a3 3 0 1 1-1.98 5.25 1 1 0 0 0-.66-.25h-.01a1 1 0 0 0-.66 1.75A4.98 4.98 0 0 0 23 18a5 5 0 0 0-4.97-5L13.8 6.86ZM5.97 13.88a1 1 0 0 1-.72 1.21 3 3 0 1 0 2.73 5.16 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 1 18a5 5 0 0 1 3.75-4.84 1 1 0 0 1 1.22.72Z',
                className: f
            })
        ]
    });
};
