r.d(n, {
    A: function () {
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
            d: 'm11.33 14.83-2.16-2.16a1 1 0 0 1-.25-.99l.75-2.57A3 3 0 0 1 11 7.4l8.05-4.91a1.8 1.8 0 0 1 2.47 2.47L16.61 13a3 3 0 0 1-1.72 1.32l-2.57.75a1 1 0 0 1-.99-.25ZM8.74 13.57c-.2-.2-.44-.36-.7-.43a4 4 0 0 0-5 4.42C3.14 18.23 2.68 19 2 19a1 1 0 1 0 0 2h5a4 4 0 0 0 3.86-5.03c-.07-.27-.23-.51-.43-.7l-1.7-1.7ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z',
            className: f
        })
    });
};
