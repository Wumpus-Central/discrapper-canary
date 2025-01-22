r.d(n, {
    o: function () {
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
                fill: 'string' == typeof d ? d : d.css,
                d: 'M10.94 22.7a11.02 11.02 0 0 1-8.86-6.08A10.08 10.08 0 0 1 1 11.85c0-1.79.33-3.22 1.08-4.75a10.96 10.96 0 0 1 8.52-6.05c.8-.1 2.51-.07 3.27.07 1.57.28 2.98.84 4.24 1.69a10.8 10.8 0 0 1 4.86 9.64c-.03.06-.05 0-.07-.28a9.65 9.65 0 0 0-19.01-.88 9.25 9.25 0 0 0 .3 4.84 9.62 9.62 0 0 0 8.1 6.48c.67.05.5.1-.33.1-.46 0-.92-.02-1.02-.03Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M13.27 21.34a7.7 7.7 0 0 1-7.06-8.7 7.7 7.7 0 0 1 6.6-6.5c.7-.1 1.94-.07 2.6.07a8.2 8.2 0 0 1 1.74.56l.39.18-.37.18a3.47 3.47 0 0 0-1.96 3.5 3.5 3.5 0 0 0 5.98 1.96c.16-.16.3-.28.3-.26.02.02.05.24.09.5a7.67 7.67 0 0 1-8.3 8.51Z',
                className: f
            })
        ]
    });
};
