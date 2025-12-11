n.d(t, { y: () => p });
var r = n(54381),
    o = n(473749),
    a = n(120356),
    i = n.n(a),
    l = n(91192),
    c = n(481060),
    s = n(28682),
    u = n(996435),
    f = n(950941),
    d = n(721611),
    b = n(732306);
function y(e) {
    var t, n;
    let { tag: o, onClick: a, active: l, node: s, visibleContent: u, panelKey: d, listItemProps: y, children: p } = e,
        { icon: g, stronglyDiscouragedCustomComponent: O, trailing: m, useTitle: j } = s,
        v = null == j ? void 0 : j();
    return (0, r.jsxs)(o, {
        "data-settings-sidebar-item": d,
        className: b.itemContainer,
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
                        className: i()(b.item, { [b.active]: l }),
                        onClick: a,
                        children: [
                            null != O
                                ? (0, r.jsx)(O, {})
                                : (0, r.jsxs)("div", {
                                      className: b.itemContent,
                                      children: [
                                          (0, r.jsx)(g, {
                                              color: "currentColor",
                                              size: "refresh_sm",
                                              className: b.icon,
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
                                    className: b.itemContent,
                                    children: (0, r.jsx)(f.W, {
                                        trailing: m,
                                        visibleContent: u,
                                        isSelected: l,
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
    let { node: t, visibleContent: n, hoisted: a = !1 } = e,
        i = o.useMemo(() => t.layout[0], [t]),
        c = u.Z.useField("currentPanelKey"),
        f = null != c && c === (null == i ? void 0 : i.key),
        b =
            null != i
                ? () =>
                      u.Z.setState({
                          requestedTargetKey: i.key,
                          showNavigationMobile: !1,
                      })
                : t.onClick,
        p = o.useMemo(() => {
            if (!f || null == i || !(0, s.iU)(i.layout)) return null;
            let e = i.layout.filter((e) => null != e.useTitle || null != e.useSubnavLabel);
            return e.length > 1 ? (0, r.jsx)(d.Z, { categories: e }) : null;
        }, [f, i]),
        g = a ? "li" : "div";
    return a
        ? (0, r.jsx)(y, {
              tag: g,
              panelKey: null == i ? void 0 : i.key,
              onClick: b,
              active: f,
              node: t,
              visibleContent: n,
              children: p,
          })
        : (0, r.jsx)(l.mh, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(y, {
                      tag: g,
                      panelKey: null == i ? void 0 : i.key,
                      onClick: b,
                      active: f,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: p,
                  }),
          });
}
