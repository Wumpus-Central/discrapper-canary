r.d(n, {
    v: function () {
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
                d: 'M19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24A3 3 0 0 0 19 16Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                fillRule: 'evenodd',
                d: 'M22 11.82c0 .2-.14.4-.33.49h-.02a.58.58 0 0 1-.44.05 7 7 0 0 0-4.55.04 1 1 0 0 0-1.75-.96 3.5 3.5 0 0 1-5.82 0 1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 5.95 2.27 6.97 6.97 0 0 0-1 6.44c.11.35-.13.73-.5.73H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5.82ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
                clipRule: 'evenodd',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            })
        ]
    });
};
