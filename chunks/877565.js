n.d(t, {
    HI: () => l,
    gm: () => o
});
var i = n(200651),
    r = n(192379),
    a = n(588468);
n(419922);
var s = n(388032);
function o(e) {
    let { titleWithQuery: t, titleWithoutQuery: n, query: r, getQuery: o, headerClassName: l, headerTrailingContent: u } = e,
        c = r.length > 0 ? s.intl.formatToPlainString(t, { prefix: o(r) }) : n;
    return (0, i.jsx)(
        a.ZP.Title,
        {
            className: l,
            title: c,
            children: u
        },
        'autocomplete-title-'.concat(c)
    );
}
function l(e) {
    let { query: t, selectedIndex: n, autocompletes: a, onHover: s, onClick: l, titleWithQuery: u, titleWithoutQuery: c, Component: d, getProps: f, getQuery: _, key: p, indexOffset: h = 0, headerClassName: m, headerTrailingContent: g, footer: E } = e;
    if (null == E && (null == a || 0 === a.length)) return null;
    let v =
        null == a
            ? void 0
            : a.map((e, t) => {
                  let i = t + h,
                      a = f(e, i);
                  return (0, r.createElement)(d, {
                      onClick: l,
                      onHover: s,
                      selected: n === i,
                      index: i,
                      ...a,
                      key: a.key
                  });
              });
    return (0, i.jsxs)(
        r.Fragment,
        {
            children: [
                null != u && null != c
                    ? o({
                          titleWithQuery: u,
                          titleWithoutQuery: c,
                          query: t,
                          getQuery: _,
                          headerClassName: m,
                          headerTrailingContent: g
                      })
                    : null,
                v,
                E
            ]
        },
        p
    );
}
