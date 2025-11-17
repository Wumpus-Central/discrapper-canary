n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(374470),
    o = n(531057);
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
function _(e) {
    e.removeAttribute("src"),
        Array.from(e.children).forEach((e) => {
            (0, a.kK)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")),
                (0, a.kK)(e, HTMLImageElement) && e.removeAttribute("src");
        });
    try {
        e.load();
    } catch (e) {}
}
let p = (e) => {
        var {
                alt: t,
                externalRef: n,
                autoPlay: a,
                playOnHover: s,
                responsive: c,
                mediaLayoutType: u,
                useReducedMotion: f,
            } = e,
            p = d(e, [
                "alt",
                "externalRef",
                "autoPlay",
                "playOnHover",
                "responsive",
                "mediaLayoutType",
                "useReducedMotion",
            ]);
        let h = !f && !s && a,
            m = i.useRef(null);
        function g() {
            var e;
            s && (null == m || null == (e = m.current) || e.play());
        }
        function E() {
            var e;
            s && (null == m || null == (e = m.current) || e.pause());
        }
        function b() {
            return u === o.h.MOSAIC
                ? {
                      width: "100%",
                      height: "100%",
                      maxHeight: "inherit",
                      objectFit: "contain",
                  }
                : c
                  ? y()
                  : {};
        }
        function y() {
            return {
                maxWidth: p.width,
                maxHeight: p.height,
                width: "100%",
                height: "100%",
            };
        }
        return (
            i.useLayoutEffect(
                () => () => {
                    let { current: e } = m;
                    null != e && _(e);
                },
                [],
            ),
            i.useLayoutEffect(
                () => (
                    "function" == typeof n ? (n(null), n(m.current)) : null != n && (n.current = m.current),
                    () => {
                        "function" == typeof n ? n(null) : null != n && (n.current = null);
                    }
                ),
                [n, m],
            ),
            (0, r.jsx)(
                "video",
                l(
                    {
                        "aria-label": t,
                        ref: m,
                        autoPlay: h,
                        onMouseEnter: g,
                        onMouseLeave: E,
                        onFocus: g,
                        onBlur: E,
                        style: b(),
                    },
                    p,
                ),
            )
        );
    },
    h = i.forwardRef((e, t) => (0, r.jsx)(p, u(l({}, e), { externalRef: t })));
