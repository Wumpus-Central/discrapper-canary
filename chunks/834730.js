n.d(t, { E: () => b }), n(446912), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(322925),
    l = n.n(o),
    c = n(827734),
    u = n(845188),
    d = n(60639);
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
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
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let E = Object.fromEntries(Object.keys(c.A.colors).map((e) => [l()(e), e])),
    b = i.forwardRef(function (e, t) {
        let n,
            [i, ...a] = [e, t],
            {
                variant: o,
                tag: l = "div",
                selectable: f = !1,
                className: _,
                lineClamp: g,
                color: b,
                tabularNumbers: y = !1,
                scaleFontToUserSetting: O = !1,
            } = i,
            A = m(i, [
                "variant",
                "tag",
                "selectable",
                "className",
                "lineClamp",
                "color",
                "tabularNumbers",
                "scaleFontToUserSetting",
            ]),
            [v] = a,
            S = l,
            I = "",
            T = {};
        if (
            (null != g &&
                (1 === g
                    ? (I = u.DN)
                    : ((I = u.ED),
                      (T = {
                          lineClamp: g,
                          WebkitLineClamp: g,
                      }))),
            void 0 !== b)
        )
            switch (b) {
                case "currentColor":
                    n = "currentColor";
                    break;
                case "none":
                    n = void 0;
                    break;
                case "always-white":
                    n = "white";
                    break;
                default:
                    var C;
                    n = null == (C = c.A.colors[E[b]]) ? void 0 : C.css;
            }
        let N = p({ color: n }, T, A.style);
        return (0, r.jsx)(
            S,
            h(
                p(
                    {
                        ref: v,
                        className: s()(
                            {
                                [u.fT]: void 0 === b,
                                [u.rb]: f,
                                [u.w9]: y,
                                [d.fontScaling]: O,
                            },
                            I,
                            d[o],
                            _,
                        ),
                    },
                    A,
                ),
                {
                    style: Object.values(N).filter(Boolean).length > 0 ? N : void 0,
                    "data-text-variant": o,
                },
            ),
        );
    });
