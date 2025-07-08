n.d(t, { m: () => g });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(507274),
    a = n(930295),
    o = n(304789),
    c = n(231338),
    d = n(669546);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = c.Vq;
function g(e) {
    let { children: t, targetElementRef: n, shouldShow: r = !0, onRequestClose: c, position: g = 'top', align: h = 'center', hasVideo: f = !1, gradientColor: b } = e;
    return (0, i.jsx)(a.H, {
        targetElementRef: n,
        shouldShow: r,
        onRequestClose: c,
        position: g,
        align: h,
        spacing: 14,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        renderPopout: (e) =>
            null != b
                ? (0, i.jsx)(o.$, {
                      color: b,
                      className: d.popoverGradientWrapper,
                      children: (0, i.jsx)(
                          l.V,
                          m(u({}, e), {
                              className: s()(d.popoverContentWithGradient, { [d['popover--video']]: f }),
                              returnRef: n,
                              children: t
                          })
                      )
                  })
                : (0, i.jsx)(
                      l.V,
                      m(u({}, e), {
                          className: s()(d.popover, { [d['popover--video']]: f }),
                          returnRef: n,
                          children: t
                      })
                  ),
        children: p
    });
}
