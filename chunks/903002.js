n.d(t, {
    D: () => c,
    F: () => s
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(793030),
    a = n(61506);
let s = {
        SMALL: {
            style: a.small,
            text: 'text-xs/normal'
        },
        MEDIUM: {
            style: a.normal,
            text: 'text-sm/normal'
        }
    },
    c = (e) => {
        let { assets: t, assetCount: n, size: i } = e;
        return (0, r.jsxs)('div', {
            className: a.iconRow,
            children: [
                t.map((e, t) => {
                    let { src: n, alt: o } = e;
                    return (0, r.jsx)(
                        'img',
                        {
                            src: n,
                            alt: o,
                            className: l()(a.icon, i.style)
                        },
                        t
                    );
                }),
                n > 4 &&
                    (0, r.jsx)('div', {
                        className: l()(a.overflow, i.style),
                        children: (0, r.jsx)(o.xv, {
                            variant: i.text,
                            children: '+'.concat(n - 3)
                        })
                    })
            ]
        });
    };
