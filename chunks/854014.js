n.d(t, { y: () => b }), n(361932), n(187205);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(996435),
    c = n(950941),
    u = n(721611),
    d = n(873395);
function f(e) {
    let { onClick: t, active: n, children: l } = e;
    return (0, r.jsx)(a.P3F, {
        className: i()(d.item, { [d.active]: n }),
        onClick: t,
        children: l,
    });
}
function b(e) {
    let { node: t, visibleContent: n } = e,
        { useTitle: o, stronglyDiscouragedCustomComponent: i, icon: b, trailing: m } = t,
        v = l.useMemo(() => t.layout[0], [t]),
        p = s.Z.useField("currentPanel"),
        j = null != p && p.key === (null == v ? void 0 : v.key),
        x = o(),
        y =
            null != v
                ? () =>
                      s.Z.setState({
                          targetKey: v.key,
                          showNavigationMobile: !1,
                      })
                : t.onClick,
        h = l.useMemo(() => {
            var e;
            return null != (e = null == v ? void 0 : v.layout.flatMap((e) => e.layout)) ? e : [];
        }, [v]);
    return null != i
        ? (0, r.jsxs)(f, {
              onClick: y,
              active: j,
              children: [
                  (0, r.jsx)(i, {}),
                  null != m &&
                      (0, r.jsx)("div", {
                          className: d.itemContent,
                          children: (0, r.jsx)(c.W, {
                              trailing: m,
                              visibleContent: n,
                              isSelected: j,
                          }),
                      }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(f, {
                      onClick: y,
                      active: j,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.itemContent,
                              children: [
                                  (0, r.jsx)(b, {
                                      color: "currentColor",
                                      size: "refresh_sm",
                                      className: d.icon,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/medium",
                                      color: "currentColor",
                                      children: x,
                                  }),
                              ],
                          }),
                          null != m &&
                              (0, r.jsx)("div", {
                                  className: d.itemContent,
                                  children: (0, r.jsx)(c.W, {
                                      trailing: m,
                                      visibleContent: n,
                                      isSelected: j,
                                  }),
                              }),
                      ],
                  }),
                  j && h.length > 1 && (0, r.jsx)(u.Z, { categories: h }),
              ],
          });
}
