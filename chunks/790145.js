var r = t(200651);
t(192379);
var s = t(120356),
    i = t.n(s),
    l = t(843950);
n.Z = (e) => {
    let { value: n = 0, text: t, className: s, lowImportance: a, ...o } = e;
    return null != t
        ? (0, r.jsx)('div', {
              className: i()(l.wrapper, s, a && l.lowImportance),
              ...o,
              children: t
          })
        : n > 0
          ? (0, r.jsx)('div', {
                className: i()(l.wrapper, s, a && l.lowImportance),
                ...o,
                children: n
            })
          : null;
};
