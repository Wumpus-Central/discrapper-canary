(n.d(t, { m: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(66546),
    s = n(507274),
    c = n(930295),
    u = n(304789),
    d = n(866577),
    p = n(231338),
    m = n(669546);
let f = p.Vq;
function h(e) {
    let { children: t, targetElementRef: n, shouldShow: l = !0, onRequestClose: p, position: h = 'top', align: g = 'center', hasVideo: b = !1, gradientColor: v, caretConfig: y } = e,
        [j, C] = i.useState(l);
    i.useEffect(() => {
        l && C(!0);
    }, [l]);
    let _ = (0, d.i)({
        shouldShow: l,
        caretPosition:
            (null == y ? void 0 : y.position) != null
                ? y.position
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
                  })(h),
        onExitComplete: () => {
            C(!1);
        }
    });
    return (0, r.jsx)(c.H, {
        targetElementRef: n,
        shouldShow: j,
        onRequestClose: p,
        position: h,
        align: g,
        spacing: 14,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        renderPopout: (e) =>
            _((i, l) => {
                var c, d;
                if (!l) return null;
                let p = (0, r.jsx)(
                    s.V,
                    ((c = (function (e) {
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
                    })({}, e)),
                    (d = d =
                        {
                            className: a()(null != v ? m.popoverContentWithGradient : m.popover, { [m['popover--video']]: b }),
                            returnRef: n,
                            children: t
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(d)).forEach(function (e) {
                              Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(d, e));
                          }),
                    c)
                );
                return (0, r.jsx)(o.animated.div, {
                    'data-mana-component': 'popover',
                    style: i,
                    children:
                        null != v
                            ? (0, r.jsx)(u.$, {
                                  color: v,
                                  className: m.popoverGradientWrapper,
                                  children: p
                              })
                            : p
                });
            }),
        children: f
    });
}
