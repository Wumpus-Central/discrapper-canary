n.d(t, {
    PP: () => u,
    mz: () => d,
    z0: () => f,
});
var r = n(311907),
    i = n(617617),
    a = n(980504);

function s(e, t, n) {
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

function o(e) {
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
                s(e, t, n[t]);
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
    return (e[(e.GLOBAL = 0)] = "GLOBAL"), (e[(e.GUILD = 1)] = "GUILD"), e;
})({});

function d(e) {
    return (0, r.bG)([i.A], () => {
        var t, n;
        return p(e, null != (t = null == (n = i.A.settings.guilds) ? void 0 : n.guilds) ? t : {});
    });
}

function f(e) {
    var t, n;
    return p(e, null != (t = null == (n = i.A.settings.guilds) ? void 0 : n.guilds) ? t : {});
}

function p(e, t) {
    var n, r;
    let i = null == (n = t[e]) ? void 0 : n.joinSound,
        s = null == (r = t[a.XH]) ? void 0 : r.joinSound,
        l = null != i ? i : s;
    return null != l
        ? c(o({}, l), {
              type: +(null != i),
          })
        : void 0;
}
