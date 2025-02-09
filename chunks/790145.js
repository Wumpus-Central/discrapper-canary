t.d(n, { Z: () => o });
var i = t(200651);
t(192379);
var r = t(120356),
    s = t.n(r),
    l = t(258818);
let o = (e) => {
    let { value: n = 0, text: t, className: r, lowImportance: o, ...a } = e;
    return null != t
        ? (0, i.jsx)('div', {
              className: s()(l.wrapper, r, o && l.lowImportance),
              ...a,
              children: t
          })
        : n > 0
          ? (0, i.jsx)('div', {
                className: s()(l.wrapper, r, o && l.lowImportance),
                ...a,
                children: n
            })
          : null;
};
