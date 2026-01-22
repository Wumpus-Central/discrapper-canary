n.d(t, { h: () => o });
var r = n(627968),
    l = n(64700),
    i = n(416696),
    a = n(709562),
    s = n(985018);
function o(e) {
    let t,
        n,
        {
            hasPermission: o,
            streamActive: c,
            isSelfStream: u,
            centerButton: d,
            onMouseEnter: f,
            onMouseLeave: p,
            renderNUXHighlight: h,
            buttonRef: b,
        } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, [
            "hasPermission",
            "streamActive",
            "isSelfStream",
            "centerButton",
            "onMouseEnter",
            "onMouseLeave",
            "renderNUXHighlight",
            "buttonRef",
        ]),
        m = d ? a.l : a.A;
    n = c
        ? u
            ? s.intl.string(s.t.S5anIc)
            : s.intl.string(s.t.q3O3J8)
        : o
          ? s.intl.string(s.t.fjBNo1)
          : s.intl.string(s.t.uQn9B8);
    let { Component: A, events: y, play: O } = (0, i.c)(c ? "disable" : "enable");
    return (
        l.useEffect(() => () => O(), [c, O]),
        (0, r.jsx)(
            m,
            (function (e) {
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
            })(
                {
                    buttonRef: b,
                    isTrayButton: !0,
                    label: n,
                    disabled: !o,
                    iconComponent: A,
                    isActive: c,
                    color: (h ? (t = "premiumGradient") : c && (t = "green"), t),
                    onMouseEnter: (e) => {
                        null == f || f(e), y.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == p || p(e), y.onMouseLeave();
                    },
                },
                g,
            ),
        )
    );
}
