n.d(t, {
    A: () => v,
}),
    n(638769);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(835245),
    l = n(884362),
    c = n(837381),
    u = n(397927),
    d = n(417454),
    f = n(1659),
    p = n(9865),
    _ = n(652215),
    h = n(985018),
    m = n(420206);

function g(e, t, n) {
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

function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}

function b(e, t) {
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

function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function O(e, t) {
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
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function v(e) {
    let { guild: t, roles: n, className: a } = e,
        g = i.useMemo(() => "invite-roles-".concat((0, o.A)()), []),
        b = (0, l.Ay)({
            id: g,
            isEnabled: !0,
            scrollToStart: _.js$,
            scrollToEnd: _.js$,
            wrap: !0,
        }),
        A = i.useMemo(
            () => (null == t || null == n || 0 === n.length ? [] : n.map((e) => (0, p.Wj)(t.id, e)).sort(f.m)),
            [t, n],
        );
    if (null == t || 0 === A.length) return null;
    let v = A.length,
        S = h.intl.formatToPlainString(h.t.PCs0oo, {
            numRoles: v,
        });
    return (0, r.jsx)(c.hD, {
        navigator: b,
        children: (0, r.jsx)(c.PR, {
            children: (e) => {
                let { ref: n } = e,
                    i = O(e, ["ref"]);
                return (0, r.jsxs)("div", {
                    className: s()(m.zr, a),
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            className: m.Ed,
                            children: h.intl.string(h.t.stcSfI),
                        }),
                        (0, r.jsx)(
                            "div",
                            y(
                                E(
                                    {
                                        className: m.Ei,
                                        "aria-label": S,
                                        ref: n,
                                    },
                                    i,
                                ),
                                {
                                    children: A.map((e) =>
                                        (0, r.jsx)(
                                            d.b_,
                                            {
                                                className: m.Yq,
                                                role: e,
                                                canRemove: !1,
                                                onRemove: () => {},
                                                guildId: t.id,
                                                guild: t,
                                                disableBorderColor: !1,
                                            },
                                            e.id,
                                        ),
                                    ),
                                },
                            ),
                        ),
                    ],
                });
            },
        }),
    });
}
