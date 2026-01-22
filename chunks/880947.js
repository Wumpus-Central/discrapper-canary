n.d(t, {
    N: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(187322),
    l = n(331322),
    c = n(842867);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function m(e, t, n) {
    let a = (0, c.dG)(e);
    return i.forwardRef(function (u, f) {
        let [h, ...m] = [u, f],
            {
                children: g,
                className: E,
                dir: b = "ltr",
                orientation: y = "vertical",
                overflow: O = "scroll",
                fade: A = !1,
                customTheme: v = !1,
                paddingFix: S = !0,
                style: I,
                gap: T,
                experimental_useStack: C,
                disableFocusRingScope: N = !1,
            } = h,
            R = _(h, [
                "children",
                "className",
                "dir",
                "orientation",
                "overflow",
                "fade",
                "customTheme",
                "paddingFix",
                "style",
                "gap",
                "experimental_useStack",
                "disableFocusRingScope",
            ]),
            [w] = m,
            { scrollerRef: P, getScrollerState: D } = (0, c.s$)(),
            x = (0, c.kR)(P, y);
        i.useImperativeHandle(
            w,
            () =>
                d(
                    {
                        getScrollerNode: () => P.current,
                        getScrollerState: D,
                    },
                    (0, c.cJ)(P, D, x, y),
                ),
            [P, D, y, x],
        );
        let L = N ? i.Fragment : o.xp,
            j = (0, c._I)({
                paddingFix: S,
                orientation: y,
                dir: b,
                className: E,
                scrollerRef: P,
                specs: a,
            });
        return C
            ? (0, r.jsx)(
                  l.B,
                  p(
                      d(
                          {
                              gap: T,
                              ref: P,
                              className: s()(E, {
                                  [e]: !0,
                                  [t]: A,
                                  [n]: v,
                              }),
                              style: (0, c.Ze)(I, y, O),
                              dir: b,
                          },
                          R,
                      ),
                      {
                          children: (0, r.jsxs)(L, {
                              containerRef: P,
                              children: [g, j],
                          }),
                      },
                  ),
              )
            : (0, r.jsx)(
                  "div",
                  p(
                      d(
                          {
                              ref: P,
                              className: s()(E, {
                                  [e]: !0,
                                  [t]: A,
                                  [n]: v,
                              }),
                              style: (0, c.Ze)(I, y, O),
                              dir: b,
                          },
                          R,
                      ),
                      {
                          children: (0, r.jsxs)(L, {
                              containerRef: P,
                              children: [g, j],
                          }),
                      },
                  ),
              );
    });
}
