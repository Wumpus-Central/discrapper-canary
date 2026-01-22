let r;
n.d(t, {
    A: () => T,
}),
    n(896048);
var i,
    a = n(311907),
    s = n(73153),
    o = n(927813),
    l = n(661191),
    c = n(605510);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
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

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 3,
    h = 4,
    m = 14 * o.A.Millis.DAY,
    g = Object.freeze([]),
    E = {},
    b = {};

function y(e) {
    var t;
    let { messageId: n, channelId: r, attachments: i } = e,
        a = {
            messageId: n,
            channelId: r,
            attachments: i,
            reportSubmit: !1,
        },
        s = null != (t = b[r]) ? t : g;
    (b[r] = [...s, a]), (E[n] = a);
}

function O(e) {
    let { messageId: t, channelId: n } = e,
        r = b[n];
    null != r &&
        ((b[n] = r.map((e) =>
            e.messageId === t
                ? p(d({}, e), {
                      reportSubmit: !0,
                  })
                : e,
        )),
        (E[t] = p(d({}, E[t]), {
            reportSubmit: !0,
        })));
}

function A() {
    S();
}

function v(e) {
    let { explicitContentScanVersion: t } = e;
    (r = t), S();
}

function S() {
    (E = {}), (b = {});
}
class I extends (i = a.Ay.Store) {
    getFpMessageInfo(e) {
        return E[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null != (t = b[e]) ? t : g;
    }
    canSubmitFpReport(e) {
        let t = E[e];
        return null != t && !t.reportSubmit && l.default.age(t.messageId) < m;
    }
    get validContentScanVersion() {
        return (0, c.jV)("ExplicitMediaStore.validContentScanVersion")
            ? null != r
                ? r
                : h
            : Math.min(null != r ? r : _, _);
    }
}
u(I, "displayName", "FalsePositiveStore");
let T = new I(s.h, {
    LOGOUT: A,
    CONNECTION_OPEN: v,
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: y,
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: O,
});
