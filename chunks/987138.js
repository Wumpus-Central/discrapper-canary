n.d(t, { T: () => o });
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
            d: 'M23.79 16.92c-.47.59-1.62 1.01-1.62 1.01L13.62 21v-2.26l6.3-2.24c.7-.26.82-.62.24-.81a4.24 4.24 0 0 0-2.35.12l-4.19 1.48v-2.35l.25-.08s1.2-.43 2.9-.62c1.71-.19 3.8.02 5.43.64 1.85.59 2.05 1.45 1.59 2.04Zm-9.35-3.86V7.27c0-.67-.13-1.3-.77-1.48-.48-.15-.79.3-.79.98v14.5l-3.9-1.25V2.74a47 47 0 0 1 5.38 1.48c3.31 1.13 4.43 2.55 4.43 5.74 0 3.1-1.92 4.28-4.35 3.1ZM1.8 18.5c-1.9-.53-2.2-1.64-1.34-2.28.8-.6 2.15-1.04 2.15-1.04l5.6-2v2.28L4.18 16.9c-.71.26-.82.62-.24.81.58.19 1.63.14 2.34-.12l1.93-.7v2.03l-.38.06c-1.94.32-4 .19-6.03-.48Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
