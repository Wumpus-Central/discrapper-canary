n.d(t, { y: () => p });
var r = n(54381),
    o = n(473749),
    i = n(120356),
    l = n.n(i),
    a = n(91192),
    c = n(481060),
    s = n(28682),
    u = n(996435),
    b = n(950941),
    f = n(721611),
    d = n(873395);
function y(e) {
    var t, n;
    let { tag: o, onClick: i, active: a, node: s, visibleContent: u, panelKey: f, listItemProps: y, children: p } = e,
        { icon: g, stronglyDiscouragedCustomComponent: O, trailing: m, useTitle: j } = s,
        v = null == j ? void 0 : j();
    return (0, r.jsxs)(o, {
        "data-settings-sidebar-item": f,
        className: d.itemContainer,
        children: [
            (0, r.jsxs)(
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
                })({}, y)),
                (n = n =
                    {
                        className: l()(d.item, { [d.active]: a }),
                        onClick: i,
                        children: [
                            null != O
                                ? (0, r.jsx)(O, {})
                                : (0, r.jsxs)("div", {
                                      className: d.itemContent,
                                      children: [
                                          (0, r.jsx)(g, {
                                              color: "currentColor",
                                              size: "refresh_sm",
                                              className: d.icon,
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-md/medium",
                                              color: "currentColor",
                                              children: v,
                                          }),
                                      ],
                                  }),
                            null != m &&
                                (0, r.jsx)("div", {
                                    className: d.itemContent,
                                    children: (0, r.jsx)(b.W, {
                                        trailing: m,
                                        visibleContent: u,
                                        isSelected: a,
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
            ),
            p,
        ],
    });
}
function p(e) {
    let { node: t, visibleContent: n, hoisted: i = !1 } = e,
        l = o.useMemo(() => t.layout[0], [t]),
        c = u.Z.useField("currentPanelKey"),
        b = null != c && c === (null == l ? void 0 : l.key),
        d =
            null != l
                ? () =>
                      u.Z.setState({
                          requestedTargetKey: l.key,
                          showNavigationMobile: !1,
                      })
                : t.onClick,
        p = o.useMemo(() => {
            if (!b || null == l || !(0, s.iU)(l.layout)) return null;
            let e = l.layout.filter((e) => null != e.useTitle);
            return e.length > 1 ? (0, r.jsx)(f.Z, { categories: e }) : null;
        }, [b, l]),
        g = i ? "li" : "div";
    return i
        ? (0, r.jsx)(y, {
              tag: g,
              panelKey: null == l ? void 0 : l.key,
              onClick: d,
              active: b,
              node: t,
              visibleContent: n,
              children: p,
          })
        : (0, r.jsx)(a.mh, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(y, {
                      tag: g,
                      panelKey: null == l ? void 0 : l.key,
                      onClick: d,
                      active: b,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: p,
                  }),
          });
}
