n.d(t, {
    Nu: () => _,
    O9: () => f,
    iq: () => h,
    oG: () => p,
});
var r = n(73153),
    i = n(961350),
    a = n(3137),
    s = n(559908),
    o = n(862570);
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    r.h.dispatch({
        type: "POGGERMODE_SETTINGS_UPDATE",
        settings: e,
    });
    let t = c({}, a.A.getState(), e);
    (0, o.A)(t);
}
function p(e) {
    r.h.dispatch(c({ type: "POGGERMODE_UPDATE_COMBO" }, e));
}
function _(e) {
    r.h.dispatch({
        type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
        comboMessage: d(c({}, e), { displayed: !0 }),
    });
}
function h(e, t) {
    var n;
    let a = i.default.getId(),
        o = s.Ay.getUserCombo(a, e);
    null != o &&
        r.h.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: {
                combo: o,
                channelId: e,
                messageId: t,
                displayed: !1,
            },
        });
    let l =
        null != o && (null == o ? void 0 : o.value) > 0
            ? (null != (n = null == o ? void 0 : o.multiplier) ? n : 0) + 1
            : 1;
    r.h.dispatch({
        type: "POGGERMODE_UPDATE_COMBO",
        channelId: e,
        userId: a,
        multiplier: l,
        value: 0,
    });
}
