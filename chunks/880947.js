"use strict";
n.d(t, { N: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(187322),
    l = n(331322),
    u = n(842867);
function c(e, t, n) {
    let a = (0, u.dG)(e);
    return i.forwardRef(function (c, d) {
        let {
                children: _,
                className: f,
                dir: p = "ltr",
                orientation: h = "vertical",
                overflow: m = "scroll",
                fade: g = !1,
                customTheme: E = !1,
                paddingFix: A = !0,
                style: I,
                gap: T,
                experimental_useStack: y,
                disableFocusRingScope: S = !1,
                ...v
            } = c,
            { scrollerRef: C, getScrollerState: b } = (0, u.s$)(),
            N = (0, u.kR)(C, h);
        i.useImperativeHandle(
            d,
            () => ({ getScrollerNode: () => C.current, getScrollerState: b, ...(0, u.cJ)(C, b, N, h) }),
            [C, b, h, N],
        );
        let R = S ? i.Fragment : o.xp,
            O = (0, u._I)({ paddingFix: A, orientation: h, dir: p, className: f, scrollerRef: C, specs: a });
        return y
            ? (0, r.jsx)(l.B, {
                  gap: T,
                  ref: C,
                  className: s()(f, { [e]: !0, [t]: g, [n]: E }),
                  style: (0, u.Ze)(I, h, m),
                  dir: p,
                  ...v,
                  children: (0, r.jsxs)(R, { containerRef: C, children: [_, O] }),
              })
            : (0, r.jsx)("div", {
                  ref: C,
                  className: s()(f, { [e]: !0, [t]: g, [n]: E }),
                  style: (0, u.Ze)(I, h, m),
                  dir: p,
                  ...v,
                  children: (0, r.jsxs)(R, { containerRef: C, children: [_, O] }),
              });
    });
}
