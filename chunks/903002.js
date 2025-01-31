n.d(t, { D: () => a });
var l = n(200651);
n(192379);
var i = n(793030),
    r = n(750472);
let a = (e) => {
    let { assets: t, assetCount: n } = e;
    return (0, l.jsxs)('div', {
        className: r.iconRow,
        children: [
            t.map((e, t) => {
                let { src: n, alt: i } = e;
                return (0, l.jsx)(
                    'img',
                    {
                        src: n,
                        alt: i,
                        className: r.icon
                    },
                    t
                );
            }),
            n > 4 &&
                (0, l.jsx)('div', {
                    className: r.overflow,
                    children: (0, l.jsx)(i.xv, {
                        variant: 'text-sm/normal',
                        children: '+'.concat(n - 3)
                    })
                })
        ]
    });
};
