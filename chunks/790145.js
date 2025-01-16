var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(843950);
t.Z = (e) => {
    let { value: t = 0, text: n, className: r, lowImportance: l, ...o } = e;
    return null != n
        ? (0, i.jsx)('div', {
              className: s()(a.wrapper, r, l && a.lowImportance),
              ...o,
              children: n
          })
        : t > 0
          ? (0, i.jsx)('div', {
                className: s()(a.wrapper, r, l && a.lowImportance),
                ...o,
                children: t
            })
          : null;
};
