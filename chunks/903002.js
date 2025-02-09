n.d(t, {
    D: () => u,
    F: () => o
});
var l = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    r = n(793030),
    s = n(335236);
let o = {
        SMALL: {
            style: s.small,
            text: 'text-xs/normal'
        },
        MEDIUM: {
            style: s.normal,
            text: 'text-sm/normal'
        }
    },
    u = (e) => {
        let { assets: t, assetCount: n, size: i } = e;
        return (0, l.jsxs)('div', {
            className: s.iconRow,
            children: [
                t.map((e, t) => {
                    let { src: n, alt: r } = e;
                    return (0, l.jsx)(
                        'img',
                        {
                            src: n,
                            alt: r,
                            className: a()(s.icon, i.style)
                        },
                        t
                    );
                }),
                n > 4 &&
                    (0, l.jsx)('div', {
                        className: a()(s.overflow, i.style),
                        children: (0, l.jsx)(r.xv, {
                            variant: i.text,
                            children: '+'.concat(n - 3)
                        })
                    })
            ]
        });
    };
