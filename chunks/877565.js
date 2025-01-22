r.d(n, {
    HI: function () {
        return u;
    },
    gm: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(588468);
r(419922);
var s = r(388032);
function l(e) {
    let { titleWithQuery: n, titleWithoutQuery: r, query: a, getQuery: l, headerClassName: u, headerTrailingContent: c } = e,
        d = a.length > 0 ? s.intl.formatToPlainString(n, { prefix: l(a) }) : r;
    return (0, i.jsx)(
        o.ZP.Title,
        {
            className: u,
            title: d,
            children: c
        },
        'autocomplete-title-'.concat(d)
    );
}
function u(e) {
    let { query: n, selectedIndex: r, autocompletes: o, onHover: s, onClick: u, titleWithQuery: c, titleWithoutQuery: d, Component: f, getProps: p, getQuery: h, key: _, indexOffset: m = 0, headerClassName: g, headerTrailingContent: E, footer: v } = e;
    if (null == v && (null == o || 0 === o.length)) return null;
    let y =
        null == o
            ? void 0
            : o.map((e, n) => {
                  let i = n + m,
                      o = p(e, i);
                  return (0, a.createElement)(f, {
                      onClick: u,
                      onHover: s,
                      selected: r === i,
                      index: i,
                      ...o,
                      key: o.key
                  });
              });
    return (0, i.jsxs)(
        a.Fragment,
        {
            children: [
                null != c && null != d
                    ? l({
                          titleWithQuery: c,
                          titleWithoutQuery: d,
                          query: n,
                          getQuery: h,
                          headerClassName: g,
                          headerTrailingContent: E
                      })
                    : null,
                y,
                v
            ]
        },
        _
    );
}
