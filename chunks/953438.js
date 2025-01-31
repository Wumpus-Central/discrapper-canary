n.d(t, { o: () => o });
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
    return (0, i.jsxs)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: p,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M10.94 22.7a11.02 11.02 0 0 1-8.86-6.08A10.08 10.08 0 0 1 1 11.85c0-1.79.33-3.22 1.08-4.75a10.96 10.96 0 0 1 8.52-6.05c.8-.1 2.51-.07 3.27.07 1.57.28 2.98.84 4.24 1.69a10.8 10.8 0 0 1 4.86 9.64c-.03.06-.05 0-.07-.28a9.65 9.65 0 0 0-19.01-.88 9.25 9.25 0 0 0 .3 4.84 9.62 9.62 0 0 0 8.1 6.48c.67.05.5.1-.33.1-.46 0-.92-.02-1.02-.03Z',
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M13.27 21.34a7.7 7.7 0 0 1-7.06-8.7 7.7 7.7 0 0 1 6.6-6.5c.7-.1 1.94-.07 2.6.07a8.2 8.2 0 0 1 1.74.56l.39.18-.37.18a3.47 3.47 0 0 0-1.96 3.5 3.5 3.5 0 0 0 5.98 1.96c.16-.16.3-.28.3-.26.02.02.05.24.09.5a7.67 7.67 0 0 1-8.3 8.51Z',
                className: d
            })
        ]
    });
};
