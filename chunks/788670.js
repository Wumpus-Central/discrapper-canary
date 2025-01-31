n.d(t, { V: () => o });
var i = n(200651);
n(192379);
var r = n(692547),
    a = n(331595),
    s = n(267843);
let o = (e) => {
    var t, n;
    let { size: o = 'md', width: l, height: u, color: c = r.Z.colors.INTERACTIVE_NORMAL, colorClass: d = '', ...f } = e,
        _ = (0, s.m)(o),
        p = null !== (t = null == _ ? void 0 : _.width) && void 0 !== t ? t : l,
        h = null !== (n = null == _ ? void 0 : _.height) && void 0 !== n ? n : u;
    return (0, i.jsx)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: p,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, i.jsx)('path', {
            fill: 'string' == typeof c ? c : c.css,
            fillRule: 'evenodd',
            d: 'M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-6.9 8.01a8.96 8.96 0 0 1-8.2 0l2.37-3.32a4.99 4.99 0 0 0 3.46 0l2.38 3.32ZM3 12c0 1.48.36 2.87.99 4.1l3.32-2.37a4.99 4.99 0 0 1 0-3.46L3.99 7.89A8.96 8.96 0 0 0 3 12Zm4.9-8.01a8.96 8.96 0 0 1 8.2 0L13.74 7.3a4.99 4.99 0 0 0-3.46 0L7.89 3.99ZM20 16.1a8.96 8.96 0 0 0 0-8.22l-3.32 2.38a4.99 4.99 0 0 1 0 3.46l3.32 2.38ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
