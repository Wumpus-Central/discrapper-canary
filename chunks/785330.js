n.d(t, {
    A: () => m,
    F: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(835245),
    o = n(604238);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function p(e, t) {
    if ("string" == typeof e) return e;
    let { block: n } = e,
        i = d(e, ["block"]),
        o = t[n];
    if (null == o) return null;
    let s = (() => {
        if ("children" in e) {
            if (!Array.isArray(e.children) && null != e.children) return p(e.children, t);
            if (null != e.children && e.children.length > 0) return e.children.map((e) => p(e, t));
        }
        return null;
    })();
    return (0, r.jsx)(
        o,
        u(l({}, i), {
            children: s,
        }),
        (0, a.A)(),
    );
}

function _(e, t) {
    return e.children.map((e) => p(e, t));
}

function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.E;
    try {
        return _(e, t), !0;
    } catch (e) {
        return !1;
    }
}
let m = (e) => {
    let { layout: t, overrides: n } = e,
        a = (0, o.e)({
            overrides: n,
        }),
        s = i.useMemo(() => _(t, a), [t, a]);
    return (0, r.jsx)("div", {
        children: s,
    });
};
