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
            d: 'M16.02 3.06a1.23 1.23 0 0 0-2.39-.6l-2.14 7.76-.61-.24.83-6.97a1.26 1.26 0 0 0-2.49-.34L8.13 9.65l-.47 2.86a.42.42 0 0 1-.8.1l-.66-1.47a3.92 3.92 0 0 0-1.85-1.9l-.32-.17a1.53 1.53 0 0 0-1.91.47.61.61 0 0 0-.05.65l1.33 2.5c.06.12.12.24.16.37l1.26 4.11a7.47 7.47 0 0 0 14.28.03l.95-3.05 1.85-4.36a1.19 1.19 0 0 0-2.17-.96l-1.8 3.87-.56-.22 2.4-7.64a1.17 1.17 0 0 0-2.21-.75l-2.78 7.4-.67-.26 1.9-8.17Z',
            className: d
        })
    });
};
