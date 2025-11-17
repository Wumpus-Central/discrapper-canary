n.d(t, {
    DF: () => m,
    ZP: () => j,
});
var r,
    i,
    l = n(54381);
n(473749);
var s = n(120356),
    o = n.n(s),
    a = n(755721),
    c = n(481060),
    d = n(493773),
    u = n(921944),
    f = n(164208);
function p(e) {
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
var m =
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
    _ = (((i = {})[(i.ADJACENT = 0)] = "ADJACENT"), (i[(i.STACKED = 1)] = "STACKED"), i);
let g = Object.freeze({
        brand: f.colorBrand,
        primary: f.colorPrimary,
    }),
    x = Object.freeze({
        brand: "always-white",
        primary: "header-primary",
    }),
    v = Object.freeze({
        brand: "always-white",
        primary: "text-default",
    });
function j(e) {
    let {
        color: t = "brand",
        className: n,
        header: r,
        headerClassName: i,
        content: s,
        contentClassName: m,
        buttonCTA: _,
        secondaryButtonCTA: j,
        onClick: b,
        onSecondaryClick: S,
        buttonProps: y = {
            color: a.zx.Colors.BRAND,
            look: a.zx.Looks.FILLED,
        },
        secondaryButtonProps: C = { color: a.zx.Colors.BRAND_INVERTED },
        onComponentMount: O,
        asset: w,
        markAsDismissed: P,
        caretPosition: T = "caretTopCenter",
        buttonLayout: Z = 0,
    } = e;
    (0, d.ZP)(() => {
        null == O || O();
    });
    let I = null != j;
    return (0, l.jsxs)("div", {
        className: o()(n, g[t], f.upsellTooltipWrapper, f[T]),
        children: [
            w,
            null == r
                ? null
                : (0, l.jsx)(c.Heading, {
                      color: x[t],
                      className: o()(i, f.upsellTooltipHeader),
                      variant: "heading-md/semibold",
                      children: r,
                  }),
            (0, l.jsx)(c.Text, {
                color: v[t],
                className: o()(m, f.content),
                variant: "text-sm/normal",
                children: s,
            }),
            null != _ || I
                ? (0, l.jsxs)("div", {
                      className: o()(f.upsellButtonsContainer, {
                          [f.upsellButtonsAdjacent]: 0 === Z,
                          [f.upsellButtonsStacked]: 1 === Z,
                      }),
                      children: [
                          I
                              ? (0, l.jsx)(
                                    a.zx,
                                    h(p({}, C), {
                                        fullWidth: 1 === Z,
                                        onClick: () => {
                                            null == S || S(), null == P || P(u.L.SECONDARY);
                                        },
                                        children: j,
                                    }),
                                )
                              : null,
                          null == _
                              ? null
                              : (0, l.jsx)(
                                    a.zx,
                                    h(p({}, y), {
                                        fullWidth: !I || 1 === Z,
                                        onClick: (e) => {
                                            b(e), null == P || P(u.L.PRIMARY);
                                        },
                                        children: _,
                                    }),
                                ),
                      ],
                  })
                : null,
        ],
    });
}
(j.CaretPosition = m), (j.ButtonLayout = _);
