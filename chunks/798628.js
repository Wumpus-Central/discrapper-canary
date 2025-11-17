n.d(t, {
    cE: () => f,
    eu: () => _,
    fU: () => p,
});
var r = n(748521),
    i = n(731965),
    a = n(902704);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
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
let u = {},
    d = (0, r.F)((e) => ({
        polls: {},
        updatePollState(t, n, r) {
            (0, i.j)(() => {
                e((e) => {
                    var i;
                    return {
                        polls: c(s({}, e.polls), {
                            [t]: c(s({}, e.polls[t]), { [n]: r(null == (i = e.polls[t]) ? void 0 : i[n]) }),
                        }),
                    };
                });
            });
        },
    }));
function f(e) {
    return d((t) => {
        var n;
        return null != (n = t.polls[e]) ? n : u;
    }, a.Z);
}
function _(e, t, n) {
    d.getState().updatePollState(e, t, n);
}
function p(e, t) {
    var n;
    return null == (n = d.getState().polls[e]) ? void 0 : n[t];
}
