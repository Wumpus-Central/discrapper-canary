n.d(t, {
    A: () => I,
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
    d = n(193658),
    f = n(526162),
    p = n(603880),
    _ = n(635917),
    h = n(355097),
    m = n(985018),
    g = n(638959),
    E = n(944255);

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

function y(e) {
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

function O(e, t) {
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
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v(e, t) {
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

function I(e) {
    let { className: t, disabled: n, isEditor: b, renderCTAButtons: O } = e,
        [S] = (0, a.yK)([f.A], () => [f.A.getCurrentDesktopIcon()]),
        I = i.useRef(null);
    (0, d.A)(I, h.kq.CUSTOM_APP_ICONS);
    let T = (0, c.GV)(),
        C = (0, s._u)({
            orientation: "horizontal",
            labelledBy: T,
        }),
        { ref: N } = C,
        R = v(C, ["ref"]),
        w = (e) => {
            l.h.dispatch({
                type: "APP_ICON_UPDATED",
                id: e,
            });
        };
    return (0, r.jsx)("div", {
        ref: I,
        children: (0, r.jsx)(
            "div",
            A(y({}, R), {
                ref: N,
                className: g.__invalid_container,
                children: (0, r.jsxs)("div", {
                    className: t,
                    children: [
                        (0, r.jsxs)("div", {
                            className: g.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: g.so,
                                    children: [
                                        !b &&
                                            (0, r.jsxs)("div", {
                                                className: g.DD,
                                                children: [
                                                    (0, r.jsx)(o.Heading, {
                                                        className: g.Qw,
                                                        variant: "text-lg/medium",
                                                        children: m.intl.string(m.t.NThqTw),
                                                    }),
                                                    (0, r.jsx)(u.A, {
                                                        className: g.PC,
                                                    }),
                                                ],
                                            }),
                                        (0, r.jsx)(o.Heading, {
                                            variant: "text-sm/normal",
                                            className: E.W$,
                                            children: m.intl.string(m.t.IgENJo),
                                        }),
                                    ],
                                }),
                                null == O ? void 0 : O(),
                            ],
                        }),
                        (0, r.jsx)(o.BJc, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: {
                                marginTop: 16,
                            },
                            children: (0, _.v8)()
                                .filter((e) => {
                                    let { isHidden: t } = e;
                                    return !t;
                                })
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        p.A,
                                        {
                                            icon: e,
                                            isSelected: S === e.id,
                                            onSelect: (e) => w(e),
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
