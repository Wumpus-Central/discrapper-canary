n.d(t, {
    A2: () => d,
    d$: () => u,
    xt: () => p,
}),
    n(896048);
var r = n(265690),
    i = n(121894),
    l = n(52133);

function a(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(661191);
let o = {},
    c = (0, r.h)((e) => ({
        pollsByChannelId: {},
        pollsByMessageId: {},
        updatePollState(t, n, r) {
            (0, i.r)(() => {
                e((e) => {
                    var i;
                    let l = r(null == (i = e.pollsByChannelId[t]) ? void 0 : i[n]);
                    return {
                        pollsByChannelId: s(a({}, e.pollsByChannelId), {
                            [t]: s(a({}, e.pollsByChannelId[t]), {
                                [n]: l,
                            }),
                        }),
                        pollsByMessageId: s(a({}, e.pollsByMessageId), {
                            [n]: l,
                        }),
                    };
                });
            });
        },
    }));

function u(e) {
    return c((t) => {
        var n;
        return null != (n = t.pollsByChannelId[e]) ? n : o;
    }, l.A);
}

function d(e, t, n) {
    c.getState().updatePollState(e, t, n);
}

function p(e, t) {
    var n;
    return null == (n = c.getState().pollsByChannelId[e]) ? void 0 : n[t];
}
