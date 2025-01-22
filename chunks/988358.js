r.d(n, {
    w: function () {
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
                fillRule: 'evenodd',
                d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h7.73c.12 0 .16-.26.05-.31A2.88 2.88 0 0 1 12 19a3 3 0 0 1 3-3h6.4c.2 0 .39-.11.45-.3a3 3 0 0 0 .15-.94V6a4 4 0 0 0-4-4ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z',
                clipRule: 'evenodd',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                d: 'M15 18a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2h-8Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            })
        ]
    });
};
