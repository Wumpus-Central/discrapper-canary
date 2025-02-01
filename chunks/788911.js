n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(620827);
let o = (e) => {
    let { message: t, className: n, noResultsImageURL: r, forceLightTheme: o, suggestions: l } = e,
        u = null != r ? { backgroundImage: 'url('.concat(r, ')') } : {};
    return (0, i.jsx)('div', {
        className: a()({ [s.forceLightTheme]: o }, n),
        children: (0, i.jsxs)('div', {
            className: s.wrapper,
            children: [
                (0, i.jsx)('div', {
                    className: s.sadImage,
                    style: u
                }),
                (0, i.jsx)('div', { children: t }),
                l
            ]
        })
    });
};
