n.d(t, { y: () => y }), n(361932), n(187205);
var r = n(54381),
    o = n(473749),
    i = n(120356),
    l = n.n(i),
    a = n(91192),
    c = n(481060),
    s = n(996435),
    u = n(950941),
    d = n(721611),
    f = n(873395);
function b(e) {
    var t, n;
    let { tag: o, onClick: i, active: a, node: s, visibleContent: d, panelKey: b, listItemProps: y, children: p } = e,
        { icon: g, stronglyDiscouragedCustomComponent: O, trailing: j, useTitle: m } = s,
        v = null == m ? void 0 : m();
    return (0, r.jsxs)(o, {
        "data-settings-sidebar-item": b,
        className: f.itemContainer,
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
                        className: l()(f.item, { [f.active]: a }),
                        onClick: i,
                        children: [
                            null != O
                                ? (0, r.jsx)(O, {})
                                : (0, r.jsxs)("div", {
                                      className: f.itemContent,
                                      children: [
                                          (0, r.jsx)(g, {
                                              color: "currentColor",
                                              size: "refresh_sm",
                                              className: f.icon,
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-md/medium",
                                              color: "currentColor",
                                              children: v,
                                          }),
                                      ],
                                  }),
                            null != j &&
                                (0, r.jsx)("div", {
                                    className: f.itemContent,
                                    children: (0, r.jsx)(u.W, {
                                        trailing: j,
                                        visibleContent: d,
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
function y(e) {
    let { node: t, visibleContent: n, hoisted: i = !1 } = e,
        l = o.useMemo(() => t.layout[0], [t]),
        c = s.Z.useField("currentPanelKey"),
        u = null != c && c === (null == l ? void 0 : l.key),
        f =
            null != l
                ? () =>
                      s.Z.setState({
                          requestedTargetKey: l.key,
                          showNavigationMobile: !1,
                      })
                : t.onClick,
        y = o.useMemo(() => {
            var e;
            if (!u) return null;
            let t = (null != (e = null == l ? void 0 : l.layout.flatMap((e) => e.layout)) ? e : []).filter(
                (e) => null != e.useTitle,
            );
            return t.length > 1 ? (0, r.jsx)(d.Z, { categories: t }) : null;
        }, [u, null == l ? void 0 : l.layout]),
        p = i ? "li" : "div";
    return i
        ? (0, r.jsx)(b, {
              tag: p,
              panelKey: null == l ? void 0 : l.key,
              onClick: f,
              active: u,
              node: t,
              visibleContent: n,
              children: y,
          })
        : (0, r.jsx)(a.mh, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(b, {
                      tag: p,
                      panelKey: null == l ? void 0 : l.key,
                      onClick: f,
                      active: u,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: y,
                  }),
          });
}
