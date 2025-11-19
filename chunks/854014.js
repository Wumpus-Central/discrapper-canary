n.d(t, { y: () => p }), n(361932), n(187205);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(91192),
    c = n(481060),
    s = n(996435),
    u = n(950941),
    d = n(721611),
    f = n(873395);
function b(e) {
    var t, n;
    let { onClick: l, active: i, node: a, visibleContent: s, itemProps: d } = e,
        { icon: b, stronglyDiscouragedCustomComponent: p, trailing: y, useTitle: j } = a,
        m = null == j ? void 0 : j();
    return (0, r.jsxs)(
        c.P3F,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                className: o()(f.item, { [f.active]: i }),
                onClick: l,
            },
            d,
        )),
        (n = n =
            {
                children: [
                    null != p
                        ? (0, r.jsx)(p, {})
                        : (0, r.jsxs)("div", {
                              className: f.itemContent,
                              children: [
                                  (0, r.jsx)(b, {
                                      color: "currentColor",
                                      size: "refresh_sm",
                                      className: f.icon,
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      color: "currentColor",
                                      children: m,
                                  }),
                              ],
                          }),
                    null != y &&
                        (0, r.jsx)("div", {
                            className: f.itemContent,
                            children: (0, r.jsx)(u.W, {
                                trailing: y,
                                visibleContent: s,
                                isSelected: i,
                            }),
                        }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
function p(e) {
    let { node: t, visibleContent: n, hoisted: i = !1 } = e,
        o = l.useMemo(() => t.layout[0], [t]),
        c = s.Z.useField("currentPanelKey"),
        u = null != c && c === (null == o ? void 0 : o.key),
        f =
            null != o
                ? () =>
                      s.Z.setState({
                          targetKey: o.key,
                          showNavigationMobile: !1,
                      })
                : t.onClick,
        p = l.useMemo(() => {
            var e;
            return (null != (e = null == o ? void 0 : o.layout.flatMap((e) => e.layout)) ? e : []).filter(
                (e) => null != e.useTitle || null != e.useNavigationTitle,
            );
        }, [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            i
                ? (0, r.jsx)("li", {
                      children: (0, r.jsx)(b, {
                          onClick: f,
                          active: u,
                          node: t,
                          visibleContent: n,
                      }),
                  })
                : (0, r.jsx)(a.mh, {
                      id: t.key,
                      children: (e) =>
                          (0, r.jsx)(b, {
                              onClick: f,
                              active: u,
                              node: t,
                              visibleContent: n,
                              itemProps: e,
                          }),
                  }),
            u && p.length > 1 && (0, r.jsx)(d.Z, { categories: p }),
        ],
    });
}
