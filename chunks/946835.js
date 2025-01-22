r.d(n, {
    i: function () {
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
    let { size: l = 'md', width: u, height: c, secondaryColor: d = 'transparent', secondaryColorClass: f = '', color: p = a.Z.colors.INTERACTIVE_NORMAL, colorClass: h = '', ..._ } = e,
        m = (0, s.m)(l),
        g = null !== (n = null == m ? void 0 : m.width) && void 0 !== n ? n : u,
        E = null !== (r = null == m ? void 0 : m.height) && void 0 !== r ? r : c;
    return (0, i.jsxs)('svg', {
        ...(0, o.Z)(_),
        xmlns: 'http://www.w3.org/2000/svg',
        width: g,
        height: E,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('circle', {
                cx: '12',
                cy: '12',
                r: '10',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof p ? p : p.css,
                fillRule: 'evenodd',
                d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z',
                clipRule: 'evenodd',
                className: h
            })
        ]
    });
};
