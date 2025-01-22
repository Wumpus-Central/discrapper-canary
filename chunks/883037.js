r.d(n, {
    I: function () {
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
    return (0, i.jsx)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, i.jsx)('path', {
            fill: 'string' == typeof d ? d : d.css,
            d: 'M2 11a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2ZM2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4ZM3 10a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM22 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V7ZM2 4c0-1.1.9-2 2-2a1 1 0 1 1 0 2 1 1 0 0 1-2 0ZM20 2a1 1 0 1 0 0 2 1 1 0 1 0 2 0 2 2 0 0 0-2-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM14 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z',
            className: f
        })
    });
};
