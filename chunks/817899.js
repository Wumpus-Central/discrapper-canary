n.d(t, { o: () => o });
var i = n(200651);
n(192379);
var r = n(692547),
    a = n(331595),
    s = n(267843);
let o = (e) => {
    var t, n;
    let { size: o = 'md', width: l, height: u, secondaryColor: c = 'transparent', secondaryColorClass: d = '', color: f = r.Z.colors.INTERACTIVE_NORMAL, colorClass: _ = '', ...p } = e,
        h = (0, s.m)(o),
        m = null !== (t = null == h ? void 0 : h.width) && void 0 !== t ? t : l,
        g = null !== (n = null == h ? void 0 : h.height) && void 0 !== n ? n : u;
    return (0, i.jsxs)('svg', {
        ...(0, a.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: m,
        height: g,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('circle', {
                cx: '12',
                cy: '12',
                r: '10',
                fill: 'string' == typeof c ? c : c.css,
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof f ? f : f.css,
                fillRule: 'evenodd',
                d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z',
                clipRule: 'evenodd',
                className: _
            })
        ]
    });
};
