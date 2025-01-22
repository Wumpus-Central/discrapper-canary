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
                d: 'M15.74 5.74a.5.5 0 0 0 .54.7l5.01-.88a.5.5 0 0 0 .4-.58l-.26-1.47a3 3 0 0 0-3.2-2.47.46.46 0 0 0-.37.26l-2.12 4.44ZM15.13 2.37a.5.5 0 0 0-.53-.7l-4.25.74a.5.5 0 0 0-.37.28L7.87 7.13a.5.5 0 0 0 .53.7l4.25-.74a.5.5 0 0 0 .37-.28l2.11-4.44ZM6.72 3.05l-2.55.45a3 3 0 0 0-2.43 3.48L2 8.46c.05.27.3.45.58.4l2.2-.39a.5.5 0 0 0 .36-.27l2.12-4.44a.5.5 0 0 0-.54-.7Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M2 10.5c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8.5ZM5 14a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H6Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
