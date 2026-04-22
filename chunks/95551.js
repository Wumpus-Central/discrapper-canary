n.d(t, { Gs: () => _, N3: () => m, eE: () => h });
var i = n(627968),
    s = n(64700),
    l = n(320448),
    a = n(861672),
    r = n(834730),
    o = n(939249),
    d = n(265872),
    c = n(993401),
    u = n(985018),
    p = n(447349);
function h(e) {
    return (0, i.jsx)("div", {
        className: p.wE,
        children: (0, i.jsx)(a.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function m(e) {
    let { action: t, onClick: n, icon: a, label: h, sublabel: m, trailing: _, renderSubmenu: A, ref: f } = e,
        g = null != n,
        x = (0, c.rE)({ action: t, onClick: n }),
        [E, C] = s.useState(!1),
        T = s.useRef(null),
        v = f ?? T,
        S = null != A,
        b = S && g,
        j = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        I = s.useCallback(() => {
            C(!0);
        }, []),
        R = s.useCallback(() => {
            C(!1);
        }, []),
        N = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: p.iA,
                        children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: p.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(r.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: p.W1,
                                        children: h,
                                    }),
                                    (0, i.jsx)(r.E, { color: "currentColor", variant: "text-xs/medium", children: m }),
                                ],
                            }),
                            _,
                        ],
                    }),
                ],
            }),
        y = (e) => {
            let t;
            return (
                (t = b
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(o.D, {
                                  className: p.ef,
                                  onClick: x,
                                  focusProps: { offset: { ...j.offset, right: 0 } },
                                  children: N(),
                              }),
                              (0, i.jsx)(o.D, {
                                  className: p.ap,
                                  "aria-label": u.intl.string(u.t.PdRCRg),
                                  ...e,
                                  onClick: I,
                                  focusProps: j,
                                  children: (0, i.jsx)(l._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : S
                      ? (0, i.jsxs)(o.D, {
                            className: p.ef,
                            ...e,
                            onClick: I,
                            focusProps: j,
                            children: [
                                N(),
                                (0, i.jsx)("div", {
                                    className: p.ap,
                                    children: (0, i.jsx)(l._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(o.D, { className: p.ef, onClick: x, focusProps: j, children: N() })),
                (0, i.jsx)("div", { ref: v, className: p.jG, children: t })
            );
        };
    return S
        ? (0, i.jsx)("li", {
              className: p.j$,
              onMouseEnter: I,
              onMouseLeave: R,
              children: (0, i.jsx)(d.Y, {
                  targetElementRef: v,
                  spacing: 0,
                  renderPopout: A,
                  shouldShow: E,
                  onRequestClose: R,
                  children: y,
              }),
          })
        : (0, i.jsx)("li", { className: p.j$, children: y() });
}
function _(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
