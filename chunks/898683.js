n.d(t, { p: () => o });
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
                d: 'M21.92 14.08c.32.27.86.15.93-.26A11 11 0 1 0 2.91 18.2c.34.5 1.05.51 1.46.07l.02-.02c.33-.36.34-.91.07-1.33a9 9 0 1 1 16.48-3.88c-.03.22.1.44.29.55.24.14.48.3.7.49Z',
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M13.48 16.18c.39.1.45.62.2.93A2.99 2.99 0 0 0 13 19v3.5c0 .26-.2.47-.46.49a11.16 11.16 0 0 1-5.4-1.12 1.52 1.52 0 0 1-.8-1.84 6 6 0 0 1 7.14-3.85ZM18.98 12.58c-.02.24-.23.42-.48.45-.18.02-.35.05-.53.09-.45.1-1-.36-.98-.82L17 12a5 5 0 1 0-9.6 1.94c.17.42.13.9-.18 1.23l-.05.06c-.43.47-1.18.42-1.45-.14a7 7 0 1 1 13.26-2.51Z',
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
