n.d(t, {
    Ay: () => x,
    q0: () => g,
}),
    n(65821);
var i,
    r = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(133977),
    c = n.n(a),
    d = n(990078),
    u = n(397927),
    h = n(652215),
    p = n(484932);
function f(e, t, n) {
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
let b = h.UVF.DEFAULT,
    g = 1,
    y = s.createContext({
        type: b,
        opacity: g,
    }),
    A = s.createContext(void 0),
    m = (e) => {
        let { children: t, className: n } = e,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r,
                    s = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                        (i = n[r]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
                    return s;
                }
                if (
                    ((s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.getOwnPropertyNames(e);
                        for (i = 0; i < s.length; i++)
                            (n = s[i]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (r[n] = e[n]);
                        return r;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        (i = n[r]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
                return s;
            })(e, ["children", "className"]);
        return (0, r.jsx)(y.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, r.jsx)(A.Consumer, {
                    children: (e) => {
                        var l, a;
                        return (0, r.jsx)(
                            "div",
                            ((l = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            f(e, t, n[t]);
                                        });
                                }
                                return e;
                            })(
                                {
                                    className: o()(p.bar, p[c()(s)], n),
                                    style: e,
                                },
                                i,
                            )),
                            (a = a = { children: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            l),
                        );
                    },
                });
            },
        });
    };
class O extends (i = s.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, r.jsx)(A.Consumer, {
            children: (i) =>
                (0, r.jsx)(y.Consumer, {
                    children: (s) => {
                        let l = o()(p.body, p[c()(s.type)], n);
                        return e
                            ? (0, r.jsx)("div", {
                                  className: l,
                                  style: i,
                                  children: t,
                              })
                            : (0, r.jsx)(u.HOs, {
                                  fade: !0,
                                  className: l,
                                  children: t,
                              });
                    },
                }),
        });
    }
}
f(O, "defaultProps", { disableScroll: !1 });
let v = (e) => {
        let { type: t = b, width: n, height: i, children: s, className: l, opacity: a = g, onClick: d } = e;
        return (0, r.jsx)(y.Provider, {
            value: {
                type: t,
                opacity: a,
            },
            children: (0, r.jsx)("div", {
                className: o()(p.widget, p[c()(t)], l),
                style: {
                    width: n,
                    height: i,
                },
                onClick: d,
                children: s,
            }),
        });
    },
    E = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, r.jsx)(A.Consumer, {
            children: (e) =>
                (0, r.jsx)("div", {
                    className: o()(p.content, { [p.staticSize]: !i }, n),
                    style: e,
                    children: t,
                }),
        });
    };
(v.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [m, O, E];
    return (0, r.jsx)(y.Consumer, {
        children: (e) => {
            let { opacity: l } = e,
                o = { backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : l), ")") };
            if ("string" == typeof t.type) return s.cloneElement(t, { style: o });
            {
                if (i.includes(t.type))
                    return (0, r.jsx)(A.Provider, {
                        value: o,
                        children: t,
                    });
                let e = t.type.displayName;
                throw Error(
                    "Widget.Background cannot be wrapped around "
                        .concat(e, ". Pass a DOM node or one of ")
                        .concat(i.map((e) => "Widget." + e.name).join(",")),
                );
            }
        },
    });
}),
    (v.Body = O),
    (v.Content = E),
    (v.Icon = (e) => {
        let {
            ref: t,
            icon: n,
            label: i,
            onClick: s,
            tooltipPosition: l = "top",
            isTutorial: a = !1,
            isActive: c,
            size: h = 20,
        } = e;
        return (0, r.jsx)(d.m, {
            __unsupportedReactNodeAsText: a
                ? (0, r.jsx)("div", {
                      className: p.tutorialTip,
                      children: i,
                  })
                : i,
            "aria-label": i,
            position: l,
            forceOpen: a,
            children: (0, r.jsx)(u.DUT, {
                onClick: s,
                className: o()(p.icon, { [p.toggledIconOn]: c }),
                innerRef: t,
                "aria-label": i,
                children: (0, r.jsx)(n, {
                    color: "currentColor",
                    size: "custom",
                    width: h,
                    height: h,
                    role: "img",
                }),
            }),
        });
    }),
    (v.Bar = m);
let x = v;
