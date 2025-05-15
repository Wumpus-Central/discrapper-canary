n.d(t, {
    k9: () => f,
    tT: () => d,
    zx: () => u
});
var r = n(442837),
    i = n(581883),
    o = n(710111);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var u = (function (e) {
    return (e[(e.GLOBAL = 0)] = 'GLOBAL'), (e[(e.GUILD = 1)] = 'GUILD'), e;
})({});
function d(e) {
    return (0, r.e7)([i.Z], () => {
        var t, n;
        return _(e, null != (n = null == (t = i.Z.settings.guilds) ? void 0 : t.guilds) ? n : {});
    });
}
function f(e) {
    var t, n;
    return _(e, null != (n = null == (t = i.Z.settings.guilds) ? void 0 : t.guilds) ? n : {});
}
function _(e, t) {
    var n, r;
    let i = null == (n = t[e]) ? void 0 : n.joinSound,
        a = null == (r = t[o.hY]) ? void 0 : r.joinSound,
        l = null != i ? i : a;
    return null != l ? c(s({}, l), { type: +(null != i) }) : void 0;
}
