r.d(n, {
    V: function () {
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
            fillRule: 'evenodd',
            d: 'M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-6.9 8.01a8.96 8.96 0 0 1-8.2 0l2.37-3.32a4.99 4.99 0 0 0 3.46 0l2.38 3.32ZM3 12c0 1.48.36 2.87.99 4.1l3.32-2.37a4.99 4.99 0 0 1 0-3.46L3.99 7.89A8.96 8.96 0 0 0 3 12Zm4.9-8.01a8.96 8.96 0 0 1 8.2 0L13.74 7.3a4.99 4.99 0 0 0-3.46 0L7.89 3.99ZM20 16.1a8.96 8.96 0 0 0 0-8.22l-3.32 2.38a4.99 4.99 0 0 1 0 3.46l3.32 2.38ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
