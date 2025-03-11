n.d(t, { Z: () => c });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(345119);
let s = n(223640),
    l = n(811877),
    c = (e) => {
        let { iconMode: t = 'light', loading: n, className: i, imgClassName: c } = e,
            u = 'light' === t ? s : l;
        return (0, r.jsx)('div', {
            role: 'img',
            className: o()(a.orbIconContainer, i, { [a.loading]: n }),
            children: (0, r.jsx)('img', {
                className: o()(a.orbIconSVG, c),
                src: u,
                alt: 'Orb Icon'
            })
        });
    };
