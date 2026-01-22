n.d(t, {
    Wg: () => g,
    cy: () => b,
    p: () => E,
});
var r = n(627968),
    i = n(990078),
    a = n(732955),
    s = n(397927),
    o = n(235986),
    l = n(999784),
    c = n(683433),
    u = n(513670);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
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
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let g = (e) => {
        let { message: t } = e;
        return (0, r.jsx)(s.wx6, {
            type: "critical",
            children: t,
        });
    },
    E = (e) => {
        let { onClick: t, loading: n, disabled: s, text: o, tooltipText: l } = e,
            c = f({ text: o }, h(e, ["onClick", "loading", "disabled", "text", "tooltipText"])),
            u = (0, r.jsx)(
                a.$nd,
                _(f({}, c), {
                    onClick: t,
                    loading: n,
                    disabled: s,
                    text: o,
                }),
            );
        return null != l
            ? (0, r.jsx)(i.m, {
                  text: l,
                  asContainer: !0,
                  children: u,
              })
            : u;
    },
    b = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: i } = e,
            a = h(e, ["primaryCTAButtonProps", "showLockIcon", "onBackClick"]);
        return (0, r.jsxs)(
            s.jlY,
            _(
                f(
                    {
                        className: u.B,
                        direction: o.A.Direction.HORIZONTAL,
                        justify: null != i ? o.A.Justify.BETWEEN : o.A.Justify.END,
                        "data-migration-pending": !0,
                    },
                    a,
                ),
                {
                    children: [
                        null != i ? (0, r.jsx)(c.A, { onClick: i }) : null,
                        n && (0, r.jsx)(l.A, {}),
                        (0, r.jsx)(E, f({}, t)),
                    ],
                },
            ),
        );
    };
