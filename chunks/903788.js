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
                d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z',
                clipRule: 'evenodd',
                className: h
            })
        ]
    });
};
