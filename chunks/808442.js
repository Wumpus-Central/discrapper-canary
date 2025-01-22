r.d(n, {
    M: function () {
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
            d: 'M3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H5.07a8 8 0 1 1 13.29 8.86l-.01.01a7.97 7.97 0 0 1-1.9 1.78 1 1 0 0 0 1.1 1.67c.19-.12.36-.25.53-.38.7-.54 1.32-1.16 1.85-1.85l.01-.01A9.95 9.95 0 0 0 22 12 10 10 0 0 0 4 6V3a1 1 0 0 0-1-1ZM3.18 14.06a1 1 0 0 0-.61 1.27c.11.33.24.64.4.95a1 1 0 0 0 1.8-.86c-.12-.24-.22-.5-.32-.75a1 1 0 0 0-1.27-.61ZM5.33 18.12a1 1 0 0 0 .09 1.41c.51.45 1.07.85 1.67 1.18a1 1 0 0 0 .98-1.74 8.02 8.02 0 0 1-1.33-.95 1 1 0 0 0-1.41.1ZM14.17 20.8a1 1 0 0 0-1.12-.87 8.08 8.08 0 0 1-1.87.03 1 1 0 1 0-.2 1.99 10.1 10.1 0 0 0 2.32-.03 1 1 0 0 0 .87-1.13Z',
            className: f
        })
    });
};
