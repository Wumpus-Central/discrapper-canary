r.d(n, {
    R: function () {
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
                d: 'M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M19.53 6.47a.75.75 0 0 0-1.28.53v3.8l-2.76-2.37a.75.75 0 1 0-.98 1.14l3.42 2.93-3.42 2.93a.75.75 0 1 0 .98 1.14l2.76-2.37V18a.75.75 0 0 0 1.28.53l3-3a.75.75 0 0 0-.04-1.1l-2.25-1.93 2.25-1.93a.75.75 0 0 0 .04-1.1l-3-3Zm1.37 8.57-1.15-.98v2.13l1.15-1.15Zm-1.15-6.23v2.13l1.15-.98-1.15-1.15Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
