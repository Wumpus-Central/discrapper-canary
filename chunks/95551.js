n.d(t, { Gs: () => m, N3: () => u, eE: () => c });
var a = n(627968),
    s = n(64700),
    i = n(934551),
    l = n(397927),
    r = n(993401),
    o = n(985018),
    d = n(423648);
function c(e) {
    return (0, a.jsx)("div", {
        className: d.wE,
        children: (0, a.jsx)(l.W1t, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function u(e) {
    let { action: t, onClick: n, icon: c, label: u, sublabel: m, trailing: h, renderSubmenu: x, ref: p } = e,
        g = null != n,
        _ = (0, r.rE)({ action: t, onClick: n }),
        [f, v] = s.useState(!1),
        b = s.useRef(null),
        j = p ?? b,
        A = null != x,
        C = A && g,
        S = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        T = s.useCallback(() => {
            v(!0);
        }, []),
        y = s.useCallback(() => {
            v(!1);
        }, []),
        N = () =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("div", {
                        className: d.iA,
                        children: (0, a.jsx)(c, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsxs)("div", {
                        className: d.$H,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: d.W1,
                                        children: u,
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        color: "currentColor",
                                        variant: "text-xs/medium",
                                        children: m,
                                    }),
                                ],
                            }),
                            h,
                        ],
                    }),
                ],
            }),
        E = (e) => {
            let t;
            return (
                (t = C
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(l.DUT, {
                                  className: d.ef,
                                  onClick: _,
                                  focusProps: { offset: { ...S.offset, right: 0 } },
                                  children: N(),
                              }),
                              (0, a.jsx)(l.DUT, {
                                  className: d.ap,
                                  "aria-label": o.intl.string(o.t.PdRCRg),
                                  ...e,
                                  onClick: T,
                                  focusProps: S,
                                  children: (0, a.jsx)(i.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : A
                      ? (0, a.jsxs)(l.DUT, {
                            className: d.ef,
                            ...e,
                            onClick: T,
                            focusProps: S,
                            children: [
                                N(),
                                (0, a.jsx)("div", {
                                    className: d.ap,
                                    children: (0, a.jsx)(i.ChevronSmallRightIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                }),
                            ],
                        })
                      : (0, a.jsx)(l.DUT, { className: d.ef, onClick: _, focusProps: S, children: N() })),
                (0, a.jsx)("div", { ref: j, className: d.jG, children: t })
            );
        };
    return A
        ? (0, a.jsx)("li", {
              className: d.j$,
              onMouseEnter: T,
              onMouseLeave: y,
              children: (0, a.jsx)(l.YNO, {
                  targetElementRef: j,
                  spacing: 0,
                  renderPopout: x,
                  shouldShow: f,
                  onRequestClose: y,
                  children: E,
              }),
          })
        : (0, a.jsx)("li", { className: d.j$, children: E() });
}
function m(e) {
    let { children: t, "aria-label": n } = e;
    return (0, a.jsx)("ul", { "aria-label": n, children: t });
}
