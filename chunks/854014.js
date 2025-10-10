n.d(t, { y: () => m }), n(361932), n(187205);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(59662),
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
function m(e) {
    let { node: t, visibleContent: n } = e,
        { currentPanel: o, navigateTo: i, setShowNavigationMobile: m } = (0, s.t)(),
        { useTitle: b, stronglyDiscouragedCustomComponent: j, icon: p, trailing: x } = t,
        y = l.useMemo(() => t.layout[0], [t]),
        v = null != o && o.key === (null == y ? void 0 : y.key),
        g = b(),
        h =
            null != y
                ? () => {
                      i(y.key), m(!1);
                  }
                : t.onClick,
        O = l.useMemo(() => {
            var e;
            return null != (e = null == y ? void 0 : y.layout.flatMap((e) => e.layout)) ? e : [];
        }, [y]);
    return null != j
        ? (0, r.jsxs)(f, {
              onClick: h,
              active: v,
              children: [
                  (0, r.jsx)(j, {}),
                  null != x &&
                      (0, r.jsx)("div", {
                          className: d.itemContent,
                          children: (0, r.jsx)(c.W, {
                              trailing: x,
                              visibleContent: n,
                              isSelected: v,
                          }),
                      }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(f, {
                      onClick: h,
                      active: v,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.itemContent,
                              children: [
                                  (0, r.jsx)(p, {
                                      color: "currentColor",
                                      size: "refresh_sm",
                                      className: d.icon,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/medium",
                                      color: "currentColor",
                                      children: g,
                                  }),
                              ],
                          }),
                          null != x &&
                              (0, r.jsx)("div", {
                                  className: d.itemContent,
                                  children: (0, r.jsx)(c.W, {
                                      trailing: x,
                                      visibleContent: n,
                                      isSelected: v,
                                  }),
                              }),
                      ],
                  }),
                  v && O.length > 1 && (0, r.jsx)(u.Z, { categories: O }),
              ],
          });
}
