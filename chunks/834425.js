n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(729937),
    s = n(307600),
    o = n(998218);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
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
    if (((a = d(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function f(e) {
    let { activity: t, user: n, variant: l = "secondary", onAction: d } = e,
        f = u(e, ["activity", "user", "variant", "onAction"]);
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function p(e, t, n) {
        try {
            let r = await (0, a.yb)(e, t);
            if (r.button_urls.length <= n) return;
            let i = r.button_urls[n];
            if ("string" != typeof i) return;
            let l = o.A.safeParseWithQuery(i);
            if (null == l || null == l.protocol || null == l.hostname) return;
            (0, s.h)({
                href: o.A.format(l),
                trusted: !1,
            });
        } catch (e) {}
    }
    return (0, r.jsx)(r.Fragment, {
        children: t.buttons.map((e, a) =>
            (0, r.jsx)(
                i.Button,
                c(
                    {
                        text: e,
                        variant: l,
                        size: "sm",
                        fullWidth: !0,
                        onClick: () => {
                            null == d || d(), p(t, n.id, a);
                        },
                    },
                    f,
                ),
                "customButton-".concat(a),
            ),
        ),
    });
}
