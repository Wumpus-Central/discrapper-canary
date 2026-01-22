n.d(t, { A: () => _ });
var r,
    i = n(311907),
    a = n(73153);
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
let u = d();
function d() {
    return { ignoreTimestamps: {} };
}
function f(e) {
    let { userId: t, timestamp: n } = e;
    u.ignoreTimestamps[t] = n;
}
class p extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        let n = null != (t = null == e ? void 0 : e.ignoreTimestamps) ? t : {};
        u = c(o({}, d()), { ignoreTimestamps: n });
    }
    getState() {
        return u;
    }
    getIgnoreTimestamps() {
        return u.ignoreTimestamps;
    }
}
s(p, "displayName", "IgnoreNoticeStore"), s(p, "persistKey", "IgnoreNoticeStore");
let _ = new p(a.h, { RELATIONSHIP_IGNORE_USER_SUCCESS: f });
