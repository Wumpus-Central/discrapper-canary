n.d(t, {
    A: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(421380),
    o = n(397927),
    l = n(73153),
    c = n(915089),
    u = n(450232),
    d = n(358776),
    f = n(193658),
    p = n(526162),
    _ = n(603880),
    h = n(635917),
    m = n(355097),
    g = n(985018),
    E = n(638959),
    y = n(944255);

function b(e, t, n) {
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

function O(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
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

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function I(e, t) {
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
    if (((a = S(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function T(e) {
    let { className: t, disabled: n, isEditor: b, renderCTAButtons: v } = e,
        [S] = (0, a.yK)([p.A], () => [p.A.getCurrentDesktopIcon()]),
        T = (0, d.dk)("AppIconSelectionGroup"),
        C = i.useRef(null);
    (0, f.A)(C, m.kq.CUSTOM_APP_ICONS);
    let N = (0, c.GV)(),
        R = (0, s._u)({
            orientation: "horizontal",
            labelledBy: N,
        }),
        { ref: w } = R,
        P = I(R, ["ref"]),
        D = (e) => {
            l.h.dispatch({
                type: "APP_ICON_UPDATED",
                id: e,
            });
        };
    return (0, r.jsx)("div", {
        ref: C,
        children: (0, r.jsx)(
            "div",
            A(O({}, P), {
                ref: w,
                className: E.__invalid_container,
                children: (0, r.jsxs)("div", {
                    className: t,
                    children: [
                        (0, r.jsxs)("div", {
                            className: E.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: E.so,
                                    children: [
                                        !b &&
                                            (0, r.jsxs)("div", {
                                                className: E.DD,
                                                children: [
                                                    (0, r.jsx)(o.Heading, {
                                                        className: E.Qw,
                                                        variant: T ? "heading-xl/normal" : "text-lg/medium",
                                                        color: T ? "text-strong" : void 0,
                                                        children: g.intl.string(g.t.NThqTw),
                                                    }),
                                                    (0, r.jsx)(u.A, {
                                                        className: E.PC,
                                                    }),
                                                ],
                                            }),
                                        (0, r.jsx)(o.Heading, {
                                            variant: "text-sm/normal",
                                            className: y.W$,
                                            children: g.intl.string(g.t.IgENJo),
                                        }),
                                    ],
                                }),
                                null == v ? void 0 : v(),
                            ],
                        }),
                        (0, r.jsx)(o.BJc, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: {
                                marginTop: 16,
                            },
                            children: (0, h.v8)()
                                .filter((e) => {
                                    let { isHidden: t } = e;
                                    return !t;
                                })
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        _.A,
                                        {
                                            icon: e,
                                            isSelected: S === e.id,
                                            onSelect: (e) => D(e),
                                            disabled: n,
                                            tabIndex: 0 !== t || n ? void 0 : 0,
                                            locked: !1,
                                        },
                                        e.id,
                                    ),
                                ),
                        }),
                    ],
                }),
            }),
        ),
    });
}
