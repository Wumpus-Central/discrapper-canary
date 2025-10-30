n.d(t, {
    DF: () => g,
    ZP: () => y,
});
var r,
    i,
    l = n(951288);
n(647438);
var o = n(120356),
    a = n.n(o),
    s = n(755721),
    c = n(481060),
    u = n(493773),
    d = n(921944),
    p = n(12614);
function f(e) {
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
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var g =
        (((r = {}).TOP_CENTER = "caretTopCenter"),
        (r.TOP_RIGHT = "caretTopRight"),
        (r.TOP_LEFT = "caretTopLeft"),
        (r.BOTTOM_CENTER = "caretBottomCenter"),
        (r.BOTTOM_LEFT = "caretBottomLeft"),
        (r.BOTTOM_RIGHT = "caretBottomRight"),
        (r.LEFT_CENTER = "caretLeftCenter"),
        (r.LEFT_TOP = "caretLeftTop"),
        (r.RIGHT_CENTER = "caretRightCenter"),
        (r.RIGHT_TOP = "caretRightTop"),
        r),
    m = (((i = {})[(i.ADJACENT = 0)] = "ADJACENT"), (i[(i.STACKED = 1)] = "STACKED"), i);
let b = Object.freeze({
        brand: p.colorBrand,
        primary: p.colorPrimary,
    }),
    _ = Object.freeze({
        brand: "always-white",
        primary: "header-primary",
    }),
    O = Object.freeze({
        brand: "always-white",
        primary: "text-default",
    });
function y(e) {
    let {
        color: t = "brand",
        className: n,
        header: r,
        headerClassName: i,
        content: o,
        contentClassName: g,
        buttonCTA: m,
        secondaryButtonCTA: y,
        onClick: v,
        onSecondaryClick: j,
        buttonProps: C = {
            color: s.zx.Colors.BRAND,
            look: s.zx.Looks.FILLED,
        },
        secondaryButtonProps: E = { color: s.zx.Colors.BRAND_INVERTED },
        onComponentMount: x,
        asset: S,
        markAsDismissed: I,
        caretPosition: P = "caretTopCenter",
        buttonLayout: N = 0,
    } = e;
    (0, u.ZP)(() => {
        null == x || x();
    });
    let Z = null != y;
    return (0, l.jsxs)("div", {
        className: a()(n, b[t], p.upsellTooltipWrapper, p[P]),
        children: [
            S,
            null == r
                ? null
                : (0, l.jsx)(c.Heading, {
                      color: _[t],
                      className: a()(i, p.upsellTooltipHeader),
                      variant: "heading-md/semibold",
                      children: r,
                  }),
            (0, l.jsx)(c.Text, {
                color: O[t],
                className: a()(g, p.content),
                variant: "text-sm/normal",
                children: o,
            }),
            null != m || Z
                ? (0, l.jsxs)("div", {
                      className: a()(p.upsellButtonsContainer, {
                          [p.upsellButtonsAdjacent]: 0 === N,
                          [p.upsellButtonsStacked]: 1 === N,
                      }),
                      children: [
                          Z
                              ? (0, l.jsx)(
                                    s.zx,
                                    h(f({}, E), {
                                        fullWidth: 1 === N,
                                        onClick: () => {
                                            null == j || j(), null == I || I(d.L.SECONDARY);
                                        },
                                        children: y,
                                    }),
                                )
                              : null,
                          null == m
                              ? null
                              : (0, l.jsx)(
                                    s.zx,
                                    h(f({}, C), {
                                        fullWidth: !Z || 1 === N,
                                        onClick: (e) => {
                                            v(e), null == I || I(d.L.PRIMARY);
                                        },
                                        children: m,
                                    }),
                                ),
                      ],
                  })
                : null,
        ],
    });
}
(y.CaretPosition = g), (y.ButtonLayout = m);
