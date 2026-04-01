"use strict";
n.d(t, { N: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(331322),
    u = n(842867);
function c(e, t, n) {
    let s = (0, u.dG)(e);
    return i.forwardRef(function (o, c) {
        let {
                children: _,
                className: f,
                dir: p = "ltr",
                orientation: h = "vertical",
                overflow: m = "scroll",
                fade: E = !1,
                customTheme: g = !1,
                paddingFix: A = !0,
                style: I,
                gap: T,
                experimental_useStack: S,
                disableFocusRingScope: y = !1,
                ...v
            } = o,
            { scrollerRef: N, getScrollerState: C } = (0, u.s$)(),
            R = (0, u.kR)(N, h);
        i.useImperativeHandle(
            c,
            () => ({ getScrollerNode: () => N.current, getScrollerState: C, ...(0, u.cJ)(N, C, R, h) }),
            [N, C, h, R],
        );
        let O = (0, u._I)({ paddingFix: A, orientation: h, dir: p, className: f, scrollerRef: N, specs: s });
        return S
            ? (0, r.jsx)(l.B, {
                  gap: T,
                  ref: N,
                  className: a()(f, { [e]: !0, [t]: E, [n]: g }),
                  style: (0, u.Ze)(I, h, m),
                  dir: p,
                  ...v,
                  children: (0, r.jsxs)(d, { disableFocusRingScope: y, containerRef: N, children: [_, O] }),
              })
            : (0, r.jsx)("div", {
                  ref: N,
                  className: a()(f, { [e]: !0, [t]: E, [n]: g }),
                  style: (0, u.Ze)(I, h, m),
                  dir: p,
                  ...v,
                  children: (0, r.jsxs)(d, { disableFocusRingScope: y, containerRef: N, children: [_, O] }),
              });
    });
}
function d(e) {
    let { disableFocusRingScope: t, containerRef: n, children: i } = e;
    return t ? i : (0, r.jsx)(o.xp, { containerRef: n, children: i });
}
