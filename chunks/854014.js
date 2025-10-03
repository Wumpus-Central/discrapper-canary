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
        { useTitle: b, stronglyDiscouragedCustomComponent: j, icon: x, trailing: p } = t,
        v = l.useMemo(() => t.layout[0], [t]),
        y = null != o && o.key === (null == v ? void 0 : v.key),
        h = b(),
        g =
            null != v
                ? () => {
                      i(v.key), m(!1);
                  }
                : t.onClick,
        O = l.useMemo(() => {
            var e;
            return null != (e = null == v ? void 0 : v.layout.flatMap((e) => e.layout)) ? e : [];
        }, [v]);
    return null != j
        ? (0, r.jsxs)(f, {
              onClick: g,
              active: y,
              children: [
                  (0, r.jsx)(j, {}),
                  null != p &&
                      (0, r.jsx)("div", {
                          className: d.itemContent,
                          children: (0, r.jsx)(c.W, {
                              trailing: p,
                              visibleContent: n,
                          }),
                      }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(f, {
                      onClick: g,
                      active: y,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.itemContent,
                              children: [
                                  (0, r.jsx)(x, {
                                      color: "currentColor",
                                      size: "refresh_sm",
                                      className: d.icon,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/medium",
                                      color: "currentColor",
                                      children: h,
                                  }),
                              ],
                          }),
                          null != p &&
                              (0, r.jsx)("div", {
                                  className: d.itemContent,
                                  children: (0, r.jsx)(c.W, {
                                      trailing: p,
                                      visibleContent: n,
                                  }),
                              }),
                      ],
                  }),
                  y && O.length > 1 && (0, r.jsx)(u.Z, { categories: O }),
              ],
          });
}
