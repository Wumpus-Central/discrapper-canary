n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(651750);
let s = (e) => {
    let { message: t, className: n, noResultsImageURL: i, forceLightTheme: s, suggestions: l } = e,
        c = null != i ? { backgroundImage: 'url('.concat(i, ')') } : {};
    return (0, r.jsx)('div', {
        className: o()({ [a.forceLightTheme]: s }, n),
        children: (0, r.jsxs)('div', {
            className: a.wrapper,
            children: [
                (0, r.jsx)('div', {
                    className: a.sadImage,
                    style: c
                }),
                (0, r.jsx)('div', { children: t }),
                l
            ]
        })
    });
};
