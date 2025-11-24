n.d(t, { y: () => b }), n(361932), n(187205);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(91192),
    s = n(481060),
    c = n(996435),
    u = n(950941),
    d = n(721611),
    f = n(873395);
function p(e) {
    var t, n;
    let { tag: l, onClick: i, active: a, node: c, visibleContent: d, panelKey: p, listItemProps: b, children: y } = e,
        { icon: v, stronglyDiscouragedCustomComponent: g, trailing: h, useTitle: m } = c,
        x = null == m ? void 0 : m();
    return (0, r.jsxs)(l, {
        "data-settings-sidebar-item": p,
        className: f.itemContainer,
        children: [
            (0, r.jsxs)(
                s.P3F,
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
                })({}, b)),
                (n = n =
                    {
                        className: o()(f.item, { [f.active]: a }),
                        onClick: i,
                        children: [
                            null != g
                                ? (0, r.jsx)(g, {})
                                : (0, r.jsxs)("div", {
                                      className: f.itemContent,
                                      children: [
                                          (0, r.jsx)(v, {
                                              color: "currentColor",
                                              size: "refresh_sm",
                                              className: f.icon,
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              variant: "text-md/medium",
                                              color: "currentColor",
                                              children: x,
                                          }),
                                      ],
                                  }),
                            null != h &&
                                (0, r.jsx)("div", {
                                    className: f.itemContent,
                                    children: (0, r.jsx)(u.W, {
                                        trailing: h,
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
            y,
        ],
    });
}
function b(e) {
    let { node: t, visibleContent: n, hoisted: i = !1 } = e,
        o = l.useMemo(() => t.layout[0], [t]),
        s = c.Z.useField("currentPanelKey"),
        u = null != s && s === (null == o ? void 0 : o.key),
        f =
            null != o
                ? () =>
                      c.Z.setState({
                          targetKey: o.key,
                          showNavigationMobile: !1,
                      })
                : t.onClick,
        b = l.useMemo(() => {
            var e;
            if (!u) return null;
            let t = (null != (e = null == o ? void 0 : o.layout.flatMap((e) => e.layout)) ? e : []).filter(
                (e) => null != e.useTitle || null != e.useNavigationTitle,
            );
            return t.length > 1 ? (0, r.jsx)(d.Z, { categories: t }) : null;
        }, [u, null == o ? void 0 : o.layout]),
        y = i ? "li" : "div";
    return i
        ? (0, r.jsx)(p, {
              tag: y,
              panelKey: null == o ? void 0 : o.key,
              onClick: f,
              active: u,
              node: t,
              visibleContent: n,
              children: b,
          })
        : (0, r.jsx)(a.mh, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(p, {
                      tag: y,
                      panelKey: null == o ? void 0 : o.key,
                      onClick: f,
                      active: u,
                      node: t,
                      visibleContent: n,
                      listItemProps: e,
                      children: b,
                  }),
          });
}
