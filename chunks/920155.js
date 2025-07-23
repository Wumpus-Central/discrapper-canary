(n.d(t, { m: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(42133),
    s = n(507274),
    c = n(930295),
    u = n(304789),
    d = n(866577),
    p = n(231338),
    m = n(669546);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let g = p.Vq;
function b(e) {
    let { children: t, targetElementRef: n, shouldShow: l = !0, onRequestClose: p, position: b = 'top', align: v = 'center', hasVideo: y = !1, gradientColor: j, caretConfig: C } = e,
        [_, O] = i.useState(l);
    i.useEffect(() => {
        l && O(!0);
    }, [l]);
    let x = (0, d.i)({
        shouldShow: l,
        caretPosition:
            (null == C ? void 0 : C.position) != null
                ? C.position
                : ((e) => {
                      switch (e) {
                          case 'top':
                              return 'bottom';
                          case 'bottom':
                          default:
                              return 'top';
                          case 'left':
                              return 'right';
                          case 'right':
                              return 'left';
                      }
                  })(b),
        onExitComplete: () => {
            O(!1);
        }
    });
    return (0, r.jsx)(c.H, {
        targetElementRef: n,
        shouldShow: _,
        onRequestClose: p,
        position: b,
        align: v,
        spacing: 14,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        renderPopout: (e) =>
            x((i, l) =>
                l
                    ? null != j
                        ? (0, r.jsx)(o.animated.div, {
                              style: i,
                              children: (0, r.jsx)(u.$, {
                                  color: j,
                                  className: m.popoverGradientWrapper,
                                  children: (0, r.jsx)(
                                      s.V,
                                      h(f({}, e), {
                                          className: a()(m.popoverContentWithGradient, { [m['popover--video']]: y }),
                                          returnRef: n,
                                          children: t
                                      })
                                  )
                              })
                          })
                        : (0, r.jsx)(o.animated.div, {
                              style: i,
                              children: (0, r.jsx)(
                                  s.V,
                                  h(f({}, e), {
                                      className: a()(m.popover, { [m['popover--video']]: y }),
                                      returnRef: n,
                                      children: t
                                  })
                              )
                          })
                    : null
            ),
        children: g
    });
}
