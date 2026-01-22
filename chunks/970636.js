n.d(t, {
    A: () => O,
    r: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(446080),
    l = n(397927),
    c = n(267102),
    u = n(675991),
    d = n(709562),
    f = n(652215),
    p = n(724718);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
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
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function y(e) {
    let t = (0, u.Q)(e),
        {
            enabled: n,
            cameraUnavailable: a,
            onChange: s,
            onCameraUnavailable: d,
            hasPermission: p,
            children: _,
            channelLimitReached: h = !1,
            join: m,
        } = e,
        g = (0, c.Us)(),
        E = a ? () => d() : () => s(!e.enabled, g),
        { Component: b, play: y, events: O } = (0, o.K)(m || n ? "disable" : "enable");
    i.useEffect(() => () => y(), [n, y]);
    let A = m ? l.npA : g === f.BRT.POPOUT ? (n ? l.npA : l.OCo) : b;
    return (0, r.jsx)(r.Fragment, {
        children: _({
            onClick: E,
            isActive: n,
            disabled: !n && (!p || h),
            iconComponent: A,
            iconColor: "currentColor",
            label: t,
            unavailable: a,
            onMouseEnter: m ? void 0 : O.onMouseEnter,
            onMouseLeave: m ? void 0 : O.onMouseLeave,
        }),
    });
}
function O(e) {
    let {
            enabled: t,
            join: n,
            channel: i,
            onChange: a,
            onCameraUnavailable: o,
            cameraUnavailable: l,
            hasPermission: c,
            className: u,
            channelLimitReached: f,
            channelLimit: _,
            centerButton: m = !1,
            onPopoutClick: b,
        } = e,
        O = E(e, [
            "enabled",
            "join",
            "channel",
            "onChange",
            "onCameraUnavailable",
            "cameraUnavailable",
            "hasPermission",
            "className",
            "channelLimitReached",
            "channelLimit",
            "centerButton",
            "onPopoutClick",
        ]),
        A = m ? d.l : d.A,
        v = () => (n ? "join" : t ? "green" : "primaryDark"),
        S = (e) => (n ? "join" : e ? "green" : O.color);
    return (0, r.jsx)(y, {
        enabled: t,
        join: n,
        channel: i,
        onChange: a,
        onCameraUnavailable: o,
        cameraUnavailable: l,
        hasPermission: c,
        channelLimitReached: f,
        channelLimit: _,
        children: (e) => {
            let { unavailable: t, onMouseEnter: i, onMouseLeave: a, isActive: o } = e,
                l = E(e, ["unavailable", "onMouseEnter", "onMouseLeave", "isActive"]);
            return (0, r.jsx)(
                A,
                g(h({}, l, O), {
                    color: S(o),
                    caretColor: v(),
                    isActive: o,
                    onMouseEnter: (e) => {
                        var t;
                        null == (t = O.onMouseEnter) || t.call(O, e), null == i || i();
                    },
                    onMouseLeave: (e) => {
                        var t;
                        null == (t = O.onMouseLeave) || t.call(O, e), null == a || a();
                    },
                    className: s()(u, { [p.t]: t }),
                    onPopoutClick: b,
                    isTrayButton: !n,
                }),
            );
        },
    });
}
