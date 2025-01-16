var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(620827);
let l = (e) => {
    let { message: n, className: r, noResultsImageURL: a, forceLightTheme: l, suggestions: u } = e,
        c = null != a ? { backgroundImage: 'url('.concat(a, ')') } : {};
    return (0, i.jsx)('div', {
        className: s()({ [o.forceLightTheme]: l }, r),
        children: (0, i.jsxs)('div', {
            className: o.wrapper,
            children: [
                (0, i.jsx)('div', {
                    className: o.sadImage,
                    style: c
                }),
                (0, i.jsx)('div', { children: n }),
                u
            ]
        })
    });
};
n.Z = l;
