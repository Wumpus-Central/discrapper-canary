r.d(n, {
    u: function () {
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
            d: 'M3 4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Zm9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 7a1 1 0 0 1 1-1h1.25c.41 0 .75.34.75.75C6 7.99 5 9 3.75 9A.75.75 0 0 1 3 8.25V7Zm1 11a1 1 0 0 1-1-1v-1.25c0-.41.34-.75.75-.75C4.99 15 6 16 6 17.25c0 .41-.34.75-.75.75H4ZM21 7a1 1 0 0 0-1-1h-1.25a.75.75 0 0 0-.75.75C18 7.99 19 9 20.25 9c.41 0 .75-.34.75-.75V7Zm-1 11a1 1 0 0 0 1-1v-1.25a.75.75 0 0 0-.75-.75C19.01 15 18 16 18 17.25c0 .41.34.75.75.75H20Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
