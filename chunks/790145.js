n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(843950);
let a = (e) => {
    let { value: t = 0, text: n, className: s, lowImportance: a, ...o } = e;
    return null != n
        ? (0, i.jsx)('div', {
              className: r()(l.wrapper, s, a && l.lowImportance),
              ...o,
              children: n
          })
        : t > 0
          ? (0, i.jsx)('div', {
                className: r()(l.wrapper, s, a && l.lowImportance),
                ...o,
                children: t
            })
          : null;
};
