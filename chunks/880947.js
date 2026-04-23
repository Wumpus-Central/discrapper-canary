"use strict";
n.d(t, { N: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(331322),
    u = n(936005),
    c = n(536804),
    d = n(662246),
    _ = n(584648),
    f = n(518898),
    p = n(751591);
function h(e, t, n) {
    let s = (0, u.A)(e);
    return i.forwardRef(function (o, u) {
        let {
                children: h,
                className: m,
                dir: g = "ltr",
                orientation: A = "vertical",
                overflow: I = "scroll",
                fade: T = !1,
                customTheme: S = !1,
                paddingFix: y = !0,
                style: N,
                gap: v,
                experimental_useStack: C,
                disableFocusRingScope: O = !1,
                ...R
            } = o,
            { scrollerRef: b, getScrollerState: D } = (0, c.A)(),
            L = (0, d.A)(b, A);
        i.useImperativeHandle(
            u,
            () => ({ getScrollerNode: () => b.current, getScrollerState: D, ...(0, _.A)(b, D, L, A) }),
            [b, D, A, L],
        );
        let w = (0, f.A)({ paddingFix: y, orientation: A, dir: g, className: m, scrollerRef: b, specs: s });
        return C
            ? (0, r.jsx)(l.B, {
                  gap: v,
                  ref: b,
                  className: a()(m, { [e]: !0, [t]: T, [n]: S }),
                  style: (0, p.Ay)(N, A, I),
                  dir: g,
                  ...R,
                  children: (0, r.jsxs)(E, { disableFocusRingScope: O, containerRef: b, children: [h, w] }),
              })
            : (0, r.jsx)("div", {
                  ref: b,
                  className: a()(m, { [e]: !0, [t]: T, [n]: S }),
                  style: (0, p.Ay)(N, A, I),
                  dir: g,
                  ...R,
                  children: (0, r.jsxs)(E, { disableFocusRingScope: O, containerRef: b, children: [h, w] }),
              });
    });
}
function E(e) {
    let { disableFocusRingScope: t, containerRef: n, children: i } = e;
    return t ? i : (0, r.jsx)(o.xp, { containerRef: n, children: i });
}
