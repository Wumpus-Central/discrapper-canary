n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(763754),
    a = n(635071),
    s = n(812299);

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

function l(e) {
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

function c(e, t) {
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

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e) {
    var t, n;
    let o = (0, i.Ay)(e.message),
        c = (0, s.y)({
            message: e.message,
            channel: e.channel,
            user: null != (t = null == (n = e.message) ? void 0 : n.author) ? t : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
        }),
        d = {};
    return (
        null != c && (d[a.w.SYSTEM_TAG] = c),
        (0, r.jsx)(
            a.A,
            u(l({}, e), {
                author: o,
                decorations: d,
            }),
        )
    );
}
