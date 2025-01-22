r.d(n, {
    Y: function () {
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
            d: 'M1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.47c.2-.2.51-.2.7 0l2.13 2.12c.2.2.2.5 0 .7l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42ZM7.76 4.93a2 2 0 0 0 0 2.83l8.1 8.1c.09.09.22.14.35.14h2.9a.5.5 0 0 0 .35-.14l3.15-3.15a2 2 0 0 0 0-2.83l-2.94-2.94.65-.66a1 1 0 0 0 0-1.4l-1.41-1.42a1 1 0 0 0-1.41 0l-.66.65-2.72-2.71a2 2 0 0 0-2.83 0L7.76 4.93ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z',
            fill: 'string' == typeof d ? d : d.css,
            className: f
        })
    });
};
