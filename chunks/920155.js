(n.d(t, { m: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(66546),
    l = n(507274),
    c = n(930295),
    u = n(304789),
    d = n(866577),
    f = n(231338),
    _ = n(669546);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 10,
    b = 4,
    y = f.Vq;
function O(e) {
    let { children: t, targetElementRef: n, shouldShow: a = !0, onRequestClose: f, position: p = 'top', align: m = 'center', hasVideo: O = !1, gradientColor: v, caretConfig: I } = e,
        [T, S] = i.useState(a);
    i.useEffect(() => {
        a && S(!0);
    }, [a]);
    let A = () => {
            S(!1);
        },
        N = (e) => {
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
        },
        C = (0, d.i)({
            shouldShow: a,
            caretPosition: (null == I ? void 0 : I.position) != null ? I.position : N(p),
            onExitComplete: A
        }),
        R = (e) =>
            C((i, a) => {
                if (!a) return null;
                let c = (0, r.jsx)(
                    l.V,
                    g(h({}, e), {
                        className: o()(null != v ? _.popoverContentWithGradient : _.popover, { [_['popover--video']]: O }),
                        returnRef: n,
                        children: t
                    })
                );
                return (0, r.jsx)(s.animated.div, {
                    'data-mana-component': 'popover',
                    style: i,
                    children:
                        null != v
                            ? (0, r.jsx)(u.$, {
                                  color: v,
                                  className: _.popoverGradientWrapper,
                                  children: c
                              })
                            : c
                });
            });
    return (0, r.jsx)(c.H, {
        targetElementRef: n,
        shouldShow: T,
        onRequestClose: f,
        position: p,
        align: m,
        spacing: E + b,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        renderPopout: R,
        children: y
    });
}
