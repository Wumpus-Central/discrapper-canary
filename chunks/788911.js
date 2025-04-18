n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(651750);
let s = (e) => {
    let { message: t, className: n, noResultsImageURL: i, forceLightTheme: s, suggestions: l } = e,
        c = null != i ? { backgroundImage: 'url('.concat(i, ')') } : {};
    return (0, r.jsx)('div', {
        className: a()({ [o.forceLightTheme]: s }, n),
        children: (0, r.jsxs)('div', {
            className: o.wrapper,
            children: [
                (0, r.jsx)('div', {
                    className: o.sadImage,
                    style: c
                }),
                (0, r.jsx)('div', { children: t }),
                l
            ]
        })
    });
};
