n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(531057),
    o = n(374470);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    e.removeAttribute("src"),
        Array.from(e.children).forEach((e) => {
            (0, o.kK)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")),
                (0, o.kK)(e, HTMLImageElement) && e.removeAttribute("src");
        });
    try {
        e.load();
    } catch (e) {}
}
let _ = (e) => {
        var {
                alt: t,
                externalRef: n,
                autoPlay: o,
                playOnHover: s,
                onPlayError: c,
                responsive: u,
                mediaLayoutType: f,
                useReducedMotion: _,
            } = e,
            m = d(e, [
                "alt",
                "externalRef",
                "autoPlay",
                "playOnHover",
                "onPlayError",
                "responsive",
                "mediaLayoutType",
                "useReducedMotion",
            ]);
        let h = !_ && !s && o,
            g = i.useRef(null);
        function E() {
            var e, t;
            s &&
                (null == g ||
                    null == (t = g.current) ||
                    null == (e = t.play()) ||
                    e.catch((e) => {
                        if (null != c) c(e);
                        else throw e;
                    }));
        }
        function b() {
            var e;
            s && (null == g || null == (e = g.current) || e.pause());
        }
        function y() {
            return f === a.h.MOSAIC
                ? {
                      width: "100%",
                      height: "100%",
                      maxHeight: "inherit",
                      objectFit: "contain",
                  }
                : u
                  ? O()
                  : {};
        }
        function O() {
            return {
                maxWidth: m.width,
                maxHeight: m.height,
                width: "100%",
                height: "100%",
            };
        }
        return (
            i.useLayoutEffect(
                () => () => {
                    let { current: e } = g;
                    null != e && p(e);
                },
                [],
            ),
            i.useLayoutEffect(
                () => (
                    "function" == typeof n ? (n(null), n(g.current)) : null != n && (n.current = g.current),
                    () => {
                        "function" == typeof n ? n(null) : null != n && (n.current = null);
                    }
                ),
                [n, g],
            ),
            (0, r.jsx)(
                "video",
                l(
                    {
                        "aria-label": t,
                        ref: g,
                        autoPlay: h,
                        onMouseEnter: E,
                        onMouseLeave: b,
                        onFocus: E,
                        onBlur: b,
                        style: y(),
                    },
                    m,
                ),
            )
        );
    },
    m = i.forwardRef((e, t) => (0, r.jsx)(_, u(l({}, e), { externalRef: t })));
