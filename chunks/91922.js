r.d(n, {
    d: function () {
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
                d: 'M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.48c.2-.2.5-.2.7 0l2.13 2.12c.2.2.2.52 0 .71l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                d: 'M21.3 13.07c.21.26.62.32.86.08l.45-.44a2 2 0 0 0 0-2.83l-2.94-2.94.65-.66a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.41 0l-.66.66-2.72-2.72a2 2 0 0 0-2.83 0L7.76 4.93a2 2 0 0 0 0 2.83l7.53 7.53c.26.26.71.08.71-.29a3 3 0 0 1 5.3-1.93Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            })
        ]
    });
};
