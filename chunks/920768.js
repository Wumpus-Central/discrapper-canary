r.d(t, { A: () => h }), r(896048);
var n = r(627968),
    s = r(64700),
    i = r(503698),
    a = r.n(i),
    l = r(432022),
    o = r(397927),
    c = r(557722),
    u = r(219716),
    d = r(484410);
function h(e) {
    let { show: t, alpha2: r, countryCode: i } = e,
        h = s.useRef(null),
        p = s.useRef(null),
        [f, y] = s.useState(0),
        [m, g] = s.useState(!1);
    s.useEffect(() => {
        function e() {
            var e, r;
            y(t && null != (e = null == (r = p.current) ? void 0 : r.getBoundingClientRect().width) ? e : 0);
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [t, r, i]);
    let O = (0, o.zhh)({
        width: "".concat(f, "px"),
        onStart: () => {
            g(!0);
        },
        onRest: () => {
            g(!1);
        },
    });
    return (0, n.jsx)(o.YNO, {
        targetElementRef: h,
        position: "top",
        renderPopout: (e) =>
            (0, n.jsx)(u.A, {
                className: d.SW,
                onClick: (t) => {
                    c.A.setCountryCode(t), e.closePopout();
                },
            }),
        children: (e) => {
            var s, c;
            return (0, n.jsx)("div", {
                className: a()(d.nw, { [d.R]: !(t || m) }),
                ref: h,
                children: (0, n.jsx)(l.animated.div, {
                    className: d.kL,
                    style: O,
                    children: (0, n.jsxs)("div", {
                        className: d.WH,
                        ref: p,
                        children: [
                            (0, n.jsxs)(
                                o.DUT,
                                ((s = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = r[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = n);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (c = c =
                                    {
                                        className: d.kf,
                                        children: [r, " ", i],
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
                                    : (function (e, t) {
                                          var r = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              r.push.apply(r, n);
                                          }
                                          return r;
                                      })(Object(c)).forEach(function (e) {
                                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e));
                                      }),
                                s),
                            ),
                            (0, n.jsx)("div", { className: d.me }),
                        ],
                    }),
                }),
            });
        },
    });
}
