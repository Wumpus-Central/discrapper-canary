n.d(t, {
    A2: () => p,
    d$: () => f,
    xt: () => _,
}),
    n(896048);
var r = n(265690),
    i = n(121894),
    a = n(52133);

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
n(661191);
let u = {},
    d = (0, r.h)((e) => ({
        pollsByChannelId: {},
        pollsByMessageId: {},
        updatePollState(t, n, r) {
            (0, i.r)(() => {
                e((e) => {
                    var i;
                    let a = r(null == (i = e.pollsByChannelId[t]) ? void 0 : i[n]);
                    return {
                        pollsByChannelId: c(o({}, e.pollsByChannelId), {
                            [t]: c(o({}, e.pollsByChannelId[t]), {
                                [n]: a,
                            }),
                        }),
                        pollsByMessageId: c(o({}, e.pollsByMessageId), {
                            [n]: a,
                        }),
                    };
                });
            });
        },
    }));

function f(e) {
    return d((t) => {
        var n;
        return null != (n = t.pollsByChannelId[e]) ? n : u;
    }, a.A);
}

function p(e, t, n) {
    d.getState().updatePollState(e, t, n);
}

function _(e, t) {
    var n;
    return null == (n = d.getState().pollsByChannelId[e]) ? void 0 : n[t];
}
