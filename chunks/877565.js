n.d(t, {
    HI: () => f,
    gm: () => d
});
var r = n(200651),
    i = n(192379),
    a = n(588468);
n(419922);
var o = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    let { titleWithQuery: t, titleWithoutQuery: n, query: i, getQuery: s, headerClassName: l, headerTrailingContent: c } = e,
        u = i.length > 0 ? o.intl.formatToPlainString(t, { prefix: s(i) }) : n;
    return (0, r.jsx)(
        a.ZP.Title,
        {
            className: l,
            title: u,
            children: c
        },
        'autocomplete-title-'.concat(u)
    );
}
function f(e) {
    let { query: t, selectedIndex: n, autocompletes: a, onHover: o, onClick: s, titleWithQuery: c, titleWithoutQuery: f, Component: _, getProps: p, getQuery: h, key: m, indexOffset: g = 0, headerClassName: E, headerTrailingContent: b, footer: y } = e;
    if (null == y && (null == a || 0 === a.length)) return null;
    let v =
        null == a
            ? void 0
            : a.map((e, t) => {
                  let r = t + g,
                      a = p(e, r);
                  return (0, i.createElement)(
                      _,
                      u(
                          l(
                              {
                                  onClick: s,
                                  onHover: o,
                                  selected: n === r,
                                  index: r
                              },
                              a
                          ),
                          { key: a.key }
                      )
                  );
              });
    return (0, r.jsxs)(
        i.Fragment,
        {
            children: [
                null != c && null != f
                    ? d({
                          titleWithQuery: c,
                          titleWithoutQuery: f,
                          query: t,
                          getQuery: h,
                          headerClassName: E,
                          headerTrailingContent: b
                      })
                    : null,
                v,
                y
            ]
        },
        m
    );
}
