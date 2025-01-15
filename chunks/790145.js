var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(843950);
t.Z = (e) => {
    let { value: t = 0, text: n, className: s, lowImportance: l, ...o } = e;
    return null != n
        ? (0, i.jsx)('div', {
              className: r()(a.wrapper, s, l && a.lowImportance),
              ...o,
              children: n
          })
        : t > 0
          ? (0, i.jsx)('div', {
                className: r()(a.wrapper, s, l && a.lowImportance),
                ...o,
                children: t
            })
          : null;
};
