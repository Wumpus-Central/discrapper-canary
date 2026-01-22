n.d(t, {
    _J: () => b,
    kF: () => A,
    wL: () => v,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(615300),
    c = n(421380),
    u = n(235986),
    d = n(713517),
    f = n(767997);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e, t) {
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
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var b = (function (e) {
    return (e.DEFAULT = "default"), (e.SMALL = "small"), e;
})({});
let y = {
        default: f.hk,
        small: f.p$,
    },
    O = {
        default: f.VE,
        small: f.TY,
    };
class A extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { className: t, shineSize: n, shinePaused: r } = e,
            a = g(e, ["className", "shineSize", "shinePaused"]);
        return (0, i.jsx)(
            l.A.div,
            m(_({}, a), {
                className: o()(f.dj, t, {
                    [f.EM]: r,
                }),
                children: (0, i.jsx)(u.A, {
                    align: u.A.Align.CENTER,
                    justify: u.A.Justify.CENTER,
                    className: y[n],
                    children: (0, i.jsx)("div", {
                        className: O[n],
                    }),
                }),
            }),
        );
    }
}
p(A, "defaultProps", {
    shineSize: "default",
});
let v = (e) => {
    let {
            children: t,
            className: n,
            disabled: r,
            submitting: s,
            pauseAnimation: l,
            shineSize: u = "default",
            shinePaused: p,
            buttonShineClassName: h,
            onlyShineOnHover: E,
        } = e,
        b = g(e, [
            "children",
            "className",
            "disabled",
            "submitting",
            "pauseAnimation",
            "shineSize",
            "shinePaused",
            "buttonShineClassName",
            "onlyShineOnHover",
        ]),
        y = a.useRef(null),
        O = (0, d.M)(y),
        v = !r && !s && !0 !== l && (!E || O);
    return (0, i.jsxs)(
        c.$n,
        m(
            _(
                {
                    "data-migration-pending": !0,
                    buttonRef: y,
                },
                b,
            ),
            {
                className: o()(f.WE, n),
                disabled: r,
                submitting: s,
                children: [
                    t,
                    v
                        ? (0, i.jsx)(A, {
                              "data-migration-pending": !0,
                              shinePaused: p,
                              className: o()(f.Qr, E ? f.PK : void 0, h),
                              shineSize: u,
                          })
                        : null,
                ],
            },
        ),
    );
};
v.ShineSizes = b;
