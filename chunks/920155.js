(n.d(t, { m: () => b }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(42133),
    o = n(507274),
    c = n(930295),
    d = n(304789),
    u = n(866577),
    m = n(231338),
    p = n(669546);
function g(e) {
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
function h(e, t) {
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
let f = m.Vq;
function b(e) {
    let { children: t, targetElementRef: n, shouldShow: s = !0, onRequestClose: m, position: b = 'top', align: x = 'center', hasVideo: _ = !1, gradientColor: j, caretConfig: E } = e,
        [O, C] = r.useState(s);
    r.useEffect(() => {
        s && C(!0);
    }, [s]);
    let v = (0, u.i)({
        shouldShow: s,
        caretPosition:
            (null == E ? void 0 : E.position) != null
                ? E.position
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
            C(!1);
        }
    });
    return (0, i.jsx)(c.H, {
        targetElementRef: n,
        shouldShow: O,
        onRequestClose: m,
        position: b,
        align: x,
        spacing: 14,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        renderPopout: (e) =>
            v((r, s) =>
                s
                    ? null != j
                        ? (0, i.jsx)(l.animated.div, {
                              style: r,
                              children: (0, i.jsx)(d.$, {
                                  color: j,
                                  className: p.popoverGradientWrapper,
                                  children: (0, i.jsx)(
                                      o.V,
                                      h(g({}, e), {
                                          className: a()(p.popoverContentWithGradient, { [p['popover--video']]: _ }),
                                          returnRef: n,
                                          children: t
                                      })
                                  )
                              })
                          })
                        : (0, i.jsx)(l.animated.div, {
                              style: r,
                              children: (0, i.jsx)(
                                  o.V,
                                  h(g({}, e), {
                                      className: a()(p.popover, { [p['popover--video']]: _ }),
                                      returnRef: n,
                                      children: t
                                  })
                              )
                          })
                    : null
            ),
        children: f
    });
}
