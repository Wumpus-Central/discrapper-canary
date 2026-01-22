n.d(t, {
    $K: () => O,
    KF: () => m,
    Mx: () => b,
    iH: () => y,
    kj: () => g,
    ri: () => E,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(138869),
    l = n(386971),
    c = n(775486);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
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

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e, t) {
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
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = (e) => {
        let { application: t, asset: n, className: i } = e,
            a = _(e, ["application", "asset", "className"]);
        return (0, r.jsx)(
            o.A,
            d(
                {
                    application: t,
                    size: o.V.MEDIUM,
                    asset: n,
                    className: i,
                },
                a,
            ),
        );
    },
    g = (e) => {
        let { children: t, className: n, id: i } = e,
            o = _(e, ["children", "className", "id"]);
        return (0, r.jsx)(
            s.Heading,
            p(
                d(
                    {
                        className: a()(c.wx, n),
                        variant: "heading-xl/extrabold",
                        id: i,
                    },
                    o,
                ),
                {
                    children: t,
                },
            ),
        );
    };

function E() {
    return (0, r.jsx)("hr", {
        className: c.yF,
    });
}
let b = (e) => {
        let { className: t, title: n, description: i } = e,
            a = _(e, ["className", "title", "description"]);
        return (0, r.jsxs)(
            "div",
            p(
                d(
                    {
                        className: t,
                    },
                    a,
                ),
                {
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            children: n,
                        }),
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-sm/normal",
                            color: "text-default",
                            children: i,
                        }),
                    ],
                },
            ),
        );
    },
    y = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: s } = e,
            o = _(e, ["applicationId", "storeListingBenefits", "skuBenefits", "className"]);
        return (0, r.jsx)(
            "div",
            p(
                d(
                    {
                        className: a()(c.iq, s),
                    },
                    o,
                ),
                {
                    children: (0, r.jsx)(l.mc, {
                        applicationId: t,
                        storeListingBenefits: n,
                        skuBenefits: i,
                        className: c.gX,
                    }),
                },
            ),
        );
    },
    O = (e) => {
        let { children: t, className: n } = e,
            i = _(e, ["children", "className"]);
        return (0, r.jsx)(
            "div",
            p(
                d(
                    {
                        className: a()(c.kL, n),
                    },
                    i,
                ),
                {
                    children: t,
                },
            ),
        );
    };
